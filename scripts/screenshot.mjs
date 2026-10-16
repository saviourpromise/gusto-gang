#!/usr/bin/env node
/**
 * Headless Playwright screenshot tool, used in place of the Claude-in-Chrome extension when
 * it's unavailable. Usage:
 *   node scripts/screenshot.mjs <path> [--width=1440] [--height=900] [--full] [--out=name.png]
 * Assumes the dev server is already running (default http://localhost:3001, override with
 * SCREENSHOT_BASE_URL). Writes into .screenshots/ (gitignored).
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const [, , routeArg, ...rest] = process.argv;
if (!routeArg) {
  console.error("Usage: node scripts/screenshot.mjs <path> [--width=1440] [--height=900] [--full] [--out=name.png]");
  process.exit(1);
}

const args = Object.fromEntries(
  rest
    .filter((a) => a.startsWith("--"))
    .map((a) => {
      const [k, v] = a.slice(2).split("=");
      return [k, v ?? true];
    }),
);

const width = Number(args.width ?? 1440);
const height = Number(args.height ?? 900);
const fullPage = args.full === undefined ? true : args.full !== "false";
const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3001";
const outDir = path.resolve(process.cwd(), ".screenshots");
const outName =
  args.out ?? `${routeArg === "/" ? "home" : routeArg.replace(/^\//, "").replace(/\//g, "-")}-${width}.png`;

await mkdir(outDir, { recursive: true });

// Use the system-installed Google Chrome via Playwright's "chrome" channel rather than the
// bundled Chromium: the bundled-browser download stalled badly on this network (~80MB in 20+
// minutes), so this avoids the download entirely while still using Playwright for the actual
// automation/screenshot work.
// Reduced-motion mode makes the Reveal component (components/ui/Reveal.tsx) skip its
// opacity/transform entrance animation and render content immediately visible — this avoids
// screenshot flakiness from whileInView triggers not firing for a programmatic (non-wheel)
// scroll, and doubles as a real check that the reduced-motion path actually shows everything.
// Pass --motion to opt out and scroll through normally to see the animations as a sighted user would.
const respectReducedMotion = !args.motion;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width, height },
  reducedMotion: respectReducedMotion ? "reduce" : "no-preference",
});
await page.goto(`${baseUrl}${routeArg}`, { waitUntil: "networkidle" });
// Give React a tick to hydrate and the Reveal components to resolve their reduced-motion check.
await page.waitForTimeout(300);

// Always scroll through incrementally — next/image uses native lazy-loading, so images below
// the fold never fetch their src at all without an actual scroll past them (fullPage screenshots
// capture whatever's currently loaded, not a magically-complete page). When not respecting
// reduced motion we also need this for whileInView reveals to fire; when we are, Reveal is
// already bypassed, so this pass can move faster.
await page.evaluate(
  async (perStepWaitMs) => {
    const step = Math.max(200, window.innerHeight * 0.5);
    let y = 0;
    const max = document.body.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, perStepWaitMs));
      y += step;
    }
    window.scrollTo(0, max);
    await new Promise((r) => setTimeout(r, 300));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  },
  respectReducedMotion ? 40 : 120,
);

// Wait for every <img> to finish loading before capturing.
await page.evaluate(async () => {
  const imgs = Array.from(document.images);
  await Promise.all(
    imgs
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          }),
      ),
  );
});

const outPath = path.join(outDir, outName);
await page.screenshot({ path: outPath, fullPage });
await browser.close();

console.log(outPath);

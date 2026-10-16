#!/usr/bin/env node
// Quick horizontal-overflow triage across routes/widths. Prints any element whose right edge
// exceeds the viewport, so real overflow bugs can be found without eyeballing every screenshot.
//
// Known false positive: "/" @ 390px reports docWidth > viewport with an empty offenders list.
// Root cause: MenuPreview's dish-card row is an intentionally horizontally-scrollable carousel
// (overflow-x-auto). document.documentElement.scrollWidth picks up its off-screen scrollable
// content even though the row's own clientWidth is correctly bounded and body has
// overflow-x:hidden — confirmed via a direct (non-fullPage) viewport screenshot that real users
// see a correctly laid-out, non-overflowing page. fullPage screenshots of this route can look
// wrong for the same reason (the capture stitches to the carousel's full scrollWidth); use a
// viewport-only screenshot to verify this specific route/width instead.
import { chromium } from "playwright";

const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3000";
const routes = ["/", "/menu", "/deals", "/about"];
const widths = [1440, 1024, 768, 390];

const browser = await chromium.launch({ channel: "chrome" });

for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(200);
    const result = await page.evaluate((vw) => {
      const docWidth = document.documentElement.scrollWidth;
      if (docWidth <= vw) return { overflow: false, docWidth };
      // Find the widest offenders, skipping anything already visually clipped by an
      // overflow-hidden ancestor (e.g. decorative background photos) — those don't actually
      // contribute to the page-level scrollbar, just to their own already-contained box.
      function clippedByAncestor(el) {
        let node = el.parentElement;
        while (node && node !== document.body) {
          const cs = getComputedStyle(node);
          // auto/scroll establish their own scrolling context and contain their children's
          // overflow just as much as hidden does for the purpose of page-level overflow.
          if (["hidden", "auto", "scroll", "clip"].includes(cs.overflowX)) return true;
          if (["hidden", "auto", "scroll", "clip"].includes(cs.overflow)) return true;
          node = node.parentElement;
        }
        return false;
      }
      const all = Array.from(document.querySelectorAll("body *"));
      const offenders = all
        .filter((el) => !clippedByAncestor(el))
        .map((el) => {
          const r = el.getBoundingClientRect();
          return { tag: el.tagName, cls: el.className?.toString().slice(0, 60), right: r.right, width: r.width };
        })
        .filter((o) => o.right > vw + 1)
        .sort((a, b) => b.right - a.right)
        .slice(0, 5);
      return { overflow: true, docWidth, offenders };
    }, width);
    if (result.overflow) {
      console.log(`\n=== ${route} @ ${width}px: OVERFLOW (docWidth=${result.docWidth}) ===`);
      for (const o of result.offenders) {
        console.log(`  <${o.tag}> right=${Math.round(o.right)} width=${Math.round(o.width)} class="${o.cls}"`);
      }
    } else {
      console.log(`${route} @ ${width}px: ok`);
    }
    await page.close();
  }
}

await browser.close();

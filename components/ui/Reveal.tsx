"use client";

import { motion } from "motion/react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/** Always `false` server-side — the server can't know the client's media-query preference, so
 * SSR must assume "not reduced" (matching the client's own first-render snapshot, see below). */
function getServerSnapshot() {
  return false;
}

/**
 * Gentle fade+slide entrance on scroll into view. Respects prefers-reduced-motion by rendering
 * fully visible immediately, with no viewport gate at all.
 *
 * Uses `useSyncExternalStore` rather than reading `matchMedia` directly during render: React
 * hydration does NOT patch a style-attribute mismatch between server and client output — it
 * logs a warning and keeps the server's markup as-is — so if the client's first render had
 * synchronously disagreed with the server (which always assumes "not reduced"), the opacity:0
 * inline style from SSR would stay stuck in the DOM forever for a reduced-motion visitor.
 * `useSyncExternalStore` forces that first client render to match `getServerSnapshot` exactly,
 * then resolves the real value in an ordinary follow-up render — safe, not part of hydration.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

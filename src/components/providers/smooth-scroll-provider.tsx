"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    let frame = 0;
    let lenis: Lenis | null = null;
    let idleCallbackId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const raf = (time: number) => {
      lenis?.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    const startLenis = () => {
      lenis = new Lenis({
        duration: 0.85,
        smoothWheel: true,
        syncTouch: false,
      });

      frame = window.requestAnimationFrame(raf);
    };

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(startLenis, { timeout: 700 });
    } else {
      timeoutId = globalThis.setTimeout(startLenis, 250);
    }

    return () => {
      if (idleCallbackId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
      window.cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}

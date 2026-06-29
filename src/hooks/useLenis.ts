"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations(active: boolean) {
  useEffect(() => {
    if (!active) return;

    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";

    ScrollTrigger.refresh();

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [active]);
}

export function useGSAPReveal(selector: string, active: boolean) {
  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      ctx = gsap.context(() => {
        elements.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });
      });

      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, [selector, active]);
}

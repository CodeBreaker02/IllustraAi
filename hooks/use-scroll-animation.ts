"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Custom hook to trigger animations when an element comes into view
 *
 * @param threshold - Value between 0 and 1 indicating the percentage that should be visible before triggering
 * @param triggerOnce - Whether the animation should only trigger once
 * @param rootMargin - Margin around the root (as in IntersectionObserver API)
 * @returns An object containing the animation controls and ref to be attached to the element
 */
export function useScrollAnimation(
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "-100px",
) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return { controls, ref };
}

export default useScrollAnimation;

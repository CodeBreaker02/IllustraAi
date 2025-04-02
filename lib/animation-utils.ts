// Shared animation variants and utility functions
import { Variants } from "framer-motion";

// Fade up animation for content elements
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Card hover animation (for pricing, features, etc.)
export const cardHoverVariant = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
};

// Button hover animation
export const buttonHoverVariant = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Scroll triggered animation
export const scrollTriggeredVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Image hover animation
export const imageHoverVariant = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

// Use this function to get sequential delay values
export const getSequentialDelay = (index: number, baseDelay: number = 0.1) => {
  return baseDelay * index;
};

// List item variants with sequential animation
export const listItemVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.3,
    },
  }),
};

// Fade in animation for entire sections
export const sectionFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
    },
  },
};

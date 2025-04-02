"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;

"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  duration?: number;
  delay?: number;
}
const BlurIn = ({ word, className, delay = 1, duration = 1 }: BlurIntProps) => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={{
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: {
          filter: "blur(0px)",
          opacity: 1,
        },
      }}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {word}
    </motion.h1>
  );
};

export { BlurIn };

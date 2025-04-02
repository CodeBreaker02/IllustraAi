"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/section-wrapper";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <SectionWrapper
      className="relative overflow-hidden py-16 lg:py-24"
      containerClassName="max-w-screen-xl"
    >
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/noise.svg')] bg-repeat bg-[length:200px_200px]"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ✨ Transform Your Photos Into Art
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Turn Boring Photos Into{" "}
              <span className="text-primary">Magical</span> Illustrations
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Upload any image and watch it transform into a beautiful Studio
              Ghibli-inspired artwork, anime, cartoon, or pixel art in seconds.
              No design skills needed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="#pricing"
                className={cn(
                  "group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground",
                  "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all",
                )}
              >
                Start Transforming Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>

              <a
                href="#how-it-works"
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full border border-secondary px-6 py-3 font-medium",
                  "hover:bg-secondary/10 hover:-translate-y-0.5 transition-all",
                )}
              >
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[450px] lg:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-full overflow-hidden rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform"
              style={{ backgroundColor: "var(--secondary)" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg"
                  alt="Original photo"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-md bg-white/80 px-4 py-2 backdrop-blur">
                    Original Photo
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 h-full w-full overflow-hidden rounded-2xl shadow-2xl -rotate-3 hover:rotate-0 transition-transform"
              style={{ backgroundColor: "var(--primary)" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg"
                  alt="Transformed illustration"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-md bg-white/80 px-4 py-2 backdrop-blur">
                    Ghibli Transformation
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

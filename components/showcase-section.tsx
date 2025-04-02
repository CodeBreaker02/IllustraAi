"use client";

import Image from "next/image";
import { Marquee } from "./magicui/marquee";
import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";

export default function ShowcaseSection() {
  // Sample showcase items
  const showcaseItems = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg",
      alt: "Client artwork 1",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg",
      alt: "Client artwork 2",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg",
      alt: "Client artwork 3",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg",
      alt: "Client artwork 4",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg",
      alt: "Client artwork 5",
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg",
      alt: "Client artwork 6",
    },
  ];

  const firstRow = showcaseItems.slice(0, showcaseItems.length / 2);
  const secondRow = [...showcaseItems].slice(showcaseItems.length / 2);

  return (
    <SectionWrapper
      id="features"
      className="overflow-hidden bg-secondary/20"
      containerClassName=""
    >
      <motion.div
        className="mx-auto max-w-3xl text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Our Customers Create Magic Every Day
        </h2>
        <p className="text-foreground/70 mx-auto max-w-2xl">
          Join thousands of creatives, marketers, and businesses who transform
          ordinary photos into extraordinary illustrations
        </p>
      </motion.div>

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        {/* First Marquee (Right to Left) */}
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((item) => (
            <motion.div
              key={item.id}
              className="mx-4 rounded-lg overflow-hidden shadow-lg h-60 w-60 flex-shrink-0"
              whileHover={{ scale: 1.08, rotate: 2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </Marquee>

        {/* Second Marquee (Left to Right) */}
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
          {secondRow.map((item) => (
            <motion.div
              key={`reverse-${item.id}`}
              className="mx-4 rounded-lg overflow-hidden shadow-lg h-60 w-60 flex-shrink-0"
              whileHover={{ scale: 1.08, rotate: -2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </Marquee>

        {/* Add edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary/20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary/20"></div>
      </div>
    </SectionWrapper>
  );
}

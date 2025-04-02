"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionWrapper from "./section-wrapper";

function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-xl bg-white p-8 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i + delay, duration: 0.3 }}
          >
            <Star size={20} fill="var(--primary)" color="var(--primary)" />
          </motion.div>
        ))}
      </div>
      <p className="italic mb-6">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
          <Image
            src="https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg"
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-foreground/70">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  // Testimonial data
  const testimonials = [
    {
      quote:
        "IllustraAI transformed my travel photos into stunning Ghibli-style art that I've printed and framed. Everyone asks where I got them!",
      name: "Sarah Johnson",
      role: "Travel Photographer",
      rating: 5,
    },
    {
      quote:
        "As a digital marketer, I use IllustraAI to create unique visuals for campaigns. The results are consistently fantastic and save me thousands on custom illustrations.",
      name: "Michael Chen",
      role: "Marketing Director",
      rating: 5,
    },
    {
      quote:
        "My indie game development studio uses IllustraAI to quickly prototype character designs and backgrounds. It's an incredible time-saver for our small team.",
      name: "Alex Rivera",
      role: "Game Developer",
      rating: 5,
    },
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-secondary/20">
      <motion.div
        className="mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

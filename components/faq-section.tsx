"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { motion, AnimatePresence } from "framer-motion";

// FAQ item component
function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold pr-8">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-3 text-base text-foreground/80"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "How does IllustraAI transform my photos?",
      answer:
        "IllustraAI uses advanced machine learning algorithms to analyze your photos and apply artistic styles. Our technology preserves the essence of your image while transforming it into beautiful illustrations in various styles like cartoon, anime, pixel art, and more.",
      isOpen: false,
    },
    {
      question: "Can I customize the artistic style?",
      answer:
        "Absolutely! IllustraAI offers multiple artistic styles to choose from, including Studio Ghibli, anime, cartoon, pixel art, watercolor, and more. You can also adjust the intensity of the transformation to get the perfect look.",
      isOpen: false,
    },
    {
      question: "Is there a limit to how many images I can transform?",
      answer:
        "Each subscription plan comes with different image transformation limits. Our Basic plan includes 50 transformations per month, Pro offers 250, and our Enterprise plan provides unlimited transformations.",
      isOpen: false,
    },
    {
      question: "How long does it take to transform an image?",
      answer:
        "Most transformations complete within 5-10 seconds. For extremely high-resolution images or complex styles, it may take up to 30 seconds. We're constantly optimizing our algorithms to make transformations faster without sacrificing quality.",
      isOpen: false,
    },
    {
      question: "Can I use IllustraAI for commercial projects?",
      answer:
        "Yes! Our Pro and Enterprise plans include commercial usage rights. The Basic plan is for personal use only. Check our pricing page for more details on licensing terms.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      }),
    );
  };

  return (
    <SectionWrapper id="faq" className="bg-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-3xl divide-y border-accent">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

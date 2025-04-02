"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";

// Price tier card component
function PriceTier({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  delay = 0,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(
        "rounded-xl bg-white border overflow-hidden shadow-lg",
        isPopular ? "border-2 border-primary z-10 relative" : "border-accent",
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: isPopular ? 1.02 : 1.05,
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      {isPopular && (
        <motion.div
          className="absolute inset-x-0 top-0 flex justify-center -translate-y-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + delay, duration: 0.3 }}
        >
          <div className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
            Most Popular
          </div>
        </motion.div>
      )}

      <div
        className={cn(
          "p-6 text-center",
          isPopular ? "bg-primary/20" : "bg-accent/20",
        )}
      >
        <h3 className={cn("text-xl font-bold mb-2", isPopular && "text-2xl")}>
          {title}
        </h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        <div className="flex justify-center items-baseline mb-4">
          <span
            className={cn("font-bold", isPopular ? "text-5xl" : "text-4xl")}
          >
            {price}
          </span>
          <span className={cn("ml-1", isPopular ? "text-xl" : "text-lg")}>
            /month
          </span>
        </div>
      </div>

      <div className={cn("p-6", isPopular && "p-8")}>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + delay, duration: 0.3 }}
            >
              <Check
                size={isPopular ? 22 : 20}
                className={cn(
                  "mr-2 flex-shrink-0",
                  isPopular ? "mr-3 text-primary" : "text-primary",
                )}
              />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className={cn(
            "mt-6 w-full rounded-full py-3 font-medium transition-all",
            isPopular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-accent text-foreground hover:bg-accent/90",
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const priceTiers = [
    {
      title: "Basic",
      price: "$9",
      description: "Perfect for individuals",
      features: [
        "50 transformations/month",
        "5 artistic styles",
        "Standard resolution outputs",
        "Personal use only",
      ],
    },
    {
      title: "Pro",
      price: "$29",
      description: "For professionals and creators",
      features: [
        "250 transformations/month",
        "All 10+ artistic styles",
        "High-resolution outputs",
        "Commercial use rights",
        "Priority processing",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      description: "For teams and businesses",
      features: [
        "Unlimited transformations",
        "All styles + custom styles",
        "Ultra-high-resolution outputs",
        "API access",
        "Dedicated support",
      ],
      ctaText: "Contact Sales",
    },
  ];

  return (
    <SectionWrapper id="pricing">
      <motion.div
        className="text-center mx-auto mb-16 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-foreground/80">
          Choose the plan that works best for you
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {priceTiers.map((tier, index) => (
          <PriceTier
            key={index}
            title={tier.title}
            price={tier.price}
            description={tier.description}
            features={tier.features}
            isPopular={tier.isPopular}
            ctaText={tier.ctaText}
            delay={index * 0.1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1920px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  className="h-10 w-10 rounded-xl bg-primary-foreground flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-xl font-bold text-primary">I</span>
                </motion.div>
                <span className="text-xl font-bold">IllustraAI</span>
              </div>
              <p className="max-w-md text-primary-foreground/80 mb-6">
                Transform your photos into stunning artistic illustrations with
                our cutting-edge AI technology. Perfect for creatives,
                marketers, and businesses looking to stand out.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={
                      ["Facebook", "Twitter", "Instagram", "Github"][i]
                    }
                    custom={i}
                    variants={socialIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <div className="md:grid md:grid-cols-3 md:gap-8 lg:col-span-3">
              <div>
                <motion.h3
                  className="font-semibold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  Product
                </motion.h3>
                <ul className="space-y-3 text-primary-foreground/80">
                  {["Features", "Pricing", "Examples", "API"].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-primary-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <motion.h3
                  className="font-semibold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Company
                </motion.h3>
                <ul className="space-y-3 text-primary-foreground/80">
                  {["About", "Blog", "Careers", "Contact"].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-primary-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <motion.h3
                  className="font-semibold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Legal
                </motion.h3>
                <ul className="space-y-3 text-primary-foreground/80">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                    (item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Link
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="hover:text-primary-foreground transition-colors"
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-primary-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>© 2025 IllustraAI. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="#privacy"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#terms"
                className="hover:text-primary-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#cookies"
                className="hover:text-primary-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

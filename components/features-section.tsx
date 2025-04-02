import Image from "next/image";
import { Image as ImageIcon, Wand2, Sparkles, Zap, Clock } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FeaturesSection() {
  return (
    <SectionWrapper id="how-it-works">
      <motion.div
        className="text-center mx-auto mb-16 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How IllustraAI Works
        </h2>
        <p className="text-lg text-foreground/80">
          Transform your photos into art in just three simple steps
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="rounded-xl bg-white p-8 text-center shadow-md"
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <ImageIcon size={28} className="text-foreground" />
          </div>
          <h3 className="mb-3 text-xl font-bold">1. Upload Your Photo</h3>
          <p className="text-foreground/70">
            Simply upload any photo from your device. Our system accepts most
            image formats including JPG, PNG, and WEBP.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl bg-white p-8 text-center shadow-md"
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Wand2 size={28} className="text-foreground" />
          </div>
          <h3 className="mb-3 text-xl font-bold">2. Choose Your Style</h3>
          <p className="text-foreground/70">
            Select from multiple artistic styles including Ghibli, anime,
            cartoon, watercolor, and pixel art.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl bg-white p-8 text-center shadow-md"
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Sparkles size={28} className="text-foreground" />
          </div>
          <h3 className="mb-3 text-xl font-bold">3. Get Your Illustration</h3>
          <p className="text-foreground/70">
            Our AI transforms your photo in seconds. Download your creation and
            share it with the world.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-24 max-w-screen-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://i.pinimg.com/736x/fe/48/63/fe4863595a0200001e95bde5ab62cb95.jpg"
              alt="IllustraAI features"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Why Choose IllustraAI?</h2>

            <div className="space-y-6">
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Zap size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Lightning Fast Transformations
                  </h3>
                  <p className="text-foreground/70">
                    Get your artistic creations in seconds, not minutes. Our
                    optimized AI delivers results nearly instantly.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Wand2 size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Multiple Artistic Styles
                  </h3>
                  <p className="text-foreground/70">
                    Choose from a wide variety of styles to match your creative
                    vision - from Ghibli to pixel art.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Clock size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Bulk Processing
                  </h3>
                  <p className="text-foreground/70">
                    Transform multiple images at once with our batch processing
                    feature, saving you time and effort.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

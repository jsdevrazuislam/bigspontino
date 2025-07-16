"use client";
import { useTranslation } from "@/context/language-context";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

const HistorySection = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const textVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { x: 30, opacity: 0, rotate: 2 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <section
      id="story"
      className="relative py-16 px-4 overflow-hidden"
    >
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={textVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif italic text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Siamo aperti
          </motion.h2>

          <motion.div 
            className="text-gray-700 text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{
              __html: t('our_history')
            }}
            variants={textVariants}
          />
        </motion.div>

        <motion.div 
          className="rounded-3xl overflow-hidden shadow-lg border border-[#e6e3dd]"
          variants={imageVariants}
          whileHover={{
            scale: 1.02,
            transition: { type: "spring", stiffness: 200 }
          }}
        >
          <Image
            src="/assets/about.webp"
            alt="Big Spuntino History"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HistorySection;
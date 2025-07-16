"use client";
import { useTranslation } from "@/context/language-context";
import { Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6
    }
  }
};

const EventsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="events"
      className="relative py-16 px-4 overflow-hidden"
    >
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-[url('/assets/events-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div 
        className="max-w-4xl mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-serif italic text-primary mb-6"
          variants={textVariants}
        >
          La vita é bella
        </motion.h2>

        <motion.p 
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
          variants={textVariants}
          dangerouslySetInnerHTML={{
            __html: t('event_main_description')
          }} 
        />

        <motion.p 
          className="text-gray-700 text-md md:text-lg leading-relaxed italic mb-12"
          variants={textVariants}
        >
          The Big Spuntino is already preparing the <strong>Spettacolo</strong> event series — at aperitivo hour, dinner time,
          and of course, fantastico brunch. <br />
          <motion.span 
            className="mt-2 block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            ✨ Soon to come – stay tuned.
          </motion.span>
        </motion.p>

        <motion.div
          variants={textVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="mailto:mail@bigspuntino.de"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-secondary transition-all"
          >
            <Mail className="h-5 w-5" />
            Contatto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
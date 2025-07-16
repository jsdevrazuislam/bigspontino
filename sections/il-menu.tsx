"use client";
import { useTranslation } from "@/context/language-context";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const menuBlocks = [
  { title: "Brunch", img: "/assets/brunch.jpg" },
  { title: "Lunch", img: "/assets/lunch.jpg" },
  { title: "Dinner", img: "/assets/dinner.jpg" },
  { title: "Bar", img: "/assets/bar.jpg" }
];

const IlMenuSection = () => {
  const { t } = useTranslation();

  return (
    <section id="menu" className="py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif italic text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          A Tavola
        </motion.h2>

        <motion.p 
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          dangerouslySetInnerHTML={{
            __html: t('menu_description')
          }} 
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {menuBlocks.map((block, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group cursor-pointer relative rounded-xl overflow-hidden shadow-md hover:shadow-lg"
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Image
                src={block.img}
                alt={block.title}
                width={400}
                height={300}
                className="object-cover w-full h-52 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{block.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://file-rajshahi.portal.gov.bd/files/www.zso.pabna.gov.bd/page/07029b49_b68d_41b5_b2fe_d7d1f2d3909f/bc52786ddafe3785e07d490edb57c54b.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
          >
            View Full Menu (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IlMenuSection;
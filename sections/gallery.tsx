"use client";
import { useTranslation } from "@/context/language-context";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const images = [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpg",
    "/assets/gallery/3.jpg",
    "/assets/gallery/4.jpg",
    "/assets/gallery/4.jpg",
    "/assets/gallery/3.jpg",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  }
};

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <section id="impressions" className="py-16 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-serif font-bold text-primary">{t("impressions")}</h2>
                    <motion.p 
                        className="text-lg mt-2 text-black"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        A glimpse into our Italian dining culture
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {images.map((src, i) => (
                        <motion.div 
                            key={i} 
                            variants={item}
                            className="relative cursor-pointer h-[300px] overflow-hidden rounded-xl group"
                            whileHover={{ 
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Impressioni ${i + 1}`}
                                width={300}
                                height={300}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />

                            <motion.div
                                initial={{ opacity: 0.6 }}
                                whileHover={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-black"
                            />
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <motion.span 
                                    className="text-white text-lg font-medium"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1 }}
                                >
                                    View Image
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
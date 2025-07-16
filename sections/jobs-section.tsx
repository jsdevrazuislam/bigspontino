"use client";
import { useTranslation } from "@/context/language-context";
import { MailOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";

const JobsSection = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="jobs" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-4xl font-serif font-bold text-black mb-4"
            variants={item}
          >
            💼 {t("jobs")}
          </motion.h2>

          <motion.p 
            className="text-black text-lg font-light leading-relaxed mb-6"
            variants={item}
          >
            <motion.span 
              className="block text-xl font-serif italic text-secondary mb-2"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Andiamo
            </motion.span>
            {t(
              "You want to become part of the Famiglia and work in the happiest day bar in Hamburg? Then get in touch with our team – we look forward to receiving your applications!"
            )}
          </motion.p>

          <motion.div
            variants={item}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="mailto:mail@bigspuntino.de"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition duration-300"
            >
              <MailOpen className="w-5 h-5" />
              {t("Apply Now")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobsSection;
"use client";
import { useTranslation } from "@/context/language-context";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

const ContactSection = () => {
    const { t } = useTranslation();

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

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section id="contact" className="py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-serif font-bold text-primary">{t("contact")}</h2>
                    <motion.p 
                        className="text-lg text-black mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {t("contact_description")}
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-border/50"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div 
                        className="space-y-4 text-[#3d2b1f]"
                        variants={container}
                    >
                        <motion.h3 
                            className="text-2xl font-serif font-semibold mb-4"
                            variants={item}
                        >
                            Big Spuntino
                        </motion.h3>
                        
                        <motion.p 
                            className="flex items-center gap-2"
                            variants={item}
                            whileHover={{ x: 5 }}
                        >
                            <MapPin className="h-5 w-5 text-primary" />
                            Mühlenkamp 8, 22303 Hamburg
                        </motion.p>
                        
                        <motion.p 
                            className="flex items-center gap-2"
                            variants={item}
                            whileHover={{ x: 5 }}
                        >
                            <Phone className="h-5 w-5 text-primary" />
                            040 / 69 45 68 28
                        </motion.p>
                        
                        <motion.p 
                            className="flex items-center gap-2"
                            variants={item}
                            whileHover={{ x: 5 }}
                        >
                            <Mail className="h-5 w-5 text-primary" />
                            <a 
                                href="mailto:mail@bigspuntino.de" 
                                className="underline hover:text-secondary"
                            >
                                mail@bigspuntino.de
                            </a>
                        </motion.p>
                        
                        <motion.p variants={item}>
                            <a
                                href="https://bigspuntino.de"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-secondary"
                            >
                                bigspuntino.de
                            </a>
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="text-black"
                        variants={fadeIn}
                    >
                        <motion.h3 
                            className="text-2xl font-serif font-semibold mb-4"
                            variants={item}
                        >
                            Opening Hours
                        </motion.h3>
                        <motion.ul 
                            className="space-y-2 text-lg font-light"
                            variants={container}
                        >
                            <motion.li variants={item}>{t('openingHours.weekdays')}</motion.li>
                            <motion.li variants={item}>{t('openingHours.saturday')}</motion.li>
                            <motion.li variants={item}>{t('openingHours.sunday')}</motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
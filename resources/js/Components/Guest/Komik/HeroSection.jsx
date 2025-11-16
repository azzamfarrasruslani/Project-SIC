import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const ref = useRef(null);

    // Scroll progress dari section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Multiple parallax effects untuk depth yang lebih baik
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Floating animation variants
    const floatingAnimation = {
        animate: {
            y: [0, -25, 0],
            rotate: [0, 2, -2, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gradient-to-br from-amber-100 via-emerald-100 to-green-200 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Layer dengan parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: yBg }}
            >
                <img
                    src="/images/komik-hero2.png"
                    className="w-full h-full object-cover"
                    alt="Background Komik Edukatif"
                />
                {/* Gradient Overlay yang lebih smooth */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-emerald-800/10 to-green-900/30" />
            </motion.div>

            {/* Additional decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400/40 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-emerald-400/30 rounded-full"
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.8, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-300/50 rounded-full"
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 mt-32 relative z-20">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left space-y-8"
                        style={{ y: yText, opacity }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-lg"
                            variants={itemVariants}
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-green-800 uppercase tracking-wide">
                                Komik Edukatif
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                            variants={itemVariants}
                        >
                            Jelajahi Dunia
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-green-600">
                                Lahan Gambut
                            </span>
                            Melalui Komik
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                            variants={itemVariants}
                        >
                            Temukan petualangan seru bersama karakter-karakter menarik
                            sambil belajar tentang pentingnya melestarikan ekosistem
                            lahan gambut Indonesia.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                                whileHover={{
                                    scale: 1.05,
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Mulai Membaca</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-2xl backdrop-blur-sm hover:bg-green-600/10 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Lihat Koleksi
                            </motion.button>
                        </motion.div>

                    </motion.div>

                    {/* Character Image */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="relative"
                            variants={floatingAnimation}
                            animate="animate"
                        >
                            <motion.img
                                src="/images/koleksi-gambi.png"
                                alt="Karakter Gambi"
                                className="w-full max-w-lg lg:max-w-none drop-shadow-2xl"
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 1,
                                    transition: { duration: 0.3 }
                                }}
                            />
                            {/* Speech Bubble */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tr-none shadow-lg border border-white/50"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <p className="text-sm font-medium text-gray-800">
                                    Ayo baca komikku! 📚
                                </p>

                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-white rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-200/50 to-transparent z-10" />
        </section>
    );
}

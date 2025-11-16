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
            rotate: [0, 1, -1, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: {
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
            className="min-h-screen bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Layer dengan parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: yBg }}
            >
                <img
                    src="/images/about-us.png"
                    className="w-full h-full object-cover"
                    alt="Lahan Gambut Indonesia"
                />
                {/* Gradient Overlay yang lebih smooth */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-emerald-800/30 to-emerald-900/40" />
            </motion.div>

            {/* Additional decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-4 h-4 bg-amber-200/40 rounded-full"
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
                    className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-amber-300/30 rounded-full"
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
                    className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-300/50 rounded-full"
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
            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between gap-12"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        style={{ y: yText, opacity }}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                            variants={fadeInUp}
                        >
                            Lahan
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-400">
                                Gambut
                            </span>
                            Indonesia
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-emerald-100 mb-6 leading-relaxed"
                            variants={fadeInUp}
                        >
                            <span className="font-semibold text-amber-200">Ekosistem Unik Penyeimbang Bumi</span>
                        </motion.p>

                        <motion.p
                            className="text-base md:text-lg text-emerald-50 mb-8 leading-relaxed opacity-90"
                            variants={fadeInUp}
                        >
                            Jelajahi keajaiban lahan gambut Indonesia - penyimpan karbon alami
                            yang vital bagi kelestarian lingkungan dan mitigasi perubahan iklim.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={fadeInUp}
                        >
                            <motion.button
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-400/30"
                                whileHover={{
                                    scale: 1.05,
                                    background: "linear-gradient(to right, #059669, #047857)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Mulai Eksplorasi
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 border-2 border-amber-300/50 text-amber-100 font-semibold rounded-lg backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-300"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "#fbbf24",
                                    backgroundColor: "rgba(251, 191, 36, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Pelajari Lebih Lanjut
                            </motion.button>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-emerald-400/30"
                            variants={fadeInUp}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-300">36%</div>
                                <div className="text-sm text-emerald-200">Lahan Gambut Tropis</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-300">30x</div>
                                <div className="text-sm text-emerald-200">Penyimpan Karbon</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-300">15Jt</div>
                                <div className="text-sm text-emerald-200">Hektar Luasan</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center"
                        variants={fadeInUp}
                    >
                        <motion.img
                            src="/images/home-hero.png"
                            alt="Ekosistem Lahan Gambut Indonesia"
                            className="w-full max-w-lg lg:max-w-none transform transition-transform duration-300 hover:scale-105"
                            variants={floatingAnimation}
                            animate="animate"
                            whileHover={{
                                scale: 1.05,
                                rotate: 1,
                                transition: { duration: 0.3 }
                            }}
                        />
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
                    className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-amber-300 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

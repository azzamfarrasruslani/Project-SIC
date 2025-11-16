import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = React.forwardRef((props, ref) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

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

    const floatingAnimation = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background dengan Parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ scale: backgroundScale }}
            >
                <img
                    src="/images/forest.png"
                    className="w-full h-full object-cover"
                    alt="Hutan Gambut"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-800/40 to-emerald-900/80" />
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-6 h-6 bg-amber-300/30 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-40 right-20 w-8 h-8 bg-green-400/20 rounded-full"
                    animate={{
                        y: [0, 15, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-6 md:px-12 py-16 text-white max-w-7xl w-full">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Text Content */}
                    <motion.div className="space-y-8" variants={itemVariants}>
                        <div className="space-y-6">
                            <motion.div
                                className="inline-flex items-center gap-3 bg-emerald-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30"
                                variants={itemVariants}
                            >
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-green-200">Selamat Datang!</span>
                            </motion.div>

                            <motion.h2
                                className="text-5xl md:text-6xl font-bold leading-tight"
                                variants={itemVariants}
                            >
                                Halo teman-teman!{" "}
                                <motion.span
                                    className="inline-block"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    👋
                                </motion.span>
                            </motion.h2>

                            <motion.div className="space-y-4 text-lg md:text-xl leading-relaxed" variants={itemVariants}>
                                <p>
                                    Aku{" "}
                                    <span className="font-bold text-amber-300 text-2xl">
                                        Gambi
                                    </span>{" "}
                                    <span className="text-2xl">🌿</span>, sahabatmu dari
                                    <span className="font-semibold text-green-300">
                                        {" "}
                                        lahan gambut
                                    </span>
                                    !
                                </p>

                                <p className="text-emerald-100">
                                    Yuk, ikut aku{" "}
                                    <span className="font-semibold text-amber-200">menjelajahi</span>{" "}
                                    keajaiban
                                    <span className="italic text-green-200">
                                        {" "}
                                        ekosistem gambut
                                    </span>{" "}
                                    dan belajar bagaimana kita bisa menjaga bumi
                                    bersama! <span className="text-xl">🌎</span>
                                </p>
                            </motion.div>
                        </div>

                        {/* Action Buttons */}
                        <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                            <motion.button
                                className="group relative bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document.getElementById("next-section")?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Lanjutkan Petualangan
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        🌳
                                    </motion.span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>

                            <motion.button
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-amber-300/50 text-amber-100 font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "#fbbf24"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => alert("Segera hadir: Temui Gambi! 🎉")}
                            >
                                <span className="flex items-center gap-2">
                                    Koleksi Gambi!
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        🐸
                                    </motion.span>
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Character Image */}
                    <motion.div
                        className="flex justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="relative"
                            variants={floatingAnimation}
                            animate="animate"
                        >
                            <motion.img
                                src="/images/gambi.png"
                                alt="Gambi Karakter"
                                className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 2
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Decorative elements around character */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-sm"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Facts Section */}
                <motion.section
                    className="mt-20 bg-gradient-to-br from-emerald-800/60 to-emerald-900/60 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-emerald-400/30 shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Facts Content */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    <span className="text-sm font-semibold text-amber-200 uppercase tracking-wide">
                                        Fakta Menarik
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    Tahukah kamu?{" "}
                                    <motion.span
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        🤔
                                    </motion.span>
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "🌱 Lahan gambut menyimpan 10x lebih banyak karbon dibanding hutan biasa!",
                                    "🔥 Saat terbakar, gambut bisa menyumbang emisi besar ke atmosfer.",
                                    "💧 Gambut berfungsi seperti spons: menyerap air dan mencegah banjir.",
                                    "📍 Di Siak, 57% wilayahnya adalah lahan gambut! 😲"
                                ].map((fact, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3 text-lg text-emerald-50"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-2xl flex-shrink-0">•</span>
                                        <span>{fact}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Fact Image */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <motion.img
                                    src="/images/lahan-gambut.png"
                                    alt="Lahan Gambut"
                                    className="w-full max-w-md rounded-2xl object-cover shadow-2xl border-4 border-white/20"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-900/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg md:text-xl text-emerald-100 font-medium">
                        Bersama kita bisa menjaga gambut untuk masa depan!{" "}
                        <span className="text-amber-300">🌱💧</span> Yuk lanjutkan!
                    </p>
                </motion.div>
            </div>
        </section>
    );
});

export default AboutSection;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = React.forwardRef((props) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

    return (
        <section className="min-h-screen bg-gradient-to-b from-lime-900 via-lime-800 to-lime-700 flex items-center justify-center relative overflow-hidden">
            <motion.img
                src="/build/images/forest.png"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ scale: backgroundScale }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-0" />

            <div className="relative z-10 px-4 md:px-12 py-16 text-white max-w-6xl w-full space-y-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-left space-y-4">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Halo teman-teman! 👋
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            Aku{" "}
                            <span className="font-bold text-lime-300">
                                Gambi
                            </span>{" "}
                            🌿, sahabatmu dari
                            <span className="underline decoration-lime-400">
                                {" "}
                                lahan gambut
                            </span>
                            !
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 1 }}
                        >
                            Yuk, ikut aku{" "}
                            <span className="font-semibold">menjelajahi</span>{" "}
                            keajaiban
                            <span className="italic">
                                {" "}
                                ekosistem gambut
                            </span>{" "}
                            dan belajar bagaimana kita bisa menjaga bumi
                            bersama! 🌎
                        </motion.p>

                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <motion.button
                                className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document
                                        .getElementById("next-section")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Lanjutkan Petualangan 🌳
                            </motion.button>

                            <motion.button
                                className="bg-white text-lime-700 font-semibold px-6 py-3 rounded-full shadow-lg transition hover:scale-105 border border-lime-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    alert("Segera hadir: Temui Gambi! 🎉")
                                }
                            >
                                Koleksi Gambi! 🐸
                            </motion.button>
                        </div>
                    </div>

                    <motion.img
                        src="/build/images/gambi.png"
                        alt="Rumah Pohon"
                        className="flex-1 max-w-xs md:max-w-md lg:max-w-sm object-contain hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </div>

                {/* Fakta Menarik */}
                <motion.section
                    className="bg-lime-700/40 backdrop-blur-md p-8 rounded-2xl border border-lime-300 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    {/* Teks Fakta */}
                    <div className="flex-1 space-y-4">
                        <p className="text-sm uppercase tracking-wider text-white font-semibold">
                            Fakta Ekosistem
                        </p>
                        <h3 className="text-3xl font-bold text-white">
                            Tahukah kamu? 🤔
                        </h3>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-white">
                            <li>
                                🌱 <strong>Lahan gambut</strong> menyimpan{" "}
                                <span className="font-semibold">
                                    10x lebih banyak karbon
                                </span>{" "}
                                dibanding hutan biasa!
                            </li>
                            <li>
                                🔥 Saat terbakar, gambut bisa{" "}
                                <span className="font-semibold">
                                    menyumbang emisi besar
                                </span>{" "}
                                ke atmosfer.
                            </li>
                            <li>
                                💧 Gambut berfungsi seperti spons:{" "}
                                <span className="font-semibold">
                                    menyerap air
                                </span>{" "}
                                dan{" "}
                                <span className="font-semibold">
                                    mencegah banjir
                                </span>{" "}
                                saat musim hujan.
                            </li>
                            <li>
                                📍 Di <strong>Siak</strong>,{" "}
                                <span className="font-semibold">
                                    57% wilayahnya
                                </span>{" "}
                                adalah lahan gambut! 😲
                            </li>
                        </ul>
                    </div>

                    {/* Gambar */}
                    <div className="flex-shrink-0">
                        <img
                            src="/build/images/lahan-gambut.png"
                            alt="Lahan Gambut"
                            className="w-80 h-80 md:w-96 md:h-96 rounded-xl object-cover border-4 border-white shadow-md"
                        />
                    </div>
                </motion.section>

                {/* Ajakan & Button */}
                <motion.p
                    className="text-sm text-lime-100 italic mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2 }}
                >
                    Bersama kita bisa menjaga gambut untuk masa depan! 🌱💧 Yuk
                    lanjutkan!
                </motion.p>
            </div>
        </section>
    );
});

export default AboutSection;

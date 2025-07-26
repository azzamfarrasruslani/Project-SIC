import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
    {
        title: "🔥 Ancaman: Kebakaran Lahan",
        description:
            "Lahan gambut yang dikeringkan sangat mudah terbakar. Kebakaran menghasilkan kabut asap berbahaya dan melepaskan emisi karbon dalam jumlah besar.",
    },
    {
        title: "🚜 Ancaman: Alih Fungsi Lahan",
        description:
            "Konversi gambut menjadi lahan pertanian intensif atau perkebunan kelapa sawit menyebabkan kerusakan ekosistem dan hilangnya keanekaragaman hayati.",
    },
    {
        title: "🌊 Ancaman: Pengeringan Lahan",
        description:
            "Pembuatan kanal dan drainase menurunkan permukaan air gambut, membuatnya rapuh, mudah terbakar, dan mengalami penurunan tanah (subsidence).",
    },
    {
        title: "🌱 Solusi: Rewetting dan Restorasi",
        description:
            "Rewetting dilakukan dengan menutup kanal agar gambut tetap basah. Ini mencegah kebakaran dan menjaga fungsi ekologis lahan gambut.",
    },
    {
        title: "👨‍🌾 Solusi: Pertanian Ramah Gambut",
        description:
            "Mendorong budidaya tanaman yang toleran terhadap lahan basah tanpa mengeringkan gambut. Contohnya sagu, purun, dan hortikultura berkelanjutan.",
    },
    {
        title: "🤝 Solusi: Edukasi dan Kolaborasi",
        description:
            "Kesadaran masyarakat, dukungan kebijakan, dan kerja sama antar pihak penting untuk menjaga keberlanjutan ekosistem gambut.",
    },
];

const KonservasiGambut = () => {
    const sectionRef = useRef(null);
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const markerY = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);

    return (
        <GuestLayout>
            <div className="mt-0">
                <Head title="Konservasi Lahan Gambut" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <section
                    ref={sectionRef}
                    className="relative h-[600vh] bg-gradient-to-b from-red-100 to-emerald-200 overflow-hidden"
                >
                    {/* Background konservasi gambut */}
                    <img
                        src="/public/images/Tentang/KonservasiGambut.png"
                        alt="Konservasi Gambut"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay warna netral hijau-kemerahan */}
                    <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />

                    {/* Konten utama */}
                    <div className="relative z-10 flex flex-col items-center text-white text-center px-6 space-y-[70vh] pt-[60vh]">
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Konservasi dan Ancaman Ekosistem Gambut
                        </motion.h1>

                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/20 backdrop-blur-md p-6 rounded-xl max-w-2xl shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                                <p className="text-white text-base md:text-lg">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}

                        <div ref={bottomRef} />
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
};

export default KonservasiGambut;

import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
    {
        title: "🌾 Pertanian Berbasis Lahan Basah",
        description:
            "Lahan gambut bisa dimanfaatkan untuk budidaya tanaman yang cocok seperti sagu, purun, dan nanas gambut tanpa perlu dikeringkan.",
    },
    {
        title: "🐟 Perikanan dan Budidaya Air Tawar",
        description:
            "Perairan di sekitar gambut mendukung budidaya ikan lokal seperti gabus, lele, dan betok yang bernilai ekonomi tinggi.",
    },
    {
        title: "👜 Produk Kerajinan Lokal",
        description:
            "Purun dan tumbuhan rawa lainnya dapat diolah menjadi anyaman, tikar, dan tas ramah lingkungan yang bernilai jual.",
    },
    {
        title: "🌿 Ekowisata dan Wisata Alam",
        description:
            "Keunikan ekosistem gambut dapat dijadikan daya tarik wisata edukatif dan konservasi seperti wisata susur rawa dan birdwatching.",
    },
    {
        title: "💰 Jasa Ekosistem",
        description:
            "Gambut menyimpan karbon dalam jumlah besar, memberikan potensi ekonomi melalui skema karbon atau pembayaran jasa lingkungan (PES).",
    },
];

const PotensiEkonomiGambut = () => {
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
                <Head title="Potensi Ekonomi Lahan Gambut" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <section
                    ref={sectionRef}
                    className="relative h-[500vh] bg-gradient-to-b from-yellow-100 to-green-200 overflow-hidden"
                >
                    {/* Background visual */}
                    <img
                        src="/build/images/Tentang/PotensiEkonomi.png"
                        alt="Potensi Ekonomi Gambut"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay efek */}
                    <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply" />

                    {/* Konten */}
                    <div className="relative z-10 flex flex-col items-center text-white text-center px-6 space-y-[70vh] pt-[60vh]">
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Potensi Ekonomi Lahan Gambut
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

export default PotensiEkonomiGambut;

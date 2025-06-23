import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { motion, useScroll, useTransform } from "framer-motion";

const infos = [
    {
        title: "🌍 Apa Itu Lahan Gambut?",
        description:
            "Lahan gambut adalah ekosistem basah yang terbentuk dari tumpukan bahan organik yang terdekomposisi secara tidak sempurna selama ribuan tahun.",
    },
    {
        title: "🌿 Dibentuk dari Apa?",
        description:
            "Gambut terbentuk dari sisa-sisa tumbuhan seperti daun, akar, dan ranting yang menumpuk di lingkungan yang selalu jenuh air.",
    },
    {
        title: "🧪 Ciri Khas Lahan Gambut",
        description:
            "Lahan gambut mengandung karbon dalam jumlah besar, bersifat asam, memiliki porositas tinggi, dan berwarna gelap.",
    },
    {
        title: "🔥 Mudah Terbakar",
        description:
            "Saat kering, gambut sangat mudah terbakar dan sulit dipadamkan. Kebakaran gambut menghasilkan kabut asap berbahaya.",
    },
    {
        title: "🌏 Pentingnya Bagi Dunia",
        description:
            "Meskipun hanya mencakup 3% permukaan daratan dunia, lahan gambut menyimpan lebih banyak karbon daripada seluruh hutan tropis dunia digabungkan.",
    },
];

const PengertianGambut = () => {
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
                <Head title="Pengertian Lahan Gambut" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <section
                    ref={sectionRef}
                    className="relative h-[500vh] bg-gradient-to-b from-lime-100 to-green-300 overflow-hidden"
                >
                    {/* Background */}
                    <img
                        src="/images/Tentang/GambutLayer.png"
                        alt="Lapisan Gambut"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-emerald-800/40 mix-blend-multiply" />

                    {/* (Opsional) Visual indikator */}
                    {/* <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 z-20"
                        style={{ top: markerY }}
                    >
                        <img src="/build/images/marker.png" alt="Marker" className="w-full opacity-70" />
                    </motion.div> */}

                    {/* Konten utama */}
                    <div className="relative z-10 flex flex-col items-center text-white text-center px-6 space-y-[70vh] pt-[60vh]">
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Pengertian Lahan Gambut
                        </motion.h1>

                        {infos.map((item, index) => (
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

export default PengertianGambut;

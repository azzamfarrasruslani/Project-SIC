import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        title: "🌱 Tumbuhan Tumbuh Subur",
        description:
            "Di daerah rawa basah, tanaman tumbuh subur berkat curah hujan tinggi 🌧️ dan sinar matahari yang melimpah ☀️.",
    },
    {
        title: "🍂 Tumbuhan Mati dan Mengendap",
        description:
            "Daun, ranting, dan akar yang mati menumpuk di permukaan tanah setiap tahun 🪵.",
    },
    {
        title: "💧 Kondisi Jenuh Air",
        description:
            "Tanah yang selalu tergenang air kekurangan oksigen 🫁, sehingga sisa tumbuhan sulit terurai sempurna 🧬.",
    },
    {
        title: "🪱 Penumpukan Bahan Organik",
        description:
            "Sisa tumbuhan yang tidak terurai menumpuk selama ratusan hingga ribuan tahun ⏳.",
    },
    {
        title: "🟤 Pembentukan Lapisan Gambut",
        description:
            "Lapisan bahan organik berubah menjadi gambut yang kaya karbon 🧪 setelah ribuan tahun 🔁.",
    },
    {
        title: "🐾 Ekosistem Gambut Terbentuk",
        description:
            "Akhirnya, terbentuk ekosistem gambut yang menjadi rumah bagi banyak flora dan fauna langka 🦜🦋.",
    },
];

const SejarahEkosistem = () => {
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
                <Head title="Sejarah Terbentuknya Lahan Gambut" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <section
                    ref={sectionRef}
                    className="relative h-[500vh] bg-gradient-to-b from-amber-100 to-emerald-200 overflow-hidden"
                >
                    {/* Background lahan gambut */}
                    <img
                        src="/images/Tentang/Tanah.png"
                        alt="Lahan Gambut"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay kehijauan/cokelat */}
                    <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />

                    {/* Penanda scroll atau elemen visual (misal: akar/lapisan tanah) */}
                    {/* <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 z-20"
                        style={{ top: markerY }}
                    >
                        <img
                            src="/build/images/akar.png"
                            alt="Lapisan tanah"
                            className="w-full h-full opacity-70"
                        />
                    </motion.div> */}

                    {/* Konten utama */}
                    <div className="relative z-10 flex flex-col items-center text-white text-center px-6 space-y-[70vh] pt-[60vh]">
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Sejarah Terbentuknya Lahan Gambut
                        </motion.h1>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/20 backdrop-blur-md p-6 rounded-xl max-w-2xl shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
                                <p className="text-white text-base md:text-lg">
                                    {step.description}
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

export default SejarahEkosistem;

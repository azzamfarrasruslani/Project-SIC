import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { motion } from "framer-motion";

const steps = [
    {
        title: "🌱 Tumbuhan Tumbuh Subur",
        description: "Di daerah rawa basah, tanaman tumbuh subur berkat curah hujan tinggi 🌧️ dan sinar matahari yang melimpah ☀️. Proses ini dimulai ribuan tahun yang lalu di cekungan sungai dan danau purba.",
        timeline: "Dimulai 10,000+ tahun lalu",
        fact: "Proses pembentukan gambut membutuhkan waktu 1 mm per tahun"
    },
    {
        title: "🍂 Tumbuhan Mati dan Mengendap",
        description: "Daun, ranting, dan akar yang mati menumpuk di permukaan tanah setiap tahun 🪵. Akumulasi bahan organik ini terjadi secara terus-menerus selama ribuan tahun.",
        timeline: "Akumulasi tahunan",
        fact: "Ketebalan gambut Indonesia mencapai 15 meter di beberapa area"
    },
    {
        title: "💧 Kondisi Jenuh Air",
        description: "Tanah yang selalu tergenang air kekurangan oksigen 🫁, sehingga sisa tumbuhan sulit terurai sempurna 🧬. Kondisi anaerob ini mengawetkan bahan organik.",
        timeline: "Proses pengawetan",
        fact: "Kandungan air mencapai 90% dari volume gambut"
    },
    {
        title: "🪱 Penumpukan Bahan Organik",
        description: "Sisa tumbuhan yang tidak terurai menumpuk selama ratusan hingga ribuan tahun ⏳. Lapisan demi lapisan terbentuk, menciptakan arsip ekologis yang lengkap.",
        timeline: "100 - 10,000 tahun",
        fact: "Gambut menyimpan catatan perubahan iklim selama milenium"
    },
    {
        title: "🟤 Pembentukan Lapisan Gambut",
        description: "Lapisan bahan organik berubah menjadi gambut yang kaya karbon 🧪 setelah ribuan tahun 🔁. Terbentuklah endapan organik dengan karakteristik unik.",
        timeline: "Proses geokimia",
        fact: "Mengandung 50-60% karbon dalam bahan kering"
    },
    {
        title: "🐾 Ekosistem Gambut Terbentuk",
        description: "Akhirnya, terbentuk ekosistem gambut yang menjadi rumah bagi banyak flora dan fauna langka 🦜🦋. Sistem ini mendukung kehidupan yang adaptif dengan kondisi asam dan rendah nutrisi.",
        timeline: "Ekosistem matang",
        fact: "Menjadi habitat 1,500+ spesies endemik Indonesia"
    },
];

const additionalInfo = {
    title: "📜 Fakta Sejarah Lahan Gambut Indonesia",
    facts: [
        "🇮🇩 Indonesia memiliki 15 juta hektar lahan gambut - terluas ke-4 di dunia",
        "⏳ Proses pembentukan gambut dimulai sejak zaman Holosen (11,700 tahun lalu)",
        "🌏 36% lahan gambut tropis dunia berada di Indonesia",
        "📊 Ketebalan gambut bervariasi dari 0.5 hingga 15 meter",
        "🔥 Gambut tua mengandung catatan sejarah kebakaran hutan purba",
        "🌳 Menyimpan 57 gigaton karbon - setara dengan 2x emisi global tahunan"
    ]
};

const SejarahEkosistem = () => {
    const sectionRef = useRef(null);
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <GuestLayout>
            <div className="mt-0">
                <Head title="Sejarah Terbentuknya Lahan Gambut - Warisan Ekologis Indonesia" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <section
                    ref={sectionRef}
                    className="relative min-h-screen bg-gradient-to-b from-amber-100 to-emerald-200 overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/Tentang/Tanah.png"
                            alt="Lahan Gambut"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-emerald-800/40 to-emerald-900/60 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent mix-blend-overlay" />
                    </div>

                    {/* Header Section */}
                    <div className="relative z-10 pt-32 pb-20 px-6 text-center">
                        <motion.div
                            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-white font-semibold text-sm uppercase tracking-wide">
                                Journey Through Time
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            Sejarah Terbentuknya
                            <span className="block bg-gradient-to-r from-amber-300 to-emerald-400 text-transparent bg-clip-text mt-2">
                                Lahan Gambut
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Menelusuri perjalanan panjang pembentukan ekosistem gambut
                            yang menjadi <span className="font-semibold text-amber-300">penjaga karbon</span> dan
                            <span className="font-semibold text-emerald-300"> warisan ekologis</span> Indonesia
                        </motion.p>
                    </div>

                    {/* Main Timeline Content */}
                    <div className="relative z-10 pb-32">
                        <motion.div
                            className="max-w-6xl mx-auto px-6 space-y-12"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col md:flex-row items-center gap-8"
                                    variants={itemVariants}
                                >
                                    {/* Image/Icon Section */}
                                    <div className="flex-1 flex justify-center">
                                        <motion.div
                                            className="w-64 h-64 bg-white/20 backdrop-blur-lg rounded-3xl border-2 border-white/30 shadow-2xl flex items-center justify-center"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-6xl">
                                                {step.title.split(' ')[0]}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1">
                                        <motion.div
                                            className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border-2 border-white/30 shadow-2xl relative"
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Step Number */}
                                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">
                                                    {index + 1}
                                                </span>
                                            </div>

                                            {/* Header */}
                                            <div className="mb-4">
                                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                    {step.title.split(' ').slice(1).join(' ')}
                                                </h2>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
                                                    <span className="text-amber-200 text-sm font-semibold">
                                                        {step.timeline}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-white/95 text-lg leading-relaxed mb-4">
                                                {step.description}
                                            </p>

                                            {/* Fun Fact */}
                                            <motion.div
                                                className="bg-white/10 rounded-xl p-4 border-l-4 border-amber-400"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <p className="text-amber-200 text-sm font-semibold flex items-center gap-2">
                                                    <span className="text-lg">💡</span>
                                                    Fakta Menarik: {step.fact}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Additional Information Section */}
                        <motion.div
                            className="max-w-6xl mx-auto px-6 mt-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                    {additionalInfo.title}
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {additionalInfo.facts.map((fact, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white/10 rounded-xl p-4 border border-white/20"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <p className="text-white text-lg leading-relaxed">
                                                {fact}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <div ref={bottomRef} className="h-20" />
                    </div>

                    {/* Call to Action Section */}
                    <motion.div
                        className="relative z-10 pb-20 px-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Terinspirasi oleh Sejarah Gambut? 🌟
                                </h3>
                                <p className="text-white/90 text-lg mb-6">
                                    Mari bersama-sama menjaga warisan ekologis ini untuk generasi mendatang
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Pelajari Lebih Lanjut
                                    </motion.button>
                                    <motion.button
                                        className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Gabung Komunitas
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </GuestLayout>
    );
};

export default SejarahEkosistem;

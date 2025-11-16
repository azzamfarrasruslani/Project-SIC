import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Guest/Komik/HeroSection";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import KomikCard from "@/Components/Guest/Komik/KomikCard";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Sparkles } from "lucide-react";

const Index = () => {
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const features = [
        {
            icon: BookOpen,
            title: "Ilustrasi Menarik & Mudah Dipahami",
            description: "Visual storytelling yang engaging dengan karakter-karakter yang relatable"
        },
        {
            icon: Users,
            title: "Konten Berbasis Data Ilmiah",
            description: "Informasi akurat didukung penelitian dan data terbaru tentang gambut"
        },
        {
            icon: Award,
            title: "Cocok untuk Semua Usia",
            description: "Dari anak-anak hingga dewasa, semua bisa belajar dengan cara menyenangkan"
        },
        {
            icon: Sparkles,
            title: "Interaktif & Edukatif",
            description: "Kombinasi cerita menarik dengan pesan konservasi yang powerful"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <GuestLayout>
            <Head title="Komik Edukatif - Belajar Lahan Gambut dengan Cara Menyenangkan" />

            <div className="-mt-[8.5rem]">
                <HeroSection />
                {/* Hero Content Section */}
                <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-10 right-10 text-6xl opacity-10"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                        >
                            📚
                        </motion.div>
                        <motion.div
                            className="absolute bottom-20 left-10 text-4xl opacity-10"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                        >
                            🎨
                        </motion.div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Image Section */}
                            <motion.div
                                className="relative"
                                variants={itemVariants}
                            >
                                <div className="relative">
                                    <img
                                        src="/images/komik-illustrasi.png"
                                        alt="Komik Edukatif Lahan Gambut"
                                        className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Decorative Elements */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full shadow-lg"
                                        animate={{ scale: [1.2, 1, 1.2] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    />
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div
                                className="space-y-8 text-center lg:text-left"
                                variants={itemVariants}
                            >
                                {/* Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                                        Belajar Sambil Bermain
                                    </span>
                                </motion.div>

                                {/* Main Title */}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Jelajahi{" "}
                                    <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text">
                                        Komik Edukatif
                                    </span>{" "}
                                    Gambut
                                </h1>

                                {/* Description */}
                                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    Temukan keajaiban lahan gambut melalui cerita visual yang menarik.
                                    Dapatkan pemahaman mendalam tentang pentingnya pelestarian ekosistem
                                    gambut dengan cara yang menyenangkan dan mudah diingat.
                                </p>

                                {/* Features Grid */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-white/50 rounded-2xl border border-emerald-100 backdrop-blur-sm"
                                            whileHover={{
                                                scale: 1.02,
                                                y: -2,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 mb-1">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Stats */}
                                <motion.div
                                    className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    {[
                                        { number: "10+", label: "Seri Komik" },
                                        { number: "1000+", label: "Pembaca" },
                                        { number: "4.9★", label: "Rating" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-2xl font-bold text-emerald-700">
                                                {stat.number}
                                            </div>
                                            <div className="text-sm text-gray-600 mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section
                    className="bg-gradient-to-r from-emerald-600 to-green-600 py-16 px-4 sm:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Siap Memulai Petualangan Edukatif? 🚀
                        </h2>
                        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                            Bergabunglah dengan ribuan pembaca yang sudah belajar
                            tentang pentingnya lahan gambut melalui komik edukatif kami
                        </p>
                        <motion.button
                            className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToBottom}
                        >
                            <BookOpen className="w-5 h-5" />
                            Lihat Koleksi Komik
                        </motion.button>
                    </div>
                </motion.section>
            </div>

            <KomikCard ref={bottomRef} />
        </GuestLayout>
    );
};

export default Index;

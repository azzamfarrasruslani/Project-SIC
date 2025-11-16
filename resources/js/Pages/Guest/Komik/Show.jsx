import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    User,
    Calendar,
    ArrowLeft,
    Share2,
    Heart,
    Download,
    ZoomIn,
    ZoomOut,
    RotateCcw
} from "lucide-react";
import { Link } from "@inertiajs/react";

const Show = ({ komik }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const totalPages = komik.gambar_komik.length;

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setShowLightbox(true);
    };

    const closeLightbox = () => {
        setShowLightbox(false);
    };

    const lightboxNext = () => {
        if (lightboxIndex < totalPages - 1) {
            setLightboxIndex(lightboxIndex + 1);
        }
    };

    const lightboxPrev = () => {
        if (lightboxIndex > 0) {
            setLightboxIndex(lightboxIndex - 1);
        }
    };

    const shareKomik = () => {
        if (navigator.share) {
            navigator.share({
                title: komik.judul,
                text: komik.deskripsi,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link komik disalin ke clipboard!');
        }
    };

    return (
        <GuestLayout>
            <Head title={`${komik.judul} - Komik Edukatif Lahan Gambut`} />

            {/* Navigation Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/komik"
                            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Kembali ke Komik</span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`p-2 rounded-full transition-all ${
                                    isLiked
                                        ? "text-red-500 bg-red-50"
                                        : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                                }`}
                            >
                                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                            </button>

                            <button
                                onClick={shareKomik}
                                className="p-2 rounded-full text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <motion.div
                        className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-emerald-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {/* Thumbnail */}
                            <div className="md:col-span-1">
                                <motion.img
                                    src={`/storage/${komik.thumbnail}`}
                                    alt={komik.judul}
                                    className="w-full rounded-2xl shadow-lg border-4 border-white"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Info */}
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                        {komik.judul}
                                    </h1>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {komik.deskripsi}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <User className="w-5 h-5 text-emerald-600" />
                                        <div>
                                            <p className="text-sm font-medium">Penulis</p>
                                            <p className="font-semibold">{komik.pengarang}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <BookOpen className="w-5 h-5 text-emerald-600" />
                                        <div>
                                            <p className="text-sm font-medium">Total Halaman</p>
                                            <p className="font-semibold">{totalPages} halaman</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                        Edukatif
                                    </span>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        Lahan Gambut
                                    </span>
                                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                                        Semua Umur
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Comic Reader */}
                    <motion.div
                        className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-emerald-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Reader Controls */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-500">
                                    Halaman {currentPage + 1} dari {totalPages}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsZoomed(!isZoomed)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                                >
                                    {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={() => setCurrentPage(0)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Comic Page */}
                        <div className="relative bg-gray-50 rounded-2xl p-4 min-h-[600px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentPage}
                                    src={`/storage/${komik.gambar_komik[currentPage].gambar}`}
                                    alt={`Halaman ${currentPage + 1}`}
                                    className={`max-w-full max-h-full object-contain cursor-pointer ${
                                        isZoomed ? "w-auto h-auto" : "w-full h-auto"
                                    }`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => openLightbox(currentPage)}
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            {currentPage > 0 && (
                                <button
                                    onClick={prevPage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all text-gray-600 hover:text-emerald-600"
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                            )}

                            {currentPage < totalPages - 1 && (
                                <button
                                    onClick={nextPage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all text-gray-600 hover:text-emerald-600"
                                >
                                    <ArrowLeft className="w-6 h-6 rotate-180" />
                                </button>
                            )}
                        </div>

                        {/* Page Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 0}
                                className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition-all flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Sebelumnya
                            </button>

                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages - 1}
                                className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition-all flex items-center gap-2"
                            >
                                Selanjutnya
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Thumbnail Grid */}
                    <motion.div
                        className="bg-white rounded-3xl shadow-lg p-6 border border-emerald-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Semua Halaman</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {komik.gambar_komik.map((gambar, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                                        currentPage === index
                                            ? "border-emerald-500 ring-2 ring-emerald-200"
                                            : "border-gray-200 hover:border-emerald-300"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img
                                        src={`/storage/${gambar.gambar}`}
                                        alt={`Halaman ${index + 1}`}
                                        className="w-full h-24 object-cover"
                                    />
                                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                                        {index + 1}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {showLightbox && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative max-w-4xl max-h-full">
                            <img
                                src={`/storage/${komik.gambar_komik[lightboxIndex].gambar}`}
                                alt={`Halaman ${lightboxIndex + 1}`}
                                className="max-w-full max-h-[90vh] object-contain"
                            />

                            {/* Lightbox Controls */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                            >
                                <ArrowLeft className="w-6 h-6 rotate-45" />
                            </button>

                            {lightboxIndex > 0 && (
                                <button
                                    onClick={lightboxPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                            )}

                            {lightboxIndex < totalPages - 1 && (
                                <button
                                    onClick={lightboxNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
                                >
                                    <ArrowLeft className="w-6 h-6 rotate-180" />
                                </button>
                            )}

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                                {lightboxIndex + 1} / {totalPages}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </GuestLayout>
    );
};

export default Show;

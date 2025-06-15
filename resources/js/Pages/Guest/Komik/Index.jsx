import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Guest/Komik/HeroSection";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import KomikCard from "@/Components/Guest/Komik/KomikCard";

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

    return (
        <GuestLayout>
            <Head title="Komik Edukatif" />
            <div className="-mt-[8.5rem]">
                <HeroSection />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                {/* Section Edukatif */}
                {/* Section Edukatif - Komik Lahan Gambut untuk Anak */}
                <section className="bg-gradient-to-br from-green-100 to-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <img
                            src="/build/images/komik-illustrasi.png"
                            alt="Komik Edukatif Lahan Gambut"
                            className="w-full max-w-md mx-auto drop-shadow-lg rounded-xl"
                        />
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
                                Komik Seru tentang Lahan Gambut! 🌱📚
                            </h2>
                            <p className="text-gray-800 text-lg mb-6">
                                Tahukah kamu? Di dalam tanah gambut, banyak
                                sekali makhluk lucu yang tinggal. Komik ini
                                mengajak kamu bertualang ke dalam dunia gambut
                                yang seru dan penuh warna!
                            </p>
                            <ul className="space-y-4 text-base md:text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl">
                                        🧠
                                    </span>
                                    <p>
                                        Belajar sambil seru-seruan dengan cerita
                                        bergambar.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl">
                                        🌊
                                    </span>
                                    <p>
                                        Pahami kenapa lahan gambut penting untuk
                                        air dan bumi.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-yellow-500 text-xl">
                                        👦👧
                                    </span>
                                    <p>
                                        Cocok untuk kamu yang suka petualangan
                                        dan suka belajar hal baru!
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <KomikCard ref={bottomRef} />
        </GuestLayout>
    );
};

export default Index;

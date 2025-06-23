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

                <section className="bg-gradient-to-br from-green-100 to-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <img
                            src="/build/images/komik-illustrasi.png"
                            alt="Komik Edukatif Lahan Gambut"
                            className="w-full max-w-md mx-auto drop-shadow-lg rounded-xl"
                        />
                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
                                Jelajahi Komik Edukatif Lahan Gambut
                            </h2>
                            <p className="text-gray-700 text-lg">
                                Dapatkan pemahaman mendalam tentang pentingnya
                                pelestarian lahan gambut melalui komik yang
                                menarik dan interaktif untuk semua kalangan.
                            </p>
                            <ul className="space-y-2 text-left">
                                <li className="flex items-start">
                                    <span className="text-green-600 mt-1">
                                        ✔
                                    </span>
                                    <span className="ml-2">
                                        Ilustrasi menarik & mudah dipahami
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mt-1">
                                        ✔
                                    </span>
                                    <span className="ml-2">
                                        Konten berbasis data ilmiah
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mt-1">
                                        ✔
                                    </span>
                                    <span className="ml-2">
                                        Cocok untuk semua usia
                                    </span>
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

import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";

// Tambahkan logo untuk setiap tim
const teams = {
    "Tim Gaty (Developer)": {
        logo: "/images/kontributor.png", // ← ganti path sesuai gambar asli
        members: [
            { name: "Azzam Farras" },
            { name: "Dewi Lestari" },
        ],
    },
    "Tim Secawan (Perancang Komik Gami)": {
        logo: "/images/logo-secawan.png", // ← ganti path sesuai gambar asli
        members: [
            { name: "Budi Santoso" },
        ],
    },
};

const Kontributor = () => {
    const bottomRef = useRef(null);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollToBottom = () =>
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <GuestLayout>
            <Head title="Kontributor" />
            <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

            {/* Header Hero */}
            <div className="relative h-[320px] mb-16">
                <img
                    src="/images/kontributor.png"
                    alt="Header Kontributor"
                    className="w-full h-full object-cover brightness-75 rounded-b-[40px]"
                />
                <div className="absolute inset-0 bg-lime-800/50 rounded-b-[40px] z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center z-20">
                    <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                        Tim Kontributor
                    </h1>
                </div>
            </div>

            {/* Konten Kontributor */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {Object.entries(teams).map(([teamName, teamData], idx) => (
                    <section key={idx} className="mb-20">
                        {/* Logo Tim */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={teamData.logo}
                                alt={`Logo ${teamName}`}
                                className="h-24 object-contain"
                            />
                        </div>

                        {/* Nama Tim */}
                        <h2 className="text-2xl font-bold text-lime-800 mb-6 border-l-4 pl-4 border-lime-900 text-center md:text-left">
                            {teamName}
                        </h2>

                        {/* Anggota Tim */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {teamData.members.map((person, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center text-lime-700 font-bold text-lg">
                                            {person.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800">{person.name}</p>
                                            <p className="text-sm text-gray-500">Anggota</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
                <div ref={bottomRef} className="mt-10"></div>
            </div>
        </GuestLayout>
    );
};

export default Kontributor;

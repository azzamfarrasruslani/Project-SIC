import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { BookOpen, Filter } from "lucide-react";

const KomikCard = React.forwardRef((props, ref) => {
    const [selectedKategori, setSelectedKategori] = useState("Semua");

    const komikList = [
        {
            id: 1,
            judul: "Belajar Energi Terbarukan",
            deskripsi:
                "Komik ini mengajarkan tentang berbagai sumber energi terbarukan yang ramah lingkungan.",
            cover: "/build/images/Komik-Cover/1.png",
            kategori: ["Lingkungan", "IPA"],
        },
        {
            id: 2,
            judul: "Petualangan Si Atom",
            deskripsi:
                "Petualangan seru Si Atom dalam menjelaskan struktur dasar materi.",
            cover: "/build/images/Komik-Cover/2.png",
            kategori: ["Kimia", "Sains"],
        },
        {
            id: 3,
            judul: "Misi Menyelamatkan Hutan",
            deskripsi:
                "Komik ini menceritakan pentingnya pelestarian hutan dan cara menjaga alam.",
            cover: "/build/images/Komik-Cover/3.png",
            kategori: ["Lingkungan", "Biologi"],
        },
        {
            id: 4,
            judul: "Eksperimen Listrik Si Boltek",
            deskripsi:
                "Si Boltek melakukan eksperimen kelistrikan yang seru dan edukatif.",
            cover: "/build/images/Komik-Cover/4.png",
            kategori: ["IPA", "Fisika"],
        },
        {
            id: 5,
            judul: "Eksperimen Listrik Si Boltek",
            deskripsi:
                "Si Boltek melakukan eksperimen kelistrikan yang seru dan edukatif.",
            cover: "/build/images/Komik-Cover/5.png",
            kategori: ["IPA", "Fisika"],
        },
    ];

    const semuaKategori = [
        "Semua",
        ...new Set(komikList.flatMap((k) => k.kategori)),
    ];

    const filteredKomik =
        selectedKategori === "Semua"
            ? komikList
            : komikList.filter((komik) =>
                  komik.kategori.includes(selectedKategori)
              );

    return (
        <section
            ref={ref}
            className="bg-gradient-to-br from-green-100 to-white min-h-screen py-10"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <h1 className="text-3xl font-extrabold text-green-800 flex items-center gap-2">
                        <BookOpen className="w-6 h-6" />
                        Komik Edukatif
                    </h1>
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5 text-green-600" />
                        <select
                            className="border border-green-400 rounded px-3 py-1 text-green-700 bg-white focus:outline-none"
                            value={selectedKategori}
                            onChange={(e) =>
                                setSelectedKategori(e.target.value)
                            }
                        >
                            {semuaKategori.map((kategori, idx) => (
                                <option key={idx} value={kategori}>
                                    {kategori}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {chunkArray(filteredKomik, 3).map((row, rowIndex) => (
                    <div key={rowIndex}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                            {row.map((komik) => (
                                <Link
                                    key={komik.id}
                                    href={`/komik/${komik.id}`}
                                    className="block transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                                >
                                    <div className="relative bg-white/70 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden cursor-pointer hover:shadow-lime-600">
                                        <div className="relative">
                                            <img
                                                src={komik.cover}
                                                alt={`Cover komik ${komik.judul}`}
                                                className="w-full h-auto object-cover "
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/30 text-white p-5">
                                                <h2 className="text-lg font-bold">
                                                    {komik.judul}
                                                </h2>
                                                <p className="text-sm mt-1 line-clamp-2 italic">
                                                    {komik.deskripsi}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {komik.kategori.map(
                                                        (tag, i) => (
                                                            <span
                                                                key={i}
                                                                className="bg-green-600/80 text-white text-xs px-2 py-0.5 rounded-full"
                                                            >
                                                                #{tag}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Rak Buku */}
                        <div className="flex justify-center mb-6">
                            <img
                                src="/build/images/rak-buku.png"
                                alt="Rak Kayu"
                                className="w-full lg:max-w-[1500px] sm:max-w-[600px] h-auto object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default KomikCard;

function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}

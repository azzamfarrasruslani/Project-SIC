import React, { useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import {
    Search,
    BookOpen,
    Leaf,
    ShieldCheck,
    Users,
    Flame,
} from "lucide-react";

const ArtikelCard = ({ id, title, image, content, date }) => {
    return (
        <Link href={route("artikel.show", id)}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 group">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-green-700">{title}</h3>
                    <p className="text-gray-500 text-xs mb-2">{date}</p>
                    <p className="text-gray-600 text-sm line-clamp-3">{content}</p>
                </div>
            </div>
        </Link>
    );
};

export default function Index({ artikels }) {
    const bottomRef = useRef(null);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("Semua");

    const uniqueCategories = [
        "Semua",
        ...Array.from(new Set(artikels.map((a) => a.kategori))).filter(Boolean),
    ];

    const iconMap = {
        Umum: <BookOpen size={16} />,
        Manfaat: <Leaf size={16} />,
        Ancaman: <ShieldCheck size={16} />,
        Pelestarian: <Leaf size={16} />,
        Biodiversity: <Users size={16} />,
        Masyarakat: <Users size={16} />,
    };

    const filteredArticles = artikels.filter((artikel) => {
        const matchesCategory =
            activeCategory === "Semua" || artikel.kategori === activeCategory;
        const matchesSearch =
            artikel.judul.toLowerCase().includes(search.toLowerCase()) ||
            artikel.isi.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <GuestLayout>
            <Head title="Artikel Lahan Gambut" />

            <div>
                {/* Header */}
                <div className="relative bg-green-800">
                    <img
                        src="/images/artikel.png"
                        alt="Lahan Gambut"
                        className="w-full h-96 object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-10"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                            Informasi & Edukasi Lahan Gambut
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Temukan wawasan mendalam tentang pentingnya pelestarian
                            lahan gambut demi keberlanjutan lingkungan dan masa depan bumi.
                        </p>
                    </div>
                </div>

                {/* Filter & Search */}
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-3">
                            {uniqueCategories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
                                        activeCategory === cat
                                            ? "bg-green-700 text-white border-green-700"
                                            : "border-gray-300 text-gray-700 hover:bg-green-100"
                                    }`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {iconMap[cat] ?? <BookOpen size={16} />}
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari artikel..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Artikel Populer */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2 mb-6">
                        <Flame size={20} className="text-orange-500" /> Artikel Populer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {artikels.slice(0, 2).map((artikel) => (
                            <ArtikelCard
                                key={artikel.id_artikel}
                                id={artikel.id_artikel}
                                title={artikel.judul}
                                image={`/storage/${artikel.gambar}`}
                                content={artikel.isi}
                                date={new Date(artikel.created_at).toLocaleDateString("id-ID")}
                            />
                        ))}
                    </div>
                </div>

                {/* Semua Artikel */}
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((artikel) => (
                                <ArtikelCard
                                    key={artikel.id_artikel}
                                    id={artikel.id_artikel}
                                    title={artikel.judul}
                                    image={`/storage/${artikel.gambar}`}
                                    content={artikel.isi}
                                    date={new Date(artikel.created_at).toLocaleDateString("id-ID")}
                                />
                            ))
                        ) : (
                            <div className="col-span-3 text-center text-gray-500">
                                Tidak ada artikel ditemukan.
                            </div>
                        )}
                    </div>
                    <div ref={bottomRef}></div>
                </div>

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />
            </div>
        </GuestLayout>
    );
}

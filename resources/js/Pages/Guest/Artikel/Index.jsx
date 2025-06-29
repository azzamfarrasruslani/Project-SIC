import React, { useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { Search, BookOpen, Leaf, ShieldCheck, Users, Flame } from "lucide-react";

// Card Komponen
const ArtikelCard = ({ title, image, content, date }) => {
    return (
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
                <p className="text-gray-600 text-sm">{content}</p>
            </div>
        </div>
    );
};

// Data Artikel
const allArticles = [
    {
        title: "Apa Itu Lahan Gambut?",
        image: "https://images.unsplash.com/photo-1581574203283-92e53b544090",
        content: "Lahan gambut adalah jenis lahan basah...",
        category: "Umum",
        date: "2024-06-01"
    },
    {
        title: "Manfaat Lahan Gambut",
        image: "https://images.unsplash.com/photo-1502784444185-48010b87c7e1",
        content: "Lahan gambut menjaga keseimbangan ekosistem...",
        category: "Manfaat",
        date: "2024-06-03"
    },
    {
        title: "Ancaman Terhadap Gambut",
        image: "https://images.unsplash.com/photo-1581574203283-92e53b544090",
        content: "Pembukaan lahan, kebakaran hutan...",
        category: "Ancaman",
        date: "2024-06-05"
    },
    {
        title: "Pelestarian Lahan Gambut",
        image: "https://images.unsplash.com/photo-1503437313881-503a91226402",
        content: "Upaya konservasi meliputi rewetting...",
        category: "Pelestarian",
        date: "2024-06-07"
    },
    {
        title: "Keanekaragaman Hayati",
        image: "https://images.unsplash.com/photo-1613480372588-9f648b3a6b9b",
        content: "Lahan gambut menjadi rumah bagi spesies langka...",
        category: "Biodiversity",
        date: "2024-06-09"
    },
    {
        title: "Peran Masyarakat",
        image: "https://images.unsplash.com/photo-1579370318448-19b7ef50525b",
        content: "Masyarakat lokal berperan penting...",
        category: "Masyarakat",
        date: "2024-06-11"
    },
];

// Data Kategori
const categories = [
    { name: "Semua", icon: <BookOpen size={16} /> },
    { name: "Umum", icon: <BookOpen size={16} /> },
    { name: "Manfaat", icon: <Leaf size={16} /> },
    { name: "Ancaman", icon: <ShieldCheck size={16} /> },
    { name: "Pelestarian", icon: <Leaf size={16} /> },
    { name: "Biodiversity", icon: <Users size={16} /> },
    { name: "Masyarakat", icon: <Users size={16} /> },
];

const Index = () => {
    const bottomRef = useRef(null);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredArticles = allArticles.filter((artikel) => {
        const matchesCategory = activeCategory === "Semua" || artikel.category === activeCategory;
        const matchesSearch =
            artikel.title.toLowerCase().includes(search.toLowerCase()) ||
            artikel.content.toLowerCase().includes(search.toLowerCase());
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

            <div className="">
                {/* Header */}
                <div className="relative bg-green-800">
                    <img
                        src="https://images.unsplash.com/photo-1503437313881-503a91226402"
                        alt="Lahan Gambut"
                        className="w-full h-96 object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                            Artikel Lahan Gambut
                        </h1>
                        <p className="text-white text-lg max-w-2xl">
                            Mari pelajari pentingnya menjaga lahan gambut untuk masa depan bumi yang lebih baik.
                        </p>
                    </div>
                </div>

                {/* Filter & Search */}
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition
                                    ${
                                        activeCategory === cat.name
                                            ? "bg-green-700 text-white border-green-700"
                                            : "border-gray-300 text-gray-700 hover:bg-green-100"
                                    }`}
                                    onClick={() => setActiveCategory(cat.name)}
                                >
                                    {cat.icon}
                                    {cat.name}
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
                        {allArticles.slice(0, 2).map((artikel, idx) => (
                            <ArtikelCard
                                key={idx}
                                title={artikel.title}
                                image={artikel.image}
                                content={artikel.content}
                                date={artikel.date}
                            />
                        ))}
                    </div>
                </div>

                {/* Semua Artikel */}
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((artikel, idx) => (
                                <ArtikelCard
                                    key={idx}
                                    title={artikel.title}
                                    image={artikel.image}
                                    content={artikel.content}
                                    date={artikel.date}
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
};

export default Index;

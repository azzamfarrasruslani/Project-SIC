import React, { useState } from "react";
import ProductCarousel from "./Carousel";
import {
    Star,
    ShoppingCart,
    MapPin,
    Tag,
    Search,
    Leaf,
    Sparkles,
    Heart,
    Share2,
    Eye,
} from "lucide-react";

const ProdukCard = ({ produks = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState(new Set());

    const toggleFavorite = (id) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(id)) {
                newFavorites.delete(id);
            } else {
                newFavorites.add(id);
            }
            return newFavorites;
        });
    };

    const filteredProduks = produks.filter((produk) => {
        const term = searchTerm.toLowerCase();
        return (
            produk.nama.toLowerCase().includes(term) ||
            (produk.kategori && produk.kategori.toLowerCase().includes(term))
        );
    });

    const grouped = filteredProduks.reduce((acc, produk) => {
        const kategori = produk.kategori || "Lainnya";
        if (!acc[kategori]) acc[kategori] = [];
        acc[kategori].push(produk);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-16">
                <div className="text-center space-y-6">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                            Produk Lokal Unggulan
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Produk{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text">
                            Lahan Gambut
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        🌱 Temukan keautentikan produk lokal dari ekosistem gambut Siak, Riau.
                        Sehat, ramah lingkungan, dan mendukung perekonomian masyarakat setempat.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mt-12 max-w-2xl mx-auto relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Cari produk herbal, madu, kopi, kerajinan..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg transition-all duration-300"
                        />
                    </div>
                </div>
            </div>

            <ProductCarousel/>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto space-y-16">
                {Object.entries(grouped).length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                            <Search className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                            Produk tidak ditemukan
                        </h3>
                        <p className="text-gray-500">
                            Coba kata kunci lain atau lihat semua produk yang tersedia
                        </p>
                    </div>
                ) : (
                    Object.entries(grouped).map(([kategori, items]) => (
                        <section key={kategori} className="space-y-8">
                            {/* Category Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-10 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full" />
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">
                                            {kategori}
                                        </h2>
                                        <p className="text-gray-500 text-sm mt-1">
                                            {items.length} produk tersedia
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                {items.map((produk) => (
                                    <div
                                        key={produk.id_produk}
                                        className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200"
                                    >
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={`/storage/${produk.gambar}`}
                                                alt={produk.nama}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            {/* Overlay Actions */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                                            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button
                                                    onClick={() => toggleFavorite(produk.id_produk)}
                                                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                                                        favorites.has(produk.id_produk)
                                                            ? "bg-red-500 text-white"
                                                            : "bg-white/90 text-gray-600 hover:bg-white"
                                                    }`}
                                                >
                                                    <Heart
                                                        className={`w-4 h-4 ${
                                                            favorites.has(produk.id_produk) ? "fill-current" : ""
                                                        }`}
                                                    />
                                                </button>
                                                <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white transition-all">
                                                    <Share2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Badges */}
                                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                {produk.diskon && (
                                                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                                                        <Tag className="w-3 h-3" />
                                                        {produk.diskon}% OFF
                                                    </span>
                                                )}
                                                {produk.kategori && (
                                                    <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
                                                        {produk.kategori}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-6 space-y-4">
                                            {/* Title & Description */}
                                            <div className="space-y-2">
                                                <h3 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-emerald-700 transition-colors">
                                                    {produk.nama}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                                    {produk.deskripsi}
                                                </p>
                                            </div>

                                            {/* Location & Rating */}
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="flex items-center gap-1.5 text-gray-500">
                                                    <MapPin className="w-4 h-4" />
                                                    {produk.lokasi || "Siak, Riau"}
                                                </span>
                                                {produk.rating && (
                                                    <span className="flex items-center gap-1 text-amber-500 font-semibold">
                                                        <Star className="w-4 h-4 fill-amber-400" />
                                                        {produk.rating}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl font-bold text-emerald-600">
                                                    Rp {Number(produk.harga_diskon || produk.harga).toLocaleString("id-ID")}
                                                </span>
                                                {produk.harga_diskon && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        Rp {Number(produk.harga).toLocaleString("id-ID")}
                                                    </span>
                                                )}
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                onClick={() =>
                                                    window.open(
                                                        produk.linkproduk,
                                                        "_blank",
                                                        "noopener"
                                                    )
                                                }
                                                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                                            >
                                                <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                                <span>Beli Sekarang</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </div>

            {/* Footer CTA */}
            {Object.entries(grouped).length > 0 && (
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4">
                            💚 Dukung Produk Lokal Lahan Gambut
                        </h3>
                        <p className="text-emerald-100 text-lg mb-6">
                            Setiap pembelian Anda membantu melestarikan ekosistem gambut
                            dan meningkatkan kesejahteraan masyarakat Siak
                        </p>
                        <button className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-2xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105">
                            Lihat Semua Produk
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Add motion component
const motion = {
    div: ({ children, className, initial, animate, transition }) => (
        <div className={className}>{children}</div>
    )
};

export default ProdukCard;

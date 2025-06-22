import React, { useState } from "react";
import {
    Star,
    ShoppingCart,
    MapPin,
    Tag,
    Search,
    Leaf,
    Sparkles,
} from "lucide-react";

const ProdukCard = ({ produks = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");

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
        <div className="max-w-7xl mx-auto py-12 px-6">
            <div className="mb-12 text-center space-y-4">
                <div className="flex justify-center items-center gap-3">
                    <Leaf className="w-8 h-8 text-green-700" />
                    <h2 className="text-4xl font-bold text-green-800">
                        Produk Unggulan Wilayah Gambut – Siak, Riau
                    </h2>
                    <Sparkles className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    🌱 Temukan produk lokal alami dari lahan gambut – sehat,
                    ramah lingkungan, dan bernilai ekonomi tinggi dari UMKM
                    Kabupaten Siak.
                </p>
            </div>

            <div className="mt-6 max-w-md mx-auto mb-8 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Cari produk herbal, madu, kopi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 text-sm sm:text-base"
                />
            </div>
            <div className="space-y-16 px-2">
                {Object.entries(grouped).length === 0 ? (
                    <p className="text-center text-gray-500">
                        Produk tidak ditemukan
                    </p>
                ) : (
                    Object.entries(grouped).map(([kategori, items]) => (
                        <div key={kategori}>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="w-1.5 h-6 bg-lime-900 rounded-sm mr-3"></span>
                                {kategori}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {items.map((produk) => (
                                    <div
                                        key={produk.id_produk}
                                        className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md "
                                    >
                                        <div className="relative">
                                            <img
                                                src={`/storage/${produk.gambar}`}
                                                alt={produk.nama}
                                                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 "
                                            />

                                            {produk.diskon && (
                                                <span className="absolute top-3 left-3 bg-lime-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Tag className="w-3 h-3" />
                                                    {produk.diskon}% OFF
                                                </span>
                                            )}

                                            {produk.kategori && (
                                                <span className="absolute top-3 right-3 bg-white text-green-700 border border-green-600 text-xs px-2 py-0.5 rounded-full">
                                                    {produk.kategori}
                                                </span>
                                            )}
                                        </div>

                                        <div className="p-4 space-y-2">
                                            <h3 className="text-base font-semibold text-gray-800">
                                                {produk.nama}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {produk.deskripsi}
                                            </p>

                                            <div className="flex justify-between items-center text-xs text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {produk.lokasi ||
                                                        "Tanpa Lokasi"}
                                                </span>
                                                {produk.rating && (
                                                    <span className="flex items-center gap-1 text-yellow-500">
                                                        <Star className="w-3 h-3 fill-yellow-400" />
                                                        {produk.rating}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="text-green-700 font-bold text-lg">
                                                    Rp{" "}
                                                    {Number(
                                                        produk.harga_diskon ||
                                                            produk.harga
                                                    ).toLocaleString("id-ID")}
                                                </span>
                                                {produk.harga_diskon && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        Rp{" "}
                                                        {Number(
                                                            produk.harga
                                                        ).toLocaleString(
                                                            "id-ID"
                                                        )}
                                                    </span>
                                                )}
                                            </div>

                                            <button
                                                onClick={() =>
                                                    window.open(
                                                        produk.linkproduk,
                                                        "_blank",
                                                        "noopener"
                                                    )
                                                }
                                                className="w-full mt-3 bg-lime-900 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
                                            >
                                                <ShoppingCart className="w-4 h-4" />
                                                Beli Sekarang
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProdukCard;

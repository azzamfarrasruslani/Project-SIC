import React, { useState } from "react";
import { Star } from "lucide-react";

const ProdukCard = ({ produks = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter produk berdasarkan searchTerm di nama atau kategori (case insensitive)
  const filteredProduks = produks.filter((produk) => {
    const term = searchTerm.toLowerCase();
    return (
      produk.nama.toLowerCase().includes(term) ||
      (produk.kategori && produk.kategori.toLowerCase().includes(term))
    );
  });

  // Grup produk berdasarkan kategori dari hasil filter
  const grouped = filteredProduks.reduce((acc, produk) => {
    const kategori = produk.kategori || "Lainnya";
    if (!acc[kategori]) acc[kategori] = [];
    acc[kategori].push(produk);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-green-800">
          Produk Unggulan Wilayah Gambut – Siak, Riau
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Temukan produk-produk lokal khas lahan gambut yang alami, sehat, dan
          bernilai ekonomi tinggi dari UMKM Siak.
        </p>
      </div>

      <div className="mt-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-500"
        />
      </div>

      <div className="space-y-14 px-4 py-6">
        {Object.entries(grouped).length === 0 ? (
          <p className="text-center text-gray-500">Produk tidak ditemukan</p>
        ) : (
          Object.entries(grouped).map(([kategori, items]) => (
            <div key={kategori}>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <span className="w-1.5 h-6 bg-green-600 mr-3 rounded-sm"></span>
                {kategori}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {items.map((produk) => (
                  <div
                    key={produk.id_produk}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={produk.gambar}
                        alt={produk.nama}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                        {produk.kategori}
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {produk.nama}
                      </h3>
                      <p className="text-sm text-gray-600">{produk.deskripsi}</p>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="italic">
                          {produk.lokasi || "Lokasi tidak tersedia"}
                        </span>
                        {produk.rating && (
                          <span className="flex items-center gap-1 text-yellow-500 font-medium">
                            <Star className="w-4 h-4 fill-yellow-400" />
                            {produk.rating}
                          </span>
                        )}
                      </div>

                      <p className="text-green-700 font-bold text-lg">
                        Rp{" "}
                        {Number(produk.harga).toLocaleString("id-ID", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                        })}
                      </p>

                      <button
                        onClick={() =>
                          window.open(produk.linkproduk, "_blank", "noopener")
                        }
                        className="inline-block w-full bg-green-600 text-white text-sm font-semibold py-2 rounded-lg text-center hover:bg-green-700 transition"
                      >
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

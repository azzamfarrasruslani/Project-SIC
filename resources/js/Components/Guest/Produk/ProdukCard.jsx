import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ProdukCard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const produks = [
    {
      id_produk: 1,
      nama: 'Kapsul Albumin Ikan Gabus',
      deskripsi: 'Suplemen kesehatan alami dari ekstrak ikan gabus asli lahan gambut.',
      gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r992-lqmtj4t6rm8g90_tn.webp',
      kategori: 'Kapsul Albumin',
      harga: 65000.0,
      lokasi: 'Kab. Siak, Riau',
      rating: 4.8,
      linkproduk: 'https://tokopedia.com/kapsul-albumin'
    },
    {
      id_produk: 2,
      nama: 'Madu Kelulut Gambut',
      deskripsi: 'Madu dari lebah kelulut asli lahan gambut.',
      gambar: 'https://example.com/madu-kelulut.jpg',
      kategori: 'Madu',
      harga: 80000.0,
      lokasi: 'Kab. Siak, Riau',
      rating: 4.9,
      linkproduk: 'https://shopee.co.id/madu-kelulut'
    },
    {
      id_produk: 3,
      nama: 'Keripik Kelakai',
      deskripsi: 'Camilan sehat dari tanaman kelakai khas gambut.',
      gambar: 'https://example.com/keripik-kelakai.jpg',
      kategori: 'Camilan',
      harga: 20000.0,
      lokasi: 'Kab. Siak, Riau',
      rating: 4.6,
      linkproduk: 'https://blibli.com/keripik-kelakai'
    },
    {
      id_produk: 4,
      nama: 'Madu Hitam Gambut',
      deskripsi: 'Madu hitam khas gambut dengan rasa pahit manis yang kuat.',
      gambar: 'https://example.com/madu-hitam.jpg',
      kategori: 'Madu',
      harga: 90000.0,
      lokasi: 'Kab. Siak, Riau',
      rating: 4.7,
      linkproduk: 'https://shopee.co.id/madu-hitam'
    },
  ];

  // Kelompokkan berdasarkan kategori
  const groupedProducts = produks.reduce((acc, produk) => {
    if (!acc[produk.kategori]) {
      acc[produk.kategori] = [];
    }
    acc[produk.kategori].push(produk);
    return acc;
  }, {});

  const filteredGroupedProducts = Object.entries(groupedProducts).reduce((acc, [kategori, produkList]) => {
    const filtered = produkList.filter(produk =>
      produk.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) acc[kategori] = filtered;
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-green-800">Produk Unggulan Wilayah Gambut – Siak, Riau</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Temukan produk-produk lokal khas lahan gambut yang alami, sehat, dan bernilai ekonomi tinggi dari UMKM Siak.
        </p>
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-500"
          />
        </div>
      </div>

      {Object.entries(filteredGroupedProducts).map(([kategori, items]) => (
        <div key={kategori} className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
            {kategori}
          </h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {items.map((produk) => (
              <div
                key={produk.id_produk}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-56">
                  <img
                    src={produk.gambar}
                    alt={produk.nama}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {produk.kategori}
                  </span>
                </div>

                <div className="p-5 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-gray-800">{produk.nama}</h3>
                  <p className="text-gray-600 text-sm mt-2 mb-3 flex-grow">{produk.deskripsi}</p>

                  <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                    <span className="italic">{produk.lokasi}</span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      {produk.rating}
                    </span>
                  </div>

                  <p className="text-xl font-bold text-green-700 mb-4">
                    Rp {produk.harga.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                  </p>

                  {produk.linkproduk && (
                    <a
                      href={produk.linkproduk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                    >
                      Beli Sekarang
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProdukCard;

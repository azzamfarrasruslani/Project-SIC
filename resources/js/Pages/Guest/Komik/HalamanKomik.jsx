import React, { useState } from "react";
import HeaderComic from "./HeaderComic"; // pastikan path ini sesuai lokasi file HeaderComic.jsx

const komikData = [
  {
    judul: "Kedatangan Gambi",
    episode: 1,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    judul: "Kepergian Gambi",
    episode: 2,
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    judul: "Datang pulak lagi",
    episode: 3,
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const Konten = ({ images }) => (
  <section className="bg-white py-8 min-h-[70vh] flex flex-col items-center px-4 md:px-12">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Halaman Komik ${idx + 1}`}
        className="max-w-full shadow-lg object-contain"
        loading="lazy"
        style={{ margin: 0, borderRadius: 0, display: "block" }}
      />
    ))}
  </section>
);


const HalamanKomik = () => {
  const [currentEpisode, setCurrentEpisode] = useState(1);

  const episodeData = komikData.find((k) => k.episode === currentEpisode);

  const handlePrev = () => {
    if (currentEpisode > 1) setCurrentEpisode(currentEpisode - 1);
  };

  const handleNext = () => {
    if (currentEpisode < komikData.length) setCurrentEpisode(currentEpisode + 1);
  };

  if (!episodeData) return <div className="text-center p-10">Episode tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <HeaderComic
        judul={episodeData.judul}
        episode={episodeData.episode}
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentEpisode === 1}
        disableNext={currentEpisode === komikData.length}
      />
      <div className="text-center text-xs text-green-700 bg-green-100 py-2 font-semibold">
        Selamat Membaca
      </div>
      <Konten images={episodeData.images} />
    </div>
  );
};

export default HalamanKomik;

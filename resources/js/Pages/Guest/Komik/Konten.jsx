import React from "react";

const Konten = ({ images }) => (
  <div className="flex flex-col items-center bg-white py-8 min-h-[70vh]">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Halaman Komik ${idx + 1}`}
        className="max-w-full h-auto shadow-lg object-contain"
        loading="lazy"
        style={{ margin: 0, borderRadius: 0 }}
      />
    ))}
  </div>
);

export default Konten;

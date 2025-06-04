import React from "react";

export default function KontenKomik({ images }) {
  return (
    <div className="flex flex-col">
      {images.map((src, index) => (
        <section
          key={index}
          className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden"
        >
          <img
            src={src}
            alt={`Komik panel ${index + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </section>
      ))}
    </div>
  );
}

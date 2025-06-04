import React from "react";

export default function TitleSection({ title, publishDate, writers, pencillers, coverArtist, image }) {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-md gap-4 mb-6">
      <img
        src={image}
        alt={title}
        className="w-full md:w-64 rounded-md object-cover"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">Published: {publishDate}</p>
        <p><strong>Writers:</strong> {writers.join(", ")}</p>
        <p><strong>Pencillers:</strong> {pencillers.join(", ")}</p>
        <p><strong>Cover Artist:</strong> {coverArtist}</p>
      </div>
    </div>
  );
}

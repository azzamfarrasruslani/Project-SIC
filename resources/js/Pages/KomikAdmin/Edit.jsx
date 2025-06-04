import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ komik }) {
  const { data, setData, post, processing, errors } = useForm({
    judul: komik.judul || '',
    deskripsi: komik.deskripsi || '',
    thumbnail: null,
    gambar: null,
    pengarang: komik.pengarang || '',
    _method: 'PUT', // agar bisa kirim PUT via post
  });

  const [previewThumb, setPreviewThumb] = useState(komik.thumbnail);
  const [previewGambar, setPreviewGambar] = useState(komik.gambar);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setData(field, file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === 'thumbnail') {
          setPreviewThumb(reader.result);
        } else {
          setPreviewGambar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/komik-admin/${komik.id_komik}`, {
      forceFormData: true,
    });
  };

  return (
    <AuthenticatedLayout>

    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Komik</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Judul</label>
          <input
            type="text"
            value={data.judul}
            onChange={e => setData('judul', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Deskripsi</label>
          <textarea
            value={data.deskripsi}
            onChange={e => setData('deskripsi', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Thumbnail</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, 'thumbnail')}
            className="w-full"
          />
          {previewThumb && (
            <img src={previewThumb} alt="Thumbnail Preview" className="w-24 h-24 mt-2 object-cover rounded" />
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Gambar</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, 'gambar')}
            className="w-full"
          />
          {previewGambar && (
            <img src={previewGambar} alt="Gambar Preview" className="w-24 h-24 mt-2 object-cover rounded" />
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Pengarang</label>
          <input
            type="text"
            value={data.pengarang}
            onChange={e => setData('pengarang', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={processing}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Perbarui
        </button>
      </form>
    </div>
        </AuthenticatedLayout>

  );
}

import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ artikel }) {
  const { data, setData, post, processing } = useForm({
    judul: artikel.judul || '',
    deskripsi: artikel.deskripsi || '',
    gambar: null,
    _method: 'PUT',
  });

  const [preview, setPreview] = useState(`/storage/${artikel.gambar}`);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData('gambar', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/artikel-admin/${artikel.id_artikel}`, {
      forceFormData: true,
    });
  };

  return (
    <AuthenticatedLayout>

    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Artikel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={data.judul}
          onChange={e => setData('judul', e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          value={data.deskripsi}
          onChange={e => setData('deskripsi', e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full"
        />
        {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded" />}
        <button
          type="submit"
          disabled={processing}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Perbarui
        </button>
      </form>
    </div>
        </AuthenticatedLayout>

  );
}

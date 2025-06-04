import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
  const { data, setData, post, processing } = useForm({
    judul: '',
    deskripsi: '',
    gambar: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('judul', data.judul);
    formData.append('deskripsi', data.deskripsi);
    formData.append('gambar', data.gambar);

    post('/artikel-admin', formData);
  };

  return (
    <AuthenticatedLayout>
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Artikel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={data.judul}
          onChange={e => setData('judul', e.target.value)}
          placeholder="Judul Artikel"
          className="w-full border p-2 rounded"
        />
        <textarea
          value={data.deskripsi}
          onChange={e => setData('deskripsi', e.target.value)}
          placeholder="Deskripsi"
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          onChange={e => setData('gambar', e.target.files[0])}
          className="w-full"
        />
        <button
          type="submit"
          disabled={processing}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
      </form>
    </div>
    </AuthenticatedLayout>
  );
}

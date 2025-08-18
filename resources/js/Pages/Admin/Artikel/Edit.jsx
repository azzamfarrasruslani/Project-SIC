import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { route } from 'ziggy-js'; // ✅ gunakan named import

export default function Edit({ artikel }) {
  const { data, setData, post, processing, errors } = useForm({
    judul: artikel.judul || '',
    isi: artikel.isi || '',
    gambar: null,
    penulis: artikel.penulis || '',
    kategori: artikel.kategori || '',
    status: artikel.status || 'draft',
    _method: 'PUT',
  });

  const [preview, setPreview] = useState(artikel.gambar ? `/storage/${artikel.gambar}` : null);

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

    // Kirim request update dengan FormData
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('judul', data.judul);
    formData.append('isi', data.isi);
    formData.append('penulis', data.penulis);
    formData.append('kategori', data.kategori);
    formData.append('status', data.status);
    if (data.gambar) {
      formData.append('gambar', data.gambar);
    }

    post(route('artikel.update', artikel.id_artikel), {
      data: formData,
      forceFormData: true, // ✅ wajib jika mengirim FormData
    });
  };

  return (
    <AuthenticatedLayout>
      <div className="max-w-2xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Edit Artikel
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Judul */}
          <div>
            <label htmlFor="judul" className="block font-medium text-gray-700 mb-1">
              Judul Artikel
            </label>
            <input
              id="judul"
              type="text"
              value={data.judul}
              onChange={e => setData('judul', e.target.value)}
              placeholder="Masukkan judul artikel"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.judul && <p className="text-red-500 text-sm mt-1">{errors.judul}</p>}
          </div>

          {/* Isi */}
          <div>
            <label htmlFor="isi" className="block font-medium text-gray-700 mb-1">
              Isi Artikel
            </label>
            <textarea
              id="isi"
              value={data.isi}
              onChange={e => setData('isi', e.target.value)}
              placeholder="Tulis isi lengkap artikel..."
              rows={6}
              className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.isi && <p className="text-red-500 text-sm mt-1">{errors.isi}</p>}
          </div>

          {/* Penulis */}
          <div>
            <label htmlFor="penulis" className="block font-medium text-gray-700 mb-1">
              Penulis
            </label>
            <input
              id="penulis"
              type="text"
              value={data.penulis}
              onChange={e => setData('penulis', e.target.value)}
              placeholder="Nama penulis artikel"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.penulis && <p className="text-red-500 text-sm mt-1">{errors.penulis}</p>}
          </div>

          {/* Kategori */}
          <div>
            <label htmlFor="kategori" className="block font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <input
              id="kategori"
              type="text"
              value={data.kategori}
              onChange={e => setData('kategori', e.target.value)}
              placeholder="Misalnya: Teknologi, Lingkungan, dll"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.kategori && <p className="text-red-500 text-sm mt-1">{errors.kategori}</p>}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              value={data.status}
              onChange={e => setData('status', e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
          </div>

          {/* Gambar */}
          <div>
            <label htmlFor="gambar" className="block font-medium text-gray-700 mb-1">
              Gambar Artikel
            </label>
            <input
              id="gambar"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-50 file:text-blue-700 file:rounded file:cursor-pointer"
            />
            {errors.gambar && <p className="text-red-500 text-sm mt-1">{errors.gambar}</p>}
          </div>

          {/* Preview Gambar */}
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview Gambar:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded border"
              />
            </div>
          )}

          {/* Tombol Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={processing}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200 disabled:opacity-50"
            >
              {processing ? 'Menyimpan...' : 'Perbarui Artikel'}
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}

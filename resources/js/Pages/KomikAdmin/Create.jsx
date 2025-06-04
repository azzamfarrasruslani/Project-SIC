import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
  const { data, setData, post, processing, reset } = useForm({
    judul: '',
    deskripsi: '',
    thumbnail: null,
    gambar: null,
    pengarang: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Membuat FormData untuk mengirimkan file
    const formData = new FormData();
    formData.append('judul', data.judul);
    formData.append('deskripsi', data.deskripsi);
    formData.append('thumbnail', data.thumbnail);
    formData.append('gambar', data.gambar);
    formData.append('pengarang', data.pengarang);
    
    // Mengirimkan data ke backend
    post('/komik-admin', formData);
  };

  const handleFileChange = (e, field) => {
    setData(field, e.target.files[0]);
  };

  return (
    <AuthenticatedLayout>
    <div>
      <h1 className="text-xl font-bold mb-4">Tambah Komik</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text" 
            value={data.judul} 
            onChange={e => setData('judul', e.target.value)} 
            placeholder="Judul" 
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <textarea 
            value={data.deskripsi} 
            onChange={e => setData('deskripsi', e.target.value)} 
            placeholder="Deskripsi" 
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input 
            type="file" 
            onChange={(e) => handleFileChange(e, 'thumbnail')} 
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input 
            type="file" 
            onChange={(e) => handleFileChange(e, 'gambar')} 
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input 
            type="text" 
            value={data.pengarang} 
            onChange={e => setData('pengarang', e.target.value)} 
            placeholder="Pengarang" 
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit" 
          disabled={processing} 
          className="bg-blue-500 text-white px-6 py-3 rounded-full"
        >
          Simpan
        </button>
      </form>
    </div>
    </AuthenticatedLayout>
  );
}

import React from 'react';
import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ komik }) {
  const handleDelete = (id_komik) => {
    if (confirm('Yakin ingin menghapus?')) {
      router.delete(`/komik-admin/${id_komik}`);
    }
  };

  return (
            <AuthenticatedLayout>

            
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Daftar Komik (Admin)</h1>
      
      <div className="text-right mb-4">
        <Link
        href={route(menu.routeName)}
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
        >
          Tambah Komik
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Judul</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Pengarang</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Deskripsi</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Thumbnail</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Gambar</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {komik.map((item) => (
              <tr key={item.id_komik} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{item.judul}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{item.pengarang}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{item.deskripsi.slice(0, 100)}...</td>
                <td className="px-6 py-4 text-sm">
                  <img 
                    src={`/storage/${item.thumbnail}`} 
                    alt={item.judul} 
                    className="w-16 h-16 object-cover rounded-md" 
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <img 
                    src={`/storage/${item.gambar}`} 
                    alt={item.judul} 
                    className="w-16 h-16 object-cover rounded-md" 
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex space-x-4">
                    <Link
                      href={`/komik-admin/${item.id_komik}/edit`}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      Edit
                    </Link>
                    {/* Menggunakan Form untuk Delete dengan metode DELETE */}
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleDelete(item.id_komik);
                      }} 
                      method="POST" 
                      action={`/komik-admin/${item.id_komik}`}
                      className="inline"
                    >
                      {/* Tambahkan input hidden untuk menggunakan metode DELETE */}
                      <input type="hidden" name="_method" value="DELETE" />
                      <button
                        type="submit"
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        Hapus
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AuthenticatedLayout>
  );
}

import React from 'react';
import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ artikels }) {
  const handleDelete = (id_artikel) => {
    if (confirm('Yakin ingin menghapus artikel ini?')) {
      router.delete(`/artikel-admin/${id_artikel}`);
    }
  };

  return (
    <AuthenticatedLayout>

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Daftar Artikel</h1>

      <div className="text-right mb-4">
        <Link
          href="/artikel-admin/create"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Tambah Artikel
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3">Judul</th>
              <th className="px-6 py-3">Deskripsi</th>
              <th className="px-6 py-3">Gambar</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {(artikels || []).map(item => (
              <tr key={item.id_artikel} className="border-t">
                <td className="px-6 py-4">{item.judul}</td>
                <td className="px-6 py-4">{item.deskripsi.slice(0, 100)}...</td>
                <td className="px-6 py-4">
                  <img src={`/storage/${item.gambar}`} alt="gambar" className="w-20 h-20 object-cover rounded" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Link
                      href={`/artikel-admin/${item.id_artikel}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleDelete(item.id_artikel);
                      }}
                      method="POST"
                      action={`/artikel-admin/${item.id_artikel}`}
                    >
                      <input type="hidden" name="_method" value="DELETE" />
                      <button type="submit" className="text-red-600 hover:underline">
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

import React from "react";
import { Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function Index({ produk }) {
    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
            router.delete(`/admin/produk/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Daftar Produk
                        <span className="ml-3 text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                            {produk.length} Produk
                        </span>
                    </h1>

                    <Link
                        href={route("produk.create")}
                        className="inline-flex items-center gap-2 bg-lime-800 text-white px-5 py-3 rounded-lg shadow hover:bg-lime-700 transition-all"
                    >
                        <Plus className="w-5 h-5" />
                        Tambah Produk
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Nama</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Kategori</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Harga</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Deskripsi</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Link Produk</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Gambar</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {produk.map((item) => (
                                <tr key={item.id_produk} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 text-sm text-gray-900">{item.nama}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.kategori}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">Rp {item.harga.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {item.deskripsi?.length > 100 ? item.deskripsi.slice(0, 100) + "..." : item.deskripsi}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-blue-600 underline">
                                        <a href={item.linkproduk} target="_blank" rel="noopener noreferrer">Link</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={`/storage/${item.gambar}`}
                                            alt={item.nama}
                                            className="w-16 h-16 object-cover rounded shadow"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center space-x-3">
                                            <Link
                                                href={route("produk.edit", item.id_produk)}
                                                className="text-blue-500 hover:text-blue-700 transition"
                                            >
                                                <Edit className="w-5 h-5" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item.id_produk)}
                                                className="text-red-500 hover:text-red-700 transition"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
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

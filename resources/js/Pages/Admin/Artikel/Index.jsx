import React from "react";
import { Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ artikels }) {
    const handleDelete = (id_artikel) => {
        if (confirm("Yakin ingin menghapus artikel ini?")) {
            router.delete(route("artikel.destroy", id_artikel));
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        📚 Daftar Artikel
                    </h1>
                    <Link
                        href={route("artikel.create")}
                        className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
                    >
                        + Tambah Artikel
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-lime-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4">Judul</th>
                                <th className="px-6 py-4">Kategori</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Isi</th>
                                <th className="px-6 py-4">Gambar</th>
                                <th className="px-6 py-4">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(artikels || []).map((item) => (
                                <tr
                                    key={item.id_artikel}
                                    className="border-t hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {item.judul}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {item.kategori || (
                                            <span className="italic text-gray-400">
                                                -
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                item.status === "publish"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">
                                        {item.isi.length > 80
                                            ? item.isi.slice(0, 80) + "..."
                                            : item.isi}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.gambar ? (
                                            <img
                                                src={`/storage/${item.gambar}`}
                                                alt="Gambar Artikel"
                                                className="w-16 h-16 object-cover rounded border border-gray-300"
                                            />
                                        ) : (
                                            <span className="italic text-gray-400">
                                                Tidak ada
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 space-x-2">
                                        <Link
                                            href={route(
                                                "artikel.edit",
                                                item.id_artikel
                                            )}
                                            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-xs font-semibold"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(item.id_artikel)
                                            }
                                            className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-xs font-semibold"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {artikels.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-10 text-gray-400"
                                    >
                                        Belum ada artikel.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

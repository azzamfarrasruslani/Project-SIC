import { Link, router } from "@inertiajs/react";
import React from "react";

const KuisCard = ({ kuis = [] }) => {
    const handleDelete = (id_kuis) => {
        if (confirm('Yakin ingin menghapus kuis ini?')) {
            router.delete(route('kuis.destroy', id_kuis));
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Daftar Kuis</h1>
            <Link
                className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                href={route('kuis.create')}
            >
                Tambah Kuis
            </Link>

            {kuis.length === 0 ? (
                <p className="mt-4">Tidak ada kuis.</p>
            ) : (
                <ul className="space-y-2 mt-4">
                    {kuis.map((item) => (
                        <li key={item.id_kuis} className="border p-4 rounded-md shadow">
                            <p className="font-semibold">{item.pertanyaan}</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>A. {item.opsi_a}</li>
                                <li>B. {item.opsi_b}</li>
                                <li>C. {item.opsi_c}</li>
                                <li>D. {item.opsi_d}</li>
                            </ul>
                            <p className="mt-2 text-sm text-green-600">
                                Jawaban: {item.jawaban.toUpperCase()}
                            </p>

                            <div className="flex space-x-2 mt-4">
                                <Link
                                    href={route('kuis.edit', item.id_kuis)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() => handleDelete(item.id_kuis)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Hapus
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default KuisCard;

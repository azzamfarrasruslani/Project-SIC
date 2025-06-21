import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

const Show = ({ komik }) => {
    return (
        <GuestLayout>
            <Head title={komik.judul} />
            <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-green-700 mb-4">
                    {komik.judul}
                </h1>
                <p className="mb-4 text-gray-600">{komik.deskripsi}</p>
                <p className="mb-6 text-sm text-gray-500">Penulis: {komik.pengarang}</p>

                <img
                    src={`/storage/${komik.thumbnail}`}
                    alt="Thumbnail"
                    className="w-full max-h-[400px] object-cover mb-8 rounded shadow"
                />

                <div className="grid gap-4">
                    {komik.gambar_komik.map((g, i) => (
                        <img
                            key={i}
                            src={`/storage/${g.gambar}`}
                            alt={`Halaman ${i + 1}`}
                            className="w-full rounded shadow"
                        />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Show;

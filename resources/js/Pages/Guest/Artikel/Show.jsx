import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Show({ artikel }) {
    const formattedDate = new Date(artikel.created_at).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const shareToWhatsApp = () => {
        const message = `Baca artikel menarik tentang "${artikel.judul}" di sini: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <GuestLayout>
            <Head title={artikel.judul} />

            <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                {/* Gambar Header */}
                <div className="overflow-hidden rounded-lg shadow-lg mb-6">
                    <img
                        src={`/storage/${artikel.gambar}`}
                        alt={artikel.judul}
                        className="w-full h-80 object-cover"
                    />
                </div>

                {/* Judul dan Metadata */}
                <h1 className="text-4xl font-bold text-green-800 mb-2">
                    {artikel.judul}
                </h1>

                <div className="text-sm text-gray-600 mb-4">
                    Ditulis oleh <span className="font-semibold">{artikel.penulis}</span> ·{' '}
                    {formattedDate} · <span className="italic">{artikel.kategori}</span>
                </div>

                {/* Tombol Aksi */}
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href={route('artikel.guest')}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
                    >
                        ← Kembali ke Daftar
                    </Link>
                    <button
                        onClick={shareToWhatsApp}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded"
                    >
                        Bagikan ke WhatsApp
                    </button>
                </div>

                {/* Isi Artikel */}
                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: artikel.isi }}
                />
            </div>
        </GuestLayout>
    );
}

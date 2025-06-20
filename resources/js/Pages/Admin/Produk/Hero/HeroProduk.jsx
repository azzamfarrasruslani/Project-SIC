import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";
import { Plus, Edit, Trash2, ImagePlus, Upload } from "lucide-react";

export default function HeroProduk() {
    const { heroes } = usePage().props;

    const maxSlot = 5;
    const slots = Array.from({ length: maxSlot }, (_, i) => heroes[i] || null);

    const [selectedHeroId, setSelectedHeroId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus gambar ini?")) {
            router.delete(route("hero.destroy", id));
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = (id = null) => {
        if (!selectedFile) return;
        const formData = new FormData();
        formData.append("gambar", selectedFile);
        setUploading(true);

        if (id) {
            router.post(route("hero.update", id), formData, {
                onFinish: () => {
                    setUploading(false);
                    setSelectedHeroId(null);
                    setSelectedFile(null);
                },
            });
        } else {
            router.post(route("hero.store"), formData, {
                onFinish: () => {
                    setUploading(false);
                    setSelectedFile(null);
                },
            });
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Kelola Hero Carousel</h1>
                <p className="text-sm text-gray-500 mb-4">
                    Ukuran gambar maksimal <strong>2MB</strong>. Format diperbolehkan: <strong>jpg, jpeg, png</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {slots.map((hero, index) => (
                        <div
                            key={index}
                            className="relative border rounded-lg overflow-hidden shadow bg-white p-2"
                        >
                            {hero ? (
                                <>
                                    <img
                                        src={`/storage/${hero.gambar}`}
                                        alt={`Hero ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 flex gap-2">
                                        <label className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 cursor-pointer">
                                            <Edit size={18} />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    setSelectedHeroId(hero.id_hero);
                                                    handleFileChange(e);
                                                }}
                                                className="hidden"
                                            />
                                        </label>
                                        <button
                                            onClick={() => handleDelete(hero.id_hero)}
                                            className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    {selectedHeroId === hero.id_hero && (
                                        <div className="mt-2 flex gap-2">
                                            <button
                                                onClick={() => handleUpload(hero.id_hero)}
                                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                                                disabled={uploading}
                                            >
                                                {uploading ? "Mengunggah..." : "Simpan"}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedHeroId(null);
                                                    setSelectedFile(null);
                                                }}
                                                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 text-sm"
                                            >
                                                Batal
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-48 text-gray-400 gap-2">
                                    <ImagePlus size={32} />
                                    <span>Slot Kosong</span>
                                    <label className="mt-2 inline-flex items-center gap-1 text-sm text-lime-800 hover:underline cursor-pointer">
                                        <Plus size={16} /> Tambah Gambar
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(e)}
                                            className="hidden"
                                        />
                                    </label>
                                    {selectedFile && (
                                        <button
                                            onClick={() => handleUpload()}
                                            className="mt-2 text-sm bg-lime-700 text-white px-3 py-1 rounded hover:bg-lime-600"
                                            disabled={uploading}
                                        >
                                            {uploading ? "Mengunggah..." : "Simpan Gambar"}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-sm text-gray-500">
                    Total slot: {maxSlot} | Terisi: {heroes.length} | Kosong: {maxSlot - heroes.length}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

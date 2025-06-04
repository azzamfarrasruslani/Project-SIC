// resources/js/Pages/Komik/Edit.jsx
import React from "react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";

export default function Edit({ komik }) {
    const { data, setData, post, processing } = useForm({
        judul: komik.judul || "",
        deskripsi: komik.deskripsi || "",
        pengarang: komik.pengarang || "",
        thumbnail: null,
        gambar: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("judul", data.judul);
        formData.append("deskripsi", data.deskripsi);
        formData.append("pengarang", data.pengarang);
        if (data.thumbnail) formData.append("thumbnail", data.thumbnail);
        if (data.gambar) formData.append("gambar", data.gambar);
        formData.append("_method", "POST"); // gunakan POST karena route pakai POST

        post(route("komik.update", komik.id), formData, {
            forceFormData: true,
        });
    };

    const handleFileChange = (e, field) => {
        setData(field, e.target.files[0]);
    };

    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Edit Komik</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                        placeholder="Judul"
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        placeholder="Deskripsi"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        value={data.pengarang}
                        onChange={(e) => setData("pengarang", e.target.value)}
                        placeholder="Pengarang"
                        className="w-full p-2 border rounded"
                    />
                    <div>
                        <label>Thumbnail Baru (Opsional):</label>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "thumbnail")}
                            className="w-full p-2 border rounded"
                        />
                        {komik.thumbnail && (
                            <img
                                src={`/storage/${komik.thumbnail}`}
                                alt="Thumbnail lama"
                                className="mt-2 w-32"
                            />
                        )}
                    </div>
                    <div>
                        <label>Gambar Baru (Opsional):</label>
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "gambar")}
                            className="w-full p-2 border rounded"
                        />
                        {komik.gambar && (
                            <img
                                src={`/storage/${komik.gambar}`}
                                alt="Gambar lama"
                                className="mt-2 w-32"
                            />
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

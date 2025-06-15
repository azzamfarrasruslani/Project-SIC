import React, { useState } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const [form, setForm] = useState({
        judul: "",
        deskripsi: "",
        thumbnail: null,
        gambar: null,
        pengarang: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e, name) => {
        setForm((prev) => ({
            ...prev,
            [name]: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData();
        formData.append("judul", form.judul);
        formData.append("deskripsi", form.deskripsi);
        formData.append("thumbnail", form.thumbnail);
        formData.append("gambar", form.gambar);
        formData.append("pengarang", form.pengarang);

        try {
            const response = await axios.post("/admin/komik", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Jika berhasil
            window.location.href = "/admin/komik"; // Redirect manual
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors); // Tampilkan error validasi
            } else {
                console.error("Gagal menyimpan data", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <div>
                <h1 className="text-xl font-bold mb-4">Tambah Komik</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="judul"
                            value={form.judul}
                            onChange={handleChange}
                            placeholder="Judul"
                            className="w-full p-2 border rounded"
                        />
                        {errors.judul && (
                            <p className="text-red-500 text-sm">
                                {errors.judul}
                            </p>
                        )}
                    </div>
                    <div>
                        <textarea
                            name="deskripsi"
                            value={form.deskripsi}
                            onChange={handleChange}
                            placeholder="Deskripsi"
                            className="w-full p-2 border rounded"
                        />
                        {errors.deskripsi && (
                            <p className="text-red-500 text-sm">
                                {errors.deskripsi}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="file"
                            name="thumbnail"
                            onChange={(e) =>
                                handleFileChange(e, "thumbnail")
                            }
                            className="w-full p-2 border rounded"
                        />
                        {errors.thumbnail && (
                            <p className="text-red-500 text-sm">
                                {errors.thumbnail}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="file"
                            name="gambar"
                            onChange={(e) => handleFileChange(e, "gambar")}
                            className="w-full p-2 border rounded"
                        />
                        {errors.gambar && (
                            <p className="text-red-500 text-sm">
                                {errors.gambar}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="pengarang"
                            value={form.pengarang}
                            onChange={handleChange}
                            placeholder="Pengarang"
                            className="w-full p-2 border rounded"
                        />
                        {errors.pengarang && (
                            <p className="text-red-500 text-sm">
                                {errors.pengarang}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white px-6 py-3 rounded-full"
                    >
                        {loading ? "Menyimpan..." : "Simpan"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

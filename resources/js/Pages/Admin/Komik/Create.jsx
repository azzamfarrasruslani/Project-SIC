import React, { useState } from "react";
import axios from "axios";
import { router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";
import FormInput from "@/Components/Admin/Common/FormInput";
import FormTextarea from "@/Components/Admin/Common/FormTextarea";
import FormFile from "@/Components/Admin/Common/FormFile";

export default function Create() {
    const [form, setForm] = useState({
        judul: "",
        deskripsi: "",
        thumbnail: null,
        gambar: [],
        pengarang: "",
    });
    const [previewThumbnail, setPreviewThumbnail] = useState(null);
    const [previewGambar, setPreviewGambar] = useState([]);

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
        const files = e.target.files;

        if (name === "thumbnail") {
            setForm((prev) => ({ ...prev, thumbnail: files[0] }));
            setPreviewThumbnail(URL.createObjectURL(files[0]));
        } else if (name === "gambar") {
            const gambarArray = [...files];
            setForm((prev) => ({ ...prev, gambar: gambarArray }));
            setPreviewGambar(
                gambarArray.map((file) => URL.createObjectURL(file))
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData();
        formData.append("judul", form.judul);
        formData.append("deskripsi", form.deskripsi);
        formData.append("pengarang", form.pengarang);
        formData.append("thumbnail", form.thumbnail);

        // Tambahkan setiap gambar ke formData
        form.gambar.forEach((file, index) => {
            formData.append(`gambar[${index}]`, file);
        });

        try {
            await axios.post(route("komik.store"), formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            router.visit(route("komik.admin"));
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error("Gagal menyimpan data", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Tambah Komik
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-md border">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <FormInput
                            label="Judul"
                            name="judul"
                            value={form.judul}
                            onChange={handleChange}
                            placeholder="Masukkan Judul"
                            error={errors.judul}
                        />
                        <FormTextarea
                            label="Deskripsi"
                            name="deskripsi"
                            value={form.deskripsi}
                            onChange={handleChange}
                            placeholder="Masukkan Deskripsi"
                            error={errors.deskripsi}
                        />
                        <FormFile
                            label="Thumbnail"
                            name="thumbnail"
                            onChange={(e) => handleFileChange(e, "thumbnail")}
                            error={errors.thumbnail}
                        />
                        {previewThumbnail && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-600 mb-1">
                                    Preview Thumbnail:
                                </p>
                                <img
                                    src={previewThumbnail}
                                    alt="Preview Thumbnail"
                                    className="w-32 h-32 object-cover rounded shadow"
                                />
                            </div>
                        )}

                        <FormFile
                            label="Gambar Panel (boleh lebih dari satu)"
                            name="gambar"
                            onChange={(e) => handleFileChange(e, "gambar")}
                            error={errors["gambar.0"] || errors.gambar}
                            multiple
                        />
                        {previewGambar.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-600 mb-1">
                                    Preview Gambar Panel:
                                </p>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                                    {previewGambar.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt={`Panel ${idx + 1}`}
                                            className="w-24 h-24 object-cover rounded shadow"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <FormInput
                            label="Pengarang"
                            name="pengarang"
                            value={form.pengarang}
                            onChange={handleChange}
                            placeholder="Masukkan Nama Pengarang"
                            error={errors.pengarang}
                        />

                        <div className="flex justify-center gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all shadow-md ${
                                    loading
                                        ? "bg-lime-600 cursor-not-allowed"
                                        : "bg-lime-800 hover:bg-lime-600 text-white"
                                }`}
                            >
                                {loading ? "Menyimpan..." : "Simpan Komik"}
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    router.visit(route("komik.admin"))
                                }
                                className="px-8 py-3 rounded-lg font-semibold transition-all bg-gray-300 hover:bg-gray-400 shadow-md text-gray-700"
                            >
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

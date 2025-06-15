import React, { useState } from "react";
import axios from "axios";

import { usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";

import FormInput from "@/Components/Admin/Common/FormInput";
import FormTextarea from "@/Components/Admin/Common/FormTextarea";
import FormFile from "@/Components/Admin/Common/FormFile";

export default function Edit() {
    const { props } = usePage();
    const komik = props.komik;

    const [form, setForm] = useState({
        judul: komik.judul || "",
        deskripsi: komik.deskripsi || "",
        pengarang: komik.pengarang || "",
        thumbnail: null,
        gambar: null,
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
        formData.append("pengarang", form.pengarang);
        if (form.thumbnail) formData.append("thumbnail", form.thumbnail);
        if (form.gambar) formData.append("gambar", form.gambar);

        try {
            await axios.post(
                `/admin/komik/${komik.id_komik}/update`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            window.location.href = route("komik.admin");
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
                    Edit Komik
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

                        <FormInput
                            label="Pengarang"
                            name="pengarang"
                            value={form.pengarang}
                            onChange={handleChange}
                            placeholder="Masukkan Nama Pengarang"
                            error={errors.pengarang}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <FormFile
                                    label="Thumbnail Baru (Opsional)"
                                    name="thumbnail"
                                    onChange={(e) =>
                                        handleFileChange(e, "thumbnail")
                                    }
                                    error={errors.thumbnail}
                                />
                                {komik.thumbnail && (
                                    <div className="mt-3 p-2 border rounded-lg bg-gray-50 shadow-sm">
                                        <p className="text-sm text-gray-600 mb-2">
                                            Thumbnail Lama:
                                        </p>
                                        <img
                                            src={`/storage/${komik.thumbnail}`}
                                            alt="Thumbnail lama"
                                            className="w-32 h-32 object-cover rounded shadow"
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <FormFile
                                    label="Gambar Baru (Opsional)"
                                    name="gambar"
                                    onChange={(e) =>
                                        handleFileChange(e, "gambar")
                                    }
                                    error={errors.gambar}
                                />
                                {komik.gambar && (
                                    <div className="mt-3 p-2 border rounded-lg bg-gray-50 shadow-sm">
                                        <p className="text-sm text-gray-600 mb-2">
                                            Gambar Lama:
                                        </p>
                                        <img
                                            src={`/storage/${komik.gambar}`}
                                            alt="Gambar lama"
                                            className="w-32 h-32 object-cover rounded shadow"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all shadow-md ${
                                    loading
                                        ? "bg-lime-600 cursor-not-allowed"
                                        : "bg-lime-800 hover:bg-lime-600  text-white"
                                }`}
                            >
                                {loading ? "Menyimpan..." : "Simpan Perubahan"}
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

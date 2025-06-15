import React, { useState } from "react";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// Import komponen reusable
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
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            // redirect ke halaman admin komik setelah sukses
            window.location.href = "/komik";
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
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Edit Komik</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                    <FormFile
                        label="Thumbnail Baru (Opsional)"
                        name="thumbnail"
                        onChange={(e) => handleFileChange(e, "thumbnail")}
                        error={errors.thumbnail}
                    />
                    {komik.thumbnail && (
                        <img
                            src={`/storage/${komik.thumbnail}`}
                            alt="Thumbnail lama"
                            className="mt-2 w-32"
                        />
                    )}

                    <FormFile
                        label="Gambar Baru (Opsional)"
                        name="gambar"
                        onChange={(e) => handleFileChange(e, "gambar")}
                        error={errors.gambar}
                    />
                    {komik.gambar && (
                        <img
                            src={`/storage/${komik.gambar}`}
                            alt="Gambar lama"
                            className="mt-2 w-32"
                        />
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        {loading ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

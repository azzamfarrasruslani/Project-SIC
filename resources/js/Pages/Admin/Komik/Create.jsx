import React, { useState } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormInput from "@/Components/Admin/Common/FormInput";
import FormTextarea from "@/Components/Admin/Common/FormTextarea";
import FormFile from "@/Components/Admin/Common/FormFile";

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

            window.location.href = "/admin/komik";
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
            <div>
                <h1 className="text-xl font-bold mb-4">Tambah Komik</h1>
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
                    <FormFile
                        label="Thumbnail"
                        name="thumbnail"
                        onChange={(e) => handleFileChange(e, "thumbnail")}
                        error={errors.thumbnail}
                    />
                    <FormFile
                        label="Gambar"
                        name="gambar"
                        onChange={(e) => handleFileChange(e, "gambar")}
                        error={errors.gambar}
                    />
                    <FormInput
                        label="Pengarang"
                        name="pengarang"
                        value={form.pengarang}
                        onChange={handleChange}
                        placeholder="Masukkan Nama Pengarang"
                        error={errors.pengarang}
                    />
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

import React, { useState } from "react";
import axios from "axios";
import { router } from "@inertiajs/react"; // inertia router
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js"; // ziggy js
import FormInput from "@/Components/Admin/Common/FormInput";
import FormTextarea from "@/Components/Admin/Common/FormTextarea";
import FormFile from "@/Components/Admin/Common/FormFile";

export default function Create() {
    const [form, setForm] = useState({
        nama: "",
        deskripsi: "",
        gambar: null,
        kategori: "",
        harga: "",
        linkproduk: "",
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
        formData.append("nama", form.nama);
        formData.append("deskripsi", form.deskripsi);
        formData.append("gambar", form.gambar);
        formData.append("kategori", form.kategori);
        formData.append("harga", form.harga);
        formData.append("linkproduk", form.linkproduk);

        try {
            await axios.post(route("produk.store"), formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            router.visit(route("produk.admin"));
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
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Tambah Produk</h1>

                <div className="bg-white p-6 rounded-lg shadow-md border">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <FormInput
                            label="Nama Produk"
                            name="nama"
                            value={form.nama}
                            onChange={handleChange}
                            placeholder="Masukkan Nama Produk"
                            error={errors.nama}
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
                            label="Gambar Produk"
                            name="gambar"
                            onChange={(e) => handleFileChange(e, "gambar")}
                            error={errors.gambar}
                        />
                        <FormInput
                            label="Kategori"
                            name="kategori"
                            value={form.kategori}
                            onChange={handleChange}
                            placeholder="Masukkan Kategori"
                            error={errors.kategori}
                        />
                        <FormInput
                            label="Harga"
                            name="harga"
                            value={form.harga}
                            onChange={handleChange}
                            placeholder="Masukkan Harga"
                            error={errors.harga}
                        />
                        <FormInput
                            label="Link Produk"
                            name="linkproduk"
                            value={form.linkproduk}
                            onChange={handleChange}
                            placeholder="Masukkan Link Produk (jika ada)"
                            error={errors.linkproduk}
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
                                {loading ? "Menyimpan..." : "Simpan Produk"}
                            </button>

                            <button
                                type="button"
                                onClick={() => router.visit(route("produk.admin"))}
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

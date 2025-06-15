export default function KomikForm({ data, setData, handleSubmit, processing }) {
    const handleFileChange = (e, field) => {
        setData(field, e.target.files[0]);
    };

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
        >
            <div>
                <input
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData("judul", e.target.value)}
                    placeholder="Judul"
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <textarea
                    value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                    placeholder="Deskripsi"
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={(e) => setData("thumbnail", e.target.files[0])}
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={(e) => setData("gambar", e.target.files[0])}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={data.pengarang}
                    onChange={(e) => setData("pengarang", e.target.value)}
                    placeholder="Pengarang"
                    className="w-full p-2 border rounded"
                />
            </div>
            <button
                type="submit"
                disabled={processing}
                className="bg-blue-500 text-white px-6 py-3 rounded-full"
            >
                Simpan
            </button>
        </form>
    );
}

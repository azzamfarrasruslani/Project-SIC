import { useForm } from '@inertiajs/react';

export default function Create({ komiks }) {
    const { data, setData, post, processing, errors } = useForm({
        pertanyaan: '',
        opsi_a: '',
        opsi_b: '',
        opsi_c: '',
        opsi_d: '',
        jawaban: '',
        id_komik: '', // Menyimpan id_komik yang dipilih
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('kuis.store'));
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Buat Kuis Baru</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Pertanyaan:</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.pertanyaan}
                        onChange={e => setData('pertanyaan', e.target.value)}
                    />
                    {errors.pertanyaan && <div className="text-red-600 text-sm mt-1">{errors.pertanyaan}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Opsi A:</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.opsi_a}
                        onChange={e => setData('opsi_a', e.target.value)}
                    />
                    {errors.opsi_a && <div className="text-red-600 text-sm mt-1">{errors.opsi_a}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Opsi B:</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.opsi_b}
                        onChange={e => setData('opsi_b', e.target.value)}
                    />
                    {errors.opsi_b && <div className="text-red-600 text-sm mt-1">{errors.opsi_b}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Opsi C:</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.opsi_c}
                        onChange={e => setData('opsi_c', e.target.value)}
                    />
                    {errors.opsi_c && <div className="text-red-600 text-sm mt-1">{errors.opsi_c}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Opsi D:</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.opsi_d}
                        onChange={e => setData('opsi_d', e.target.value)}
                    />
                    {errors.opsi_d && <div className="text-red-600 text-sm mt-1">{errors.opsi_d}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Jawaban:</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.jawaban}
                        onChange={e => setData('jawaban', e.target.value)}
                    />
                    {errors.jawaban && <div className="text-red-600 text-sm mt-1">{errors.jawaban}</div>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Pilih Komik:</label>
                    <select
                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                        value={data.id_komik}
                        onChange={e => setData('id_komik', e.target.value)}
                    >
                        <option value="">Pilih Komik</option>
                        {komiks.map((komik) => (
                            <option key={komik.id_komik} value={komik.id_komik}>
                                {komik.judul}
                            </option>
                        ))}
                    </select>
                    {errors.id_komik && <div className="text-red-600 text-sm mt-1">{errors.id_komik}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    {processing ? 'Menyimpan...' : 'Buat Kuis'}
                </button>
            </form>
        </div>
    );
}

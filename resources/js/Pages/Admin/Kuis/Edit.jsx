import { useForm } from '@inertiajs/react';

export default function Edit({ kuis }) {
    const { data, setData, put, processing, errors } = useForm({
        pertanyaan: kuis.pertanyaan,
        opsi_a: kuis.opsi_a,
        opsi_b: kuis.opsi_b,
        opsi_c: kuis.opsi_c,
        opsi_d: kuis.opsi_d,
        jawaban: kuis.jawaban,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('kuis.update', kuis.id_kuis)); // Pastikan ini mengarah ke route yang benar
    };

    return (
        <div>
            <h1>Edit Pertanyaan</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pertanyaan:</label>
                    <input
                        type="text"
                        value={data.pertanyaan}
                        onChange={e => setData('pertanyaan', e.target.value)}
                    />
                    {errors.pertanyaan && <div>{errors.pertanyaan}</div>}
                </div>
                <div>
                    <label>Opsi A:</label>
                    <input
                        type="text"
                        value={data.opsi_a}
                        onChange={e => setData('opsi_a', e.target.value)}
                    />
                </div>
                <div>
                    <label>Opsi B:</label>
                    <input
                        type="text"
                        value={data.opsi_b}
                        onChange={e => setData('opsi_b', e.target.value)}
                    />
                </div>
                <div>
                    <label>Opsi C:</label>
                    <input
                        type="text"
                        value={data.opsi_c}
                        onChange={e => setData('opsi_c', e.target.value)}
                    />
                </div>
                <div>
                    <label>Opsi D:</label>
                    <input
                        type="text"
                        value={data.opsi_d}
                        onChange={e => setData('opsi_d', e.target.value)}
                    />
                </div>
                <div>
                    <label>Jawaban:</label>
                    <input
                        type="text"
                        value={data.jawaban}
                        onChange={e => setData('jawaban', e.target.value)}
                    />
                </div>
                <button type="submit" disabled={processing}>Update</button>
            </form>
        </div>
    );
}

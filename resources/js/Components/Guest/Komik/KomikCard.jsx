import React from "react";
import { usePage, Link } from "@inertiajs/react";
import { BookOpen } from "lucide-react";

const KomikCard = React.forwardRef((props, ref) => {
    const { komik: komikList } = usePage().props;

    return (
        <section
            ref={ref}
            className="bg-gradient-to-br from-green-100 to-white min-h-screen py-10"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <h1 className="text-3xl font-extrabold text-green-800 flex items-center gap-2">
                        <BookOpen className="w-6 h-6" />
                        Komik Edukatif
                    </h1>
                </div>

                {chunkArray(komikList, 3).map((row, rowIndex) => (
                    <div key={rowIndex}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                            {row.map((komik) => (
                                <Link
                                    key={komik.id_komik}
                                    href={`/komik/${komik.id_komik}`}
                                    className="block transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                                >
                                    <div className="relative bg-white/70 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden cursor-pointer ">
                                        <div className="relative">
                                            <img
                                                src={`/storage/${komik.thumbnail}`}
                                                alt={`Cover komik ${komik.judul}`}
                                                className="w-full h-auto object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/30 text-white p-5">
                                                <h2 className="text-lg font-bold">
                                                    {komik.judul}
                                                </h2>
                                                <p className="text-sm mt-1 line-clamp-2 italic">
                                                    {komik.deskripsi || "Deskripsi belum tersedia."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mb-6">
                            <img
                                src="/build/images/rak-buku.png"
                                alt="Rak Kayu"
                                className="w-full lg:max-w-[1500px] sm:max-w-[600px] h-auto object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default KomikCard;

function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i + 0, i + size));
    }
    return chunked;
}

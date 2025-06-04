import React from "react";
import { motion } from "framer-motion";

const PeatFunctionsSection = React.forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
            id="next-section"
            className="min-h-screen bg-lime-100 text-lime-900 flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-6xl w-full space-y-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Kenapa Lahan Gambut Sangat Penting? 🌿
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    {/* Fungsi 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-lime-300 hover:shadow-lg transition">
                        <img
                            src="/build/images/Fungsi-Gambut/1.png"
                            alt="gambar1"
                            className="rounded-xl"
                        />
                        <div className="mt-3">
                            <h3 className="text-xl font-semibold mb-2">
                                🌍 Menyerap Karbon
                            </h3>
                            <p>
                                Lahan gambut menyimpan karbon dalam jumlah
                                besar, membantu mengurangi efek perubahan iklim.
                            </p>
                        </div>
                    </div>

                    {/* Fungsi 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-lime-300 hover:shadow-lg transition">
                        <img
                            src="/build/images/Fungsi-Gambut/2.png"
                            alt="gambar1"
                            className="rounded-xl"
                        />
                        <div className="mt-3">
                            <h3 className="text-xl font-semibold mb-2">
                                💧 Menjaga Air Tanah
                            </h3>
                            <p>
                                Struktur gambut seperti spons menyerap dan
                                menyimpan air, membantu mencegah banjir dan
                                kekeringan.
                            </p>
                        </div>
                    </div>

                    {/* Fungsi 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-lime-300 hover:shadow-lg transition">
                        <img
                            src="/build/images/Fungsi-Gambut/3.png"
                            alt="gambar1"
                            className="rounded-xl"
                        />
                        <div className="mt-3">
                            <h3 className="text-xl font-semibold mb-2">
                                🐦 Habitat Satwa
                            </h3>
                            <p>
                                Menjadi rumah bagi flora dan fauna unik yang
                                tidak ditemukan di ekosistem lain.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    <button
                        className="bg-lime-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-lime-800 transition"
                        onClick={() => {
                            alert("Petualangan edukasi masih berlanjut! 🌱");
                        }}
                    >
                        Pelajari Lebih Lanjut 💡
                    </button>
                </motion.div>
            </div>
        </section>
    );
});

export default PeatFunctionsSection;

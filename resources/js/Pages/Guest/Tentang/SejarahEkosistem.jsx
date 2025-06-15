import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { motion } from "framer-motion";

const steps = [
    {
        title: "1️⃣ Tumbuhan Tumbuh Subur",
        description: "Di daerah rawa basah, tanaman tumbuh subur berkat curah hujan tinggi dan sinar matahari yang melimpah."
    },
    {
        title: "2️⃣ Tumbuhan Mati dan Mengendap",
        description: "Daun, ranting, dan akar yang mati menumpuk di permukaan tanah setiap tahun."
    },
    {
        title: "3️⃣ Kondisi Jenuh Air",
        description: "Tanah yang selalu tergenang air kekurangan oksigen, sehingga sisa tumbuhan sulit terurai sempurna."
    },
    {
        title: "4️⃣ Penumpukan Bahan Organik",
        description: "Sisa tumbuhan yang tidak terurai menumpuk selama ratusan hingga ribuan tahun."
    },
    {
        title: "5️⃣ Pembentukan Lapisan Gambut",
        description: "Lapisan bahan organik berubah menjadi gambut yang kaya karbon setelah ribuan tahun."
    },
    {
        title: "6️⃣ Ekosistem Gambut Terbentuk",
        description: "Akhirnya, terbentuk ekosistem gambut yang menjadi rumah bagi banyak flora dan fauna langka."
    }
];

const SejarahEkosistem = () => {
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <GuestLayout>
            <div className="mt-0">
                <Head title="Sejarah Terbentuknya Lahan Gambut" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-10 text-center">
                        Sejarah Terbentuknya Lahan Gambut
                    </h1>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-green-500"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-xl font-bold text-green-800 mb-2">{step.title}</h2>
                                <p className="text-gray-700">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div ref={bottomRef}></div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default SejarahEkosistem;

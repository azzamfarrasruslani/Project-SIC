import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import { Github, Linkedin, Mail } from "lucide-react";

const contributors = [
    {
        name: "Azzam Farras",
        role: "Pengembang Utama",
        image: "https://i.pravatar.cc/150?img=3",
        description: "Bertanggung jawab dalam pengembangan sistem edukasi lahan gambut berbasis web.",
        github: "https://github.com/azzam",
        linkedin: "https://linkedin.com/in/azzam",
        email: "azzam@example.com",
    },
    {
        name: "Dewi Lestari",
        role: "Penulis Konten",
        image: "https://i.pravatar.cc/150?img=5",
        description: "Menyusun materi edukatif seputar ekosistem lahan gambut dan konservasi.",
        github: "",
        linkedin: "https://linkedin.com/in/dewi",
        email: "dewi@example.com",
    },
    {
        name: "Budi Santoso",
        role: "Desainer UI/UX",
        image: "https://i.pravatar.cc/150?img=8",
        description: "Merancang tampilan dan pengalaman pengguna yang ramah serta informatif.",
        github: "https://github.com/budi",
        linkedin: "https://linkedin.com/in/budi",
        email: "budi@example.com",
    }
];

const Kontributor = () => {
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
                <Head title="Kontributor" />
                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-green-700 mb-10 text-center">Tim Kontributor</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contributors.map((person, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h2 className="text-xl font-bold text-green-800">{person.name}</h2>
                                <p className="text-green-600 mb-2">{person.role}</p>
                                <p className="text-gray-600 text-sm mb-4">{person.description}</p>
                                <div className="flex justify-center gap-4 text-green-700">
                                    {person.github && (
                                        <a href={person.github} target="_blank" rel="noopener noreferrer">
                                            <Github />
                                        </a>
                                    )}
                                    {person.linkedin && (
                                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin />
                                        </a>
                                    )}
                                    <a href={`mailto:${person.email}`}>
                                        <Mail />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div ref={bottomRef} className="mt-10"></div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Kontributor;

import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="flex items-center cursor-pointer transition hover:text-lime-600">
                <span>{label}</span>
                {/* Panah dropdown */}
                <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-4 w-60 bg-white rounded-lg shadow-xl z-50 p-3 border border-gray-200"
                    >
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className="block px-3 py-2 rounded-lg hover:bg-lime-50 transition"
                            >
                                <p className="font-semibold text-gray-800">
                                    {item.label}
                                </p>
                                {item.desc && (
                                    <p className="text-sm text-gray-500">
                                        {item.desc}
                                    </p>
                                )}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = () => {
    const { url } = usePage();
    const currentRoute = url;

    const navbarBg =
        currentRoute === "/" ? "bg-transparent" : "bg-white shadow";

    const activeTextClass = "text-lime-600 border-b-2 border-lime-600";
    const normalTextClass =
        currentRoute === "/"
            ? "text-white font-semibold transition-all ease-in-out"
            : "text-black font-semibold transition-all ease-in-out";

    const logoSrc =
        currentRoute === "/"
            ? "/public/images/Logo/PeatlandHero-White.png"
            : "/public/images/Logo/PeatlandHero-Color.png";

    return (
        <nav
            className={`z-50 w-full py-4 px-6 ${navbarBg} transition-all duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link href={route("home")}>
                    <img
                        src={logoSrc}
                        alt="logo web"
                        className="w-16 md:w-36"
                    />
                </Link>

                <ul className="hidden md:flex space-x-8 text-lg items-center">
                    {/* <li>
                        <Link
                            href={route("home")}
                            className={`relative ${currentRoute === "/" ? activeTextClass : normalTextClass}`}
                        >
                            Beranda
                        </Link>
                    </li> */}

                    <li className={normalTextClass}>
                        <Dropdown
                            label="Tentang"
                            items={[
                                // { label: "Apa Itu Lahan Gambut", path: "/tentang/apa-itu", desc: "Pengertian lahan gambut" },
                                {
                                    label: "Peran & Manfaat",
                                    path: route("fungsi-gambut"),
                                    desc: "Manfaat lingkungan & sosial",
                                },
                                // { label: "Ancaman & Konservasi", path: "/tentang/ancaman", desc: "Ancaman ekosistem & solusinya" },
                                // { label: "Potensi Ekonomi", path: "/tentang/potensi", desc: "Peluang ekonomi berkelanjutan" },
                                {
                                    label: "Sejarah Ekosistem",
                                    path: route("sejarah-ekosistem"),
                                    desc: "Sejarah terbentuknya gambut",
                                },
                            ]}
                        />
                    </li>

                    <li className={normalTextClass}>
                        <Dropdown
                            label="Edukasi"
                            items={[
                                {
                                    label: "Komik Edukasi",
                                    path: route("komik.guest"),
                                    desc: "Belajar gambut lewat komik",
                                },
                                // { label: "Video Edukasi", path: "/edukasi/video", desc: "Video pembelajaran menarik" },
                                // { label: "Artikel & Berita", path:  route("artikel.guest"), desc: "Informasi terkini" },
                                // { label: "Infografis", path: "/edukasi/infografis", desc: "Gambaran data visual" },
                                // { label: "Quiz & Tes", path: "/edukasi/quiz", desc: "Tes pengetahuan anda" }
                            ]}
                        />
                    </li>

                    <li>
                        <Link
                            href={route("produk.guest")}
                            className={`relative ${
                                currentRoute.startsWith("/produk")
                                    ? activeTextClass
                                    : normalTextClass
                            }`}
                        >
                            Produk Gambut
                        </Link>
                    </li>

                    <li className={normalTextClass}>
                        <Dropdown
                            label="Lainnya"
                            items={[
                                // { label: "Peta Gambut", path: "/peta-gambut", desc: "Peta sebaran gambut" },
                                // { label: "Penelitian", path: "/penelitian", desc: "Hasil studi ilmiah" },
                                // { label: "Kegiatan", path: "/kegiatan", desc: "Event & aktivitas" },
                                // { label: "Komunitas", path: "/komunitas", desc: "Jaringan pemerhati gambut" },
                                // {
                                //     label: "Kontributor",
                                //     path: route("kontributor"),
                                //     desc: "Tim & kolaborator",
                                // },
                            ]}
                        />
                    </li>
                </ul>

                <div className="flex items-center space-x-4">
                    <Link
                        href={route("login")}
                        className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

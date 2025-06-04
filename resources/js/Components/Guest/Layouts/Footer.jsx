import Icon from "../../Icon/Icon.jsx";

const Footer = () => {
    return (
        <footer className="w-full bg-lime-900 text-white px-6 py-12  ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo dan Tentang Gambi */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/build/images/logo/SIC Logo Vertical - White.png"
                        alt="Gambi Logo"
                        className="h-full w-20 mb-4"
                    />
                    <p className="text-sm text-lime-100">
                        Hai! Aku <span className="font-semibold">Gambi</span>,
                        si penjaga lahan gambut. Yuk kenali keajaiban ekosistem
                        gambut di Indonesia bersama aku! 🌿✨
                    </p>
                </div>

                {/* Navigasi Edukasi */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold mb-4 text-lime-200">
                        Navigasi
                    </h2>
                    <ul className="space-y-2 text-lime-100 text-sm">
                        <li>
                            <a
                                href="#beranda"
                                className="hover:text-white transition"
                            >
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a
                                href="#tentang"
                                className="hover:text-white transition"
                            >
                                Tentang Gambut
                            </a>
                        </li>
                        <li>
                            <a
                                href="#eksplorasi"
                                className="hover:text-white transition"
                            >
                                Eksplorasi Alam
                            </a>
                        </li>
                        <li>
                            <a
                                href="#edukasi"
                                className="hover:text-white transition"
                            >
                                Belajar Bareng Gambi
                            </a>
                        </li>
                        <li>
                            <a
                                href="#kontak"
                                className="hover:text-white transition"
                            >
                                Kontak
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Kontak */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold mb-4 text-lime-200">
                        Kontak Kami
                    </h2>
                    <p className="text-sm text-lime-100">
                        Email:{" "}
                        <a
                            href="mailto:halo@gambi.com"
                            className="hover:underline"
                        >
                            halo@gambi.com
                        </a>
                    </p>
                    <p className="text-sm text-lime-100">
                        Telepon:{" "}
                        <a href="tel:+628123456789" className="hover:underline">
                            +62 812-3456-789
                        </a>
                    </p>
                    <p className="text-sm text-lime-100">
                        Alamat: Lahan Gambut Siak, Riau
                    </p>
                </div>
            </div>

            {/* Ikon Sosial */}
            <div className="mt-10 flex justify-center gap-4">
                <Icon
                    name="facebook"
                    className="w-10 rounded-full bg-white py-2.5 text-xl text-lime-800 hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out shadow-md"
                />
                <Icon
                    name="instagram"
                    className="w-10 rounded-full bg-white py-2.5 text-xl text-lime-800 hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out shadow-md"
                />
                <Icon
                    name="youtube"
                    className="w-10 rounded-full bg-white py-2.5 text-xl text-lime-800 hover:bg-lime-600 hover:text-white transition duration-300 ease-in-out shadow-md"
                />
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-lime-700 pt-4 text-center text-sm text-lime-300">
                © {new Date().getFullYear()} GATY. Semua Hak Dilindungi
                🌱
            </div>
        </footer>
    );
};

export default Footer;

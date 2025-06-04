import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

const Navbar = () => {
    const { url } = usePage();
    const currentRoute = url;

    const navbarBg = currentRoute.startsWith("/komik")
        ? "bg-white"
        : currentRoute.startsWith("/produk")
        ? "bg-white"
        : currentRoute === "/"
        ? "bg-transparent"
        : "bg-trasparent"; // Default background

    const activeTextClass = "text-lime-600 border-b-2 border-lime-600";
    const normalTextClass =
        currentRoute.startsWith("/komik") || currentRoute.startsWith("/produk") || currentRoute.startsWith("/login")
            ? "text-black hover:text-lime-600  text-slate-850 font-extrabold transition-all ease-in-out lg:px-2 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-lime-600 before:transition-all before:duration-800 before:transform before:-translate-x-1/2 hover:text-lime-200 hover:before:w-full "
            : "text-white hover:text-lime-200  text-slate-850 font-extrabold transition-all ease-in-out lg:px-2 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-lime-600 before:transition-all before:duration-800 before:transform before:-translate-x-1/2 hover:text-lime-200 hover:before:w-full";

    const logoSrc =
        currentRoute === "/"
            ? "/build/images/logo/SIC Logo Vertical - White.png"
            : "/build/images/logo/SIC Logo Vertical - Color.png";

    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        window.location.href = route("change.language", selectedLang);
    };

    return (
        <nav
            className={`z-50 w-full py-3 px-4 ${navbarBg} transition-all duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <img src={logoSrc} alt="logo web" className="w-14 md:w-16" />

                <div className="flex items-center space-x-6">
                    <ul className="hidden md:flex space-x-6 text-lg font-semibold">
                        <li>
                            <Link
                                href={route("home")}
                                className={`relative flex items-center ${
                                    currentRoute === "/"
                                        ? activeTextClass
                                        : normalTextClass
                                }`}
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("komik.guest")}
                                className={`relative flex items-center ${
                                    currentRoute.startsWith("/komik")
                                        ? activeTextClass
                                        : normalTextClass
                                }`}
                            >
                                Komik Edukatif
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("produk.guest")}
                                className={`relative flex items-center  ${
                                    currentRoute.startsWith("/produk")
                                        ? activeTextClass
                                        : normalTextClass
                                }`}
                            >
                                Produk Gambut
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Login + Language Switcher */}
                <div className="flex items-center space-x-4">

                    {/* <div className="flex border border-lime-700 rounded-md overflow-hidden">
                        <button
                            onClick={() =>
                                (window.location.href = route(
                                    "change.language",
                                    "id"
                                ))
                            }
                            className={`px-4 py-1 text-sm font-semibold transition-colors duration-300 ${
                                route().params.language === "id" ||
                                !route().params.language
                                    ? "bg-lime-600 text-white"
                                    : "bg-white text-lime-600"
                            }`}
                        >
                            ID
                        </button>
                        <button
                            onClick={() =>
                                (window.location.href = route(
                                    "change.language",
                                    "en"
                                ))
                            }
                            className={`px-4 py-1 text-sm font-semibold transition-colors duration-300 ${
                                route().params.language === "en"
                                    ? "bg-lime-600 text-white"
                                    : "bg-white text-lime-600"
                            }`}
                        >
                            EN
                        </button>
                    </div> */}

                    {/* Tombol Login yang Lebih Menarik */}
                    <Link
                        href={route("login")}
                        className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-4 py-2 rounded-xl text-sm md:text-base font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

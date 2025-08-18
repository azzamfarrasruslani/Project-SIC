import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import Icon from "@/Components/Icon/Icon";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SidebarMenu() {
    const { url } = usePage();
    const [openProduk, setOpenProduk] = useState(false);

    const menus = [
        {
            label: "Dashboard",
            routeName: "dashboard",
            icon: "dashboard",
        },
        {
            label: "Komik",
            routeName: "komik.admin",
            icon: "komik",
        },
        {
            label: "Produk",
            icon: "produk",
            dropdown: [
                {
                    label: "Produk",
                    routeName: "produk.admin",
                },
                {
                    label: "Hero Section Produk",
                    routeName: "produk.hero",
                },
            ],
        },
        {
            label: "Kuis",
            routeName: "kuis.admin",
            icon: "kuis",
        },
        {
            label: "Artikel",
            routeName: "artikel.admin",
            icon: "artikel",
        },
    ];

    return (
        <nav className="space-y-2">
            {menus.map((menu, index) => {
                if (!menu.dropdown) {
                    const isActive = route().current(menu.routeName);
                    return (
                        <Link
                            key={index}
                            href={route(menu.routeName)}
                            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-white text-black font-semibold shadow"
                                        : "text-white hover:bg-black hover:text-white"
                                }`}
                        >
                            <Icon name={menu.icon} className="w-5 h-5" />
                            <span>{menu.label}</span>
                        </Link>
                    );
                }

                // Jika ada dropdown (contoh: Produk)
                return (
                    <div key={index}>
                        <button
                            onClick={() => setOpenProduk(!openProduk)}
                            className="flex items-center justify-between w-full px-4 py-2 rounded-md text-white hover:bg-black transition"
                        >
                            <div className="flex items-center gap-3">
                                <Icon name={menu.icon} className="w-5 h-5" />
                                <span>{menu.label}</span>
                            </div>
                            {openProduk ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {openProduk && (
                            <div className="ml-8 mt-1 space-y-1">
                                {menu.dropdown.map((sub, subIndex) => {
                                    const isActive = route().current(sub.routeName);
                                    return (
                                        <Link
                                            key={subIndex}
                                            href={route(sub.routeName)}
                                            className={`block px-3 py-1 rounded-md text-sm transition
                                                ${
                                                    isActive
                                                        ? "bg-white text-black font-semibold shadow"
                                                        : "text-white hover:bg-black hover:text-white"
                                                }`}
                                        >
                                            {sub.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}

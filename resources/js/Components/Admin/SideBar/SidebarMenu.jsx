import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import Icon from "@/Components/Icon/Icon"; // Komponen ikon kamu

export default function SidebarMenu() {
    const { url } = usePage();

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
            routeName: "produk.admin",
            icon: "produk",
        },
        {
            label: "Kuis",
            routeName: "kuis.admin",
            icon: "kuis",
        },
    ];

    return (
        <nav className="space-y-2">
            {menus.map((menu, index) => {
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
            })}
        </nav>
    );
}

import { useState } from "react";
import Header from "@/Components/Admin/Layouts/Header";
import Sidebar from "@/Components/Admin/Layouts/Sidebar";

export default function AuthenticatedLayout({ children }) {
     const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
       <div className="flex">
            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
            <div className="flex-1 ml-0 md:ml-72 transition-all duration-300">
                <Header onMenuClick={handleMenuClick} isSidebarOpen={isSidebarOpen} />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}

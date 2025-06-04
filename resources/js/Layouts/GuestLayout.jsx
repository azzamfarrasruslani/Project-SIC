import ApplicationLogo from "@/Components/Common/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Guest/Layouts/Navbar";
import Footer from "@/Components/Guest/Layouts/Footer";

export default function GuestLayout({ children }) {
    return (
        <>
            {/* <div className="min-h-screen bg-gradient-to-b from-lime-900 via-lime-800 to-lime-700 text-white">
                <Navbar />
                {children}
                <Footer />
            </div> */}

            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
}

// Importing React and useRef from React library
import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
// Componen utama untuk halaman Home
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Guest/Home/HeroSection";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import AboutSection from "@/Components/Guest/Home/AboutSection";
import PeatFunctionsSection from "@/Components/Guest/Home/PeatFunctionsSection";
import PeatJourneySection from "@/Components/Guest/Home/PeatJourneySection";
const Home = () => {
    const bottomRef = useRef(null);
    const peatJourneyRef = useRef(null); // khusus untuk PeatJourneySection

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <GuestLayout>
            <Head title="Beranda" />
            <div className="-mt-[8rem]">
                <HeroSection />
                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <AboutSection />

                <PeatFunctionsSection ref={bottomRef} />

                {/* Gunakan ref yang berbeda */}
                <PeatJourneySection ref={peatJourneyRef} />
            </div>
        </GuestLayout>
    );
};

export default Home;

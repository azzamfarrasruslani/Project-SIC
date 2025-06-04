import React, { useRef } from "react";
import { Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Guest/Komik/HeroSection";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import KomikCard from "@/Components/Guest/Komik/KomikCard";

const Index = () => {
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <GuestLayout>
            <Head title="Komik Edukatif" />
            <div className="-mt-[8.5rem]">
                <HeroSection />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />
            </div>
            <KomikCard ref={bottomRef} />
        </GuestLayout>
    );
};

export default Index;

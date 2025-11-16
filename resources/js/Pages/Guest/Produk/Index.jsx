import React, { useRef } from "react";
import { Head,usePage  } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import Carousel from "@/Components/Guest/Produk/Carousel";
import ProdukCard from "@/Components/Guest/Produk/ProdukCard";

const Index = () => {
    const bottomRef = useRef(null);
    const { props } = usePage();
    const { produk } = props;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <GuestLayout>
            <div className="mt-0">
                <Head title="Produk Gambut" />
                <div ref={bottomRef}></div>
                <ProdukCard produks={produk} />
            </div>
        </GuestLayout>
    );
};


export default Index;

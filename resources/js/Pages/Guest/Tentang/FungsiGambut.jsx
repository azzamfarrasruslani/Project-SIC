import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Guest/Home/ScrollButtons";
import PeatFunctionsSection from "@/Components/Guest/Tentang/PeatFunctionsSection";
import PeatJourneySection from "@/Components/Guest/Tentang/PeatJourneySection";

const FungsiGambut = () => {
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
            <div className="mt-0">
                <Head title="Fungsi Gambut" />

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <div ref={bottomRef} className="mt-10">


                <PeatFunctionsSection ref={bottomRef} />
                 <PeatJourneySection ref={peatJourneyRef} />
                </div>


            </div>
        </GuestLayout>
    );
};

export default FungsiGambut;

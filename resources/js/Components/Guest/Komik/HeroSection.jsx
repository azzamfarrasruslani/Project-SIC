import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const ref = useRef(null);

    // Scroll progress dari section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax effect - gerakkan background lebih lambat saat scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gradient-to-br from-[#fbc7a7] via-[#cce3d5] to-[#6ee7b7] flex items-center justify-center relative overflow-hidden"
        >
            {/* Gambar background parallax */}
            <motion.img
                src="/build/images/komik-hero2.png"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ y }}
            />

            <div className="flex flex-col items-center justify-center relative z-10 px-4 md:px-12 py-24 text-black max-w-6xl w-full ">
                {/* Gambar karakter animasi naik-turun */}
                <motion.img
                    src="/build/images/koleksi-gambi.png"
                    alt="gambi-hero.png"
                    className="mt-28 relative z-10"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

            </div>
        </section>
    );
}

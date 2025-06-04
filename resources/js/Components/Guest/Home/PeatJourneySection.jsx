import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PeatJourneySection = () => {
    const sectionRef = useRef(null);

    // Menggunakan useScroll untuk mendapatkan progres scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"], // Menyesuaikan dengan scroll progress
    });

    // Mengubah progres scroll menjadi pergerakan kapal
    const boatY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    return (
        <section
            ref={sectionRef}
            className="relative h-[300vh] bg-gradient-to-b from-blue-200 to-blue-400 overflow-hidden"
        >
            {/* Background sungai */}
            <img
                src="/build/images/sungai.png"
                alt="Sungai"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/30" />

            {/* Kapal */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-32 md:w-48 z-20"
                style={{
                    top: boatY, // bergerak dari top: 0% ke 80%
                }}
            >
                <img
                    src="/build/images/boat.png"
                    alt="Perahu"
                    className="w-full"
                />
            </motion.div>

            {/* Fakta-fakta */}
            <div className="relative z-10 flex flex-col items-center text-white text-center px-6 space-y-[80vh] pt-[60vh]">
                {[
                    "🌿 Lahan gambut terbentuk dari sisa tumbuhan yang tidak terurai sempurna selama ribuan tahun.",
                    "🔥 Gambut yang mengering sangat mudah terbakar dan kebakarannya sulit dipadamkan.",
                    "🌱 Indonesia memiliki sekitar 36% dari total lahan gambut tropis dunia!",
                ].map((text, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/20 backdrop-blur-md p-6 rounded-xl max-w-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-xl font-semibold">{text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PeatJourneySection;

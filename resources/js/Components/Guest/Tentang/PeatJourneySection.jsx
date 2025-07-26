import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const peatFunctions = [
  {
    text: "🌍 Lahan gambut menyimpan hingga dua kali lebih banyak karbon dibandingkan hutan lainnya.",
    image: "/public/images/Fungsi-Gambut/1.png",
  },
  {
    text: "💧 Lahan gambut berperan seperti spons raksasa, menyerap dan menyimpan air, mencegah banjir dan kekeringan.",
    image: "/public/images/Fungsi-Gambut/2.png",
  },
  {
    text: "🦉 Lahan gambut merupakan habitat penting bagi flora dan fauna langka yang tidak ditemukan di tempat lain.",
    image: "/public/images/Fungsi-Gambut/3.png",
  },
  {
    text: "🔥 Jika dikeringkan, lahan gambut sangat mudah terbakar dan mengeluarkan asap berbahaya bagi kesehatan.",
    image: "/public/images/Fungsi-Gambut/4.png",
  },
  {
    text: "🌱 Indonesia memiliki sekitar 36% dari total lahan gambut tropis dunia, menjadikannya benteng ekologis penting.",
    image: "/public/images/Fungsi-Gambut/5.png",
  },
];

const PeatJourneySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const boatY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] bg-gradient-to-b from-blue-200 to-blue-400 overflow-hidden"
    >
      {/* Background sungai */}
      <img
        src="/public/images/sungai.png"
        alt="Sungai"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/30" />

      {/* Kapal */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-32 md:w-48 z-20"
        style={{ top: boatY }}
      >
        <img src="/public/images/boat.png" alt="Perahu" className="w-full" />
      </motion.div>

      {/* Konten perjalanan */}
      <div className="relative z-10 flex flex-col items-center text-white text-center px-6 space-y-[80vh] pt-[60vh]">
        {peatFunctions.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/20 backdrop-blur-md p-6 rounded-xl max-w-2xl flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* <img
              src={item.image}
              alt={`Ilustrasi fungsi ${idx + 1}`}
              className="w-64 h-40 object-contain"
            /> */}
            <p className="text-xl font-semibold">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PeatJourneySection;

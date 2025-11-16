import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const peatFunctions = [
  {
    title: "Penyimpan Karbon Super",
    stats: "Menyimpan 30x lebih banyak karbon",
    description: "Lahan gambut Indonesia menyimpan 57 gigaton karbon - setara dengan 2x emisi global tahunan! Ini menjadikannya benteng terdepan melawan perubahan iklim.",
    color: "from-emerald-500 to-green-600",
    icon: "🌍",
    details: ["57 gigaton karbon tersimpan", "Setara 2x emisi global", "Penyerap CO2 alami"],
    fact: "1 hektar gambut = 1000 hektar hutan biasa dalam penyimpanan karbon"
  },
  {
    title: "Pengatur Tata Air Alami",
    stats: "Mencegah banjir & kekeringan",
    description: "Seperti spons raksasa, gambut dapat menyerap air 8x beratnya sendiri. Saat hujan, ia menahan air; saat kemarau, melepaskannya perlahan.",
    color: "from-blue-500 to-cyan-600",
    icon: "💧",
    details: ["Menyerap 8x berat sendiri", "Regulator alami", "Sumber air bersih"],
    fact: "Dapat menyimpan air 3x lebih banyak dari tanah mineral"
  },
  {
    title: "Rumah Keanekaragaman Hayati",
    stats: "1.500+ spesies endemik",
    description: "Menjadi habitat bagi orangutan, harimau Sumatera, dan 1.500+ spesies unik yang tidak ditemukan di tempat lain di dunia.",
    color: "from-amber-500 to-orange-600",
    icon: "🐾",
    details: ["Habitat orangutan", "Spesies endemik", "Ekosistem unik"],
    fact: "40% spesies langka Indonesia hidup di ekosistem gambut"
  },
  {
    title: "Sistem Peringatan Alami",
    stats: "Indikator kesehatan lingkungan",
    description: "Kondisi gambut mencerminkan kesehatan lingkungan. Kerusakannya memicu kebakaran yang sulit dipadamkan dan asap berbahaya.",
    color: "from-red-500 to-orange-600",
    icon: "⚠️",
    details: ["Deteksi dini kerusakan", "Kebakaran bawah tanah", "Asap berbahaya"],
    fact: "Kebakaran gambut bisa bertahan berbulan-bulan di bawah permukaan"
  },
  {
    title: "Benteng Ekologis Dunia",
    stats: "36% gambut tropis global",
    description: "Indonesia pemilik 36% lahan gambut tropis dunia, menjadikannya penjaga keseimbangan ekologis global yang vital.",
    color: "from-lime-500 to-green-600",
    icon: "🏆",
    details: ["Pemilik terbesar", "Tanggung jawab global", "Warisan dunia"],
    fact: "Luas gambut Indonesia setara dengan 3x luas Pulau Jawa"
  }
];

const PeatJourneySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Animasi untuk garis progress
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500vh] bg-gradient-to-b from-sky-50 via-emerald-50 to-green-50 overflow-hidden"
    >
      {/* Background dengan efek depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/80 via-blue-50/60 to-emerald-100/70" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 pt-20 pb-40">
        {/* Header Section */}
        <motion.div
          className="text-center mb-32 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Journey Edukasi
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-700 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Jelajahi Keajaiban
            <br />
            <span className="text-emerald-600">Lahan Gambut</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Scroll untuk menemukan 5 fungsi vital lahan gambut Indonesia
            yang menjadikannya harta karun ekologis dunia
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative">
          {peatFunctions.map((item, idx) => {
            const cardProgress = useTransform(
              scrollYProgress,
              [idx * 0.18, idx * 0.18 + 0.12],
              [0, 1]
            );

            const isLeft = idx % 2 === 0;
            const marginClass = isLeft ? "mr-auto ml-6" : "ml-auto mr-6";
            const translateX = isLeft ? -100 : 100;

            return (
              <motion.div
                key={idx}
                className={`relative w-full max-w-2xl ${marginClass} mb-48`}
                style={{
                  opacity: cardProgress,
                  x: useTransform(cardProgress, [0, 1], [translateX, 0]),
                  scale: useTransform(cardProgress, [0, 1], [0.9, 1])
                }}
              >
                {/* Main Card */}
                <motion.div
                  className={`bg-gradient-to-r ${item.color} text-white p-8 rounded-3xl shadow-2xl border-2 border-white/20 backdrop-blur-sm relative overflow-hidden`}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_70%,white,transparent_50%)]" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-yellow-200 text-lg font-semibold">
                          {item.stats}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/95 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                      {item.details.map((detail, detailIdx) => (
                        <motion.div
                          key={detailIdx}
                          className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm border border-white/10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-white font-medium text-sm">
                            {detail}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Fun Fact */}
                    <motion.div
                      className="bg-white/10 rounded-xl p-4 border-l-4 border-yellow-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-yellow-200 text-sm font-semibold">
                        💡 Fakta Menarik: {item.fact}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-32 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-emerald-200 shadow-2xl">
            <motion.div
              className="text-6xl mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌟
            </motion.div>
            <h3 className="text-3xl font-bold text-emerald-800 mb-4">
              Siap Menjadi Penjaga Gambut?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Mari bersama-sama melestarikan warisan alam Indonesia
              untuk generasi mendatang
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Aksi Sekarang
              </motion.button>
              <motion.button
                className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-black/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-3 text-sm font-semibold">
          <span>Scroll untuk menjelajahi</span>
        </div>
      </motion.div>
    </section>
  );
};

export default PeatJourneySection;

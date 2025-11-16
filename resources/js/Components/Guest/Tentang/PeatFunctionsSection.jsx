import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Variabel JSON fungsi lahan gambut
const peatFunctions = [
  {
    id: 1,
    icon: "🌍",
    title: "Penyimpan Karbon Super",
    image: "/images/Fungsi-Gambut/1.png",
    description: "Lahan gambut menyimpan hingga 30x lebih banyak karbon dibandingkan hutan biasa, menjadikannya benteng alami dalam melawan krisis iklim global.",
    stats: "30x lebih banyak karbon",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    id: 2,
    icon: "💧",
    title: "Pengatur Tata Air",
    image: "/images/Fungsi-Gambut/2.png",
    description: "Seperti spons raksasa, gambut menyerap dan melepaskan air secara perlahan, menjaga keseimbangan air tanah dan mencegah banjir serta kekeringan.",
    stats: "Mencegah banjir & kekeringan",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 3,
    icon: "🐦",
    title: "Rumah Keanekaragaman Hayati",
    image: "/images/Fungsi-Gambut/3.png",
    description: "Gambut menjadi rumah bagi 1.500+ spesies langka termasuk orangutan, harimau Sumatera, dan tumbuhan karnivora yang unik.",
    stats: "1.500+ spesies langka",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  }
];

const PeatFunctionsSection = React.forwardRef((props, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section
      ref={ref}
      id="next-section"
      className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-green-50 flex items-center justify-center relative overflow-hidden px-6 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-amber-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-lime-200 shadow-lg mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Fungsi Ekosistem
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-700 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Keajaiban Lahan Gambut
            <motion.span
              className="inline-block ml-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              🌿
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-emerald-800 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Temukan <span className="font-semibold text-green-700">3 fungsi vital</span> lahan gambut
            yang membuatnya menjadi <span className="font-semibold text-amber-600">harta karun ekologis</span> Indonesia
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="max-w-md mx-auto mt-8 bg-white/50 rounded-full h-2 border border-lime-200 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
              variants={progressVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {peatFunctions.map((func, index) => (
            <motion.div
              key={func.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card */}
              <div className={`relative bg-white rounded-3xl shadow-xl border-2 ${func.borderColor} overflow-hidden group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}>

                {/* Header dengan Gradient */}
                <div className={`bg-gradient-to-r ${func.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-3"
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      {func.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{func.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white/90 font-medium text-sm">{func.stats}</p>
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <motion.div
                  className="p-6 flex-1 flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {func.description}
                  </p>

                  {/* Learn More Button */}
                  <motion.button
                    className={`mt-4 w-full py-3 bg-gradient-to-r ${func.color} text-white font-semibold rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Pelajari Detail</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${func.color} rounded-bl-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Floating Number Badge */}
              <motion.div
                className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${func.color} text-white rounded-2xl shadow-lg flex items-center justify-center font-bold text-lg z-20`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-lime-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
              Siap Menjadi Penjaga Gambut? 🛡️
            </h3>
            <p className="text-lg text-emerald-700 mb-6">
              Mari bersama-sama melestarikan harta karun ekologis Indonesia untuk generasi mendatang
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Ayo mulai petualangan konservasi gambut! 🌱")}
              >
                <span>Mulai Aksi Sekarang</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌟
                </motion.span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-700 font-semibold rounded-2xl backdrop-blur-sm hover:bg-emerald-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Materi Edukasi
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default PeatFunctionsSection;

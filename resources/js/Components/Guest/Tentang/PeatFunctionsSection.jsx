import React from "react";
import { motion } from "framer-motion";

// Variabel JSON fungsi lahan gambut
const peatFunctions = [
  {
    id: 1,
    icon: "🌍",
    title: "Menyerap Karbon",
    image: "/public/images/Fungsi-Gambut/1.png",
    description:
      "Lahan gambut menyimpan hingga dua kali lebih banyak karbon dibandingkan hutan lainnya, menjadikannya benteng alami dalam melawan krisis iklim global."
  },
  {
    id: 2,
    icon: "💧",
    title: "Menjaga Air Tanah",
    image: "/public/images/Fungsi-Gambut/2.png",
    description:
      "Seperti spons raksasa, gambut menyerap dan melepaskan air secara perlahan, menjaga keseimbangan air tanah dan mengurangi risiko banjir serta kekeringan."
  },
  {
    id: 3,
    icon: "🐦",
    title: "Habitat Keanekaragaman Hayati",
    image: "/public/images/Fungsi-Gambut/3.png",
    description:
      "Gambut menjadi rumah bagi spesies langka dan endemik, termasuk burung air, tumbuhan karnivora, dan mamalia khas rawa tropis."
  }
];

const PeatFunctionsSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="next-section"
      className="min-h-screen bg-lime-100 text-lime-900 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kenapa Lahan Gambut Sangat Penting? 🌿
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {peatFunctions.map((func) => (
            <div
              key={func.id}
              className="bg-white rounded-xl shadow-md p-6 border border-lime-300 hover:shadow-lg transition"
            >
              <img
                src={func.image}
                alt={func.title}
                className="rounded-xl"
              />
              <div className="mt-3">
                <h3 className="text-xl font-semibold mb-2">
                  {func.icon} {func.title}
                </h3>
                <p>{func.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <button
            className="bg-lime-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-lime-800 transition"
            onClick={() => {
              alert("Petualangan edukasi masih berlanjut! 🌱");
            }}
          >
            Pelajari Lebih Lanjut 💡
          </button>
        </motion.div>
      </div>
    </section>
  );
});

export default PeatFunctionsSection;

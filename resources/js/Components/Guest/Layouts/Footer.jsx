import Icon from "../../Icon/Icon.jsx";
import { motion } from "framer-motion";

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialIconVariants = {
        hover: {
            scale: 1.1,
            y: -3,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <footer className="w-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-lime-400/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 px-6 py-16">
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Logo dan Deskripsi */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start space-y-6"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src="/images/logo/SIC Logo Vertical - White.png"
                                alt="Gambi Logo"
                                className="h-16 w-auto filter drop-shadow-lg"
                            />
                            <div className="bg-gradient-to-r from-amber-400 to-green-400 text-transparent bg-clip-text">
                                <h3 className="text-2xl font-bold">Gambi</h3>
                                <p className="text-sm font-medium">Si Penjaga Gambut</p>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-emerald-100 text-center lg:text-left">
                            Hai! Aku <span className="font-bold text-amber-300">Gambi</span>,
                            si penjaga lahan gambut. Yuk kenali keajaiban ekosistem
                            gambut Indonesia bersama aku! <span className="text-xl">🌿✨</span>
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-emerald-700/50">
                            <div className="text-center">
                                <div className="text-xl font-bold text-amber-300">36%</div>
                                <div className="text-xs text-emerald-200">Gambut Tropis</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-amber-300">30x</div>
                                <div className="text-xs text-emerald-200">Simpan Karbon</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-amber-300">15Jt</div>
                                <div className="text-xs text-emerald-200">Hektar</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigasi Edukasi */}
                    <motion.div
                        className="text-center lg:text-left"
                        variants={itemVariants}
                    >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-green-300 text-transparent bg-clip-text">
                            Navigasi
                        </h2>
                        <ul className="space-y-3 text-lg">
                            {[
                                { name: "Beranda", emoji: "🏠" },
                                { name: "Tentang Gambut", emoji: "🌱" },
                                { name: "Eksplorasi Alam", emoji: "🔍" },
                                { name: "Belajar Bareng", emoji: "📚" },
                                { name: "Kontak", emoji: "📞" }
                            ].map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                                        className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors duration-300 group"
                                    >
                                        <span className="text-lg">{item.emoji}</span>
                                        <span className="group-hover:text-amber-300 transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Kontak */}
                    <motion.div
                        className="text-center lg:text-left"
                        variants={itemVariants}
                    >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-green-300 text-transparent bg-clip-text">
                            Kontak Kami
                        </h2>
                        <div className="space-y-4 text-lg">
                            <motion.div
                                className="flex items-center gap-3 text-emerald-100 group"
                                whileHover={{ x: 5 }}
                            >
                                <span className="text-xl">📧</span>
                                <a
                                    href="mailto:halo@gambi.com"
                                    className="hover:text-amber-300 transition-colors duration-300"
                                >
                                    halo@gambi.com
                                </a>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 text-emerald-100 group"
                                whileHover={{ x: 5 }}
                            >
                                <span className="text-xl">📱</span>
                                <a
                                    href="tel:+628123456789"
                                    className="hover:text-amber-300 transition-colors duration-300"
                                >
                                    +62 812-3456-789
                                </a>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 text-emerald-100 group"
                                whileHover={{ x: 5 }}
                            >
                                <span className="text-xl">📍</span>
                                <span>Lahan Gambut Siak, Riau</span>
                            </motion.div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-6 p-4 bg-emerald-800/30 rounded-xl border border-emerald-600/30">
                            <p className="text-sm text-emerald-200 mb-2">Tetap terupdate!</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email kamu..."
                                    className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-emerald-500/30 text-white placeholder-emerald-300 focus:outline-none focus:border-amber-400"
                                />
                                <motion.button
                                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Gabung
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links & Resources */}
                    <motion.div
                        className="text-center lg:text-left"
                        variants={itemVariants}
                    >
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-green-300 text-transparent bg-clip-text">
                            Resources
                        </h2>
                        <div className="space-y-3 text-lg">
                            <motion.a
                                href="#"
                                className="block text-emerald-100 hover:text-amber-300 transition-colors duration-300 group"
                                whileHover={{ x: 5 }}
                            >
                                📖 E-Book Gambut
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-emerald-100 hover:text-amber-300 transition-colors duration-300 group"
                                whileHover={{ x: 5 }}
                            >
                                🎮 Game Interaktif
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-emerald-100 hover:text-amber-300 transition-colors duration-300 group"
                                whileHover={{ x: 5 }}
                            >
                                📊 Infografis
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-emerald-100 hover:text-amber-300 transition-colors duration-300 group"
                                whileHover={{ x: 5 }}
                            >
                                🎬 Video Edukasi
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Social Media & Copyright */}
                <motion.div
                    className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Social Media */}
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'youtube', 'twitter'].map((platform, index) => (
                                <motion.div
                                    key={platform}
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    className="relative group"
                                >
                                    <Icon
                                        name={platform}
                                        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-800 p-3 text-lg text-white border border-emerald-600/50 shadow-lg cursor-pointer group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300"
                                    />
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center lg:text-right">
                            <p className="text-emerald-200 text-lg">
                                © {new Date().getFullYear()} <span className="font-semibold text-amber-300">GATY</span>.
                                Semua Hak Dilindungi <span className="text-xl">🌱</span>
                            </p>
                            <p className="text-sm text-emerald-300 mt-2">
                                Dibuat dengan ❤️ untuk melestarikan lahan gambut Indonesia
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

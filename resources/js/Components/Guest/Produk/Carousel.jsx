import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Leaf, Star, MapPin } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

const ProductCarousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const { heroImages } = usePage().props;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const updateSwiperNavigation = () => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiper = swiperRef.current.swiper;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.on('slideChange', () => {
                    setActiveIndex(swiper.realIndex);
                });
            }
        };

        setTimeout(updateSwiperNavigation, 500);
    }, []);

    // Sample product data - in real app, this would come from props
    const productData = [
        {
            name: "Madu Hutan Gambut",
            price: "85.000",
            originalPrice: "120.000",
            rating: 4.8,
            location: "Siak, Riau",
            description: "Madu alami dari lebah hutan gambut dengan khasiat kesehatan premium",
            discount: 30
        },
        {
            name: "Kopi Lahan Gambut",
            price: "65.000",
            originalPrice: "80.000",
            rating: 4.6,
            location: "Siak, Riau",
            description: "Kopi arabika organik dari perkebunan lahan gambut yang sustainable",
            discount: 20
        },
        {
            name: "Kerupuk Basah Gambut",
            price: "25.000",
            originalPrice: "35.000",
            rating: 4.9,
            location: "Siak, Riau",
            description: "Kerupuk khas gambut dengan cita rasa unik dan tekstur renyah",
            discount: 15
        }
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
    };

    return (
        <section className="relative bg-gradient-to-br from-emerald-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">

            {/* Carousel Section */}
            <div className="max-w-6xl mx-auto">
                <div className="swiper-container1 visSwiper relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Navigation, Pagination, EffectFade]}
                        effect="fade"
                        speed={800}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className} bg-emerald-500/80 hover:bg-emerald-600 w-3 h-3 rounded-full transition-all duration-300"></span>`;
                            },
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="w-full rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {heroImages.length > 0 ? (
                            heroImages.map((hero, index) => (
                                <SwiperSlide key={hero.id_hero}>
                                    <div className="relative h-[600px] md:h-[500px]">
                                        {/* Background Image */}
                                        <img
                                            src={`/storage/${hero.gambar}`}
                                            alt={`Hero ${hero.id_hero}`}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

                                        {/* Product Info Overlay */}
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="max-w-6xl mx-auto px-8 w-full">
                                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                    {/* Product Details */}
                                                    <motion.div
                                                        className="text-white space-y-6"
                                                        variants={textVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                    >
                                                        {/* Discount Badge */}
                                                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                                                            <span>🔥 TERBAIK</span>
                                                            <span>•</span>
                                                            <span>{productData[index]?.discount || 25}% OFF</span>
                                                        </div>

                                                        {/* Product Name */}
                                                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                                                            {productData[index]?.name || "Produk Lokal Gambut"}
                                                        </h3>

                                                        {/* Description */}
                                                        <p className="text-lg text-white/90 leading-relaxed">
                                                            {productData[index]?.description || "Produk alami berkualitas dari ekosistem lahan gambut Indonesia"}
                                                        </p>

                                                        {/* Rating & Location */}
                                                        <div className="flex items-center gap-6 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                                <span className="font-semibold">{productData[index]?.rating || 4.7}</span>
                                                                <span className="text-white/70">(200+ reviews)</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-5 h-5 text-emerald-300" />
                                                                <span>{productData[index]?.location || "Siak, Riau"}</span>
                                                            </div>
                                                        </div>

                                                        {/* Pricing */}
                                                        <div className="flex items-center gap-4">
                                                            <span className="text-3xl font-bold text-emerald-300">
                                                                Rp {productData[index]?.price || "75.000"}
                                                            </span>
                                                            {productData[index]?.originalPrice && (
                                                                <span className="text-xl text-white/60 line-through">
                                                                    Rp {productData[index]?.originalPrice}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* CTA Buttons */}
                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                            <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                                                                <ShoppingCart className="w-5 h-5" />
                                                                Beli Sekarang
                                                            </button>
                                                            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                                                                Lihat Detail
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <div className="w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl">
                                    <div className="text-center text-white px-6">
                                        <Leaf className="w-16 h-16 mx-auto mb-4" />
                                        <h2 className="text-3xl font-bold mb-4">Produk Lahan Gambut</h2>
                                        <p className="text-xl">Tidak ada gambar produk yang tersedia</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        ref={prevRef}
                        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 transform rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 transition-all duration-300 hover:scale-110 group"
                    >
                        <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        ref={nextRef}
                        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 transform rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 transition-all duration-300 hover:scale-110 group"
                    >
                        <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Slide Counter */}
                    <div className="absolute bottom-6 left-6 z-20 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-emerald-300">{activeIndex + 1}</span>
                        <span className="mx-2">/</span>
                        <span>{heroImages.length || 1}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;

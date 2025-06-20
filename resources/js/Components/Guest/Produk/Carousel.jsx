import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePage } from "@inertiajs/react";

const Carousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { heroImages } = usePage().props;

    useEffect(() => {
        const updateSwiperNavigation = () => {
            const swiperInstance = document.querySelector(".swiper")?.swiper;
            if (swiperInstance) {
                swiperInstance.params.navigation.prevEl = prevRef.current;
                swiperInstance.params.navigation.nextEl = nextRef.current;
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
            }
        };

        setTimeout(updateSwiperNavigation, 500);
    }, []);

    return (
        <section className="main_visual relative h-auto">
            <div className="swiper-container1 visSwiper relative">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    className="w-full h-[500px] max-h-[690px]"
                >
                    {heroImages.length > 0 ? (
                        heroImages.map((hero) => (
                            <SwiperSlide key={hero.id_hero}>
                                <img
                                    src={`/storage/${hero.gambar}`}
                                    alt={`Hero ${hero.id_hero}`}
                                    className="object-cover w-full h-full"
                                />
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">
                                Tidak ada gambar hero.
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>

                <button
                    ref={prevRef}
                    className="bg-opacity-50 absolute top-1/2 left-5 z-10 hidden -translate-y-1/2 transform rounded-full bg-white p-3 text-black lg:block"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    ref={nextRef}
                    className="bg-opacity-50 absolute top-1/2 right-5 z-10 hidden -translate-y-1/2 transform rounded-full bg-white p-3 text-black lg:block"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default Carousel;

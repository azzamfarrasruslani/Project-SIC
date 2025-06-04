import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                    <SwiperSlide className="flex items-center justify-center text-white">
                        <img
                            src="/build/images/Product-Carousel/1.png"
                            alt="gambar"
                            className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center text-white">
                        <img
                            src="/build/images/Product-Carousel/2.png"
                            alt="gambar"
                            className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center text-white">
                        <img
                            src="/build/images/Product-Carousel/3.png"
                            alt="gambar"
                            className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Tombol Navigasi Kustom */}
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

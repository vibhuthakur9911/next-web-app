"use client"; // Important for React hooks in Next.js components

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SliderBanner = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Dynamically calculate header height
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
 
    // Update on resize
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative border-b-[7px] border-solid border-customGreen mb-[2.4px]"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        className="lg:h-[calc(100vh)] sm:h-[500px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center text-center">
            <Image
              src="/img/banner.jpg"
              alt="Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center text-center">
            <Image
              src="/img/banner.jpg"
              alt="Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center text-center">
            <Image
              src="/img/banner.jpg"
              alt="Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;

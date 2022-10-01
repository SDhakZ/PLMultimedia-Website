import React from "react";
import { ServiceCard } from "../../../Services/ServiceCard";
import serviceData from "../../../../data/servicesData";
import { MainHeading } from "../../../../components/MainHeading/MainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../SwiperJS/SwiperOverride.css";

export const HomeServiceSlider = () => {
  return (
    <>
      <MainHeading headingName="Our Services" />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={5}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          680: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        {serviceData.map((data) => {
          return (
            <SwiperSlide>
              <ServiceCard
                key={data.id}
                logo={data.logo}
                title={data.title}
                description={data.description}
                serviceDetails={data}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

/* jsx to create service section of home page */
import React from "react";
import { ServiceCard } from "../../../Services/ServiceCard";
import serviceData from "../../../../data/servicesData";
import { SectionHeading } from "../../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../SwiperJS/SwiperOverride.css";

// function to create structure for service section
export const HomeServiceSlider = () => {
  return (
    <>
      <SectionHeading sectionName="Our Services" />
      {/* using swiper component to create slider in service section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={-20}
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
                loadedFrom="home"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

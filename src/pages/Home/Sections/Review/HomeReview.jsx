import React from "react";
import HomeReviewCSS from "./homeReview.module.css";
import { SectionHeading } from "../../../../components/SectionHeading/SectionHeading";
import HomeReviewData from "../../../../data/homeReviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../SwiperJS/SwiperOverride.css";

function HomeReviewCard(props) {
  return (
    <div className={HomeReviewCSS["home-review-card"]}>
      <div className={HomeReviewCSS["home-review-profile"]}>
        <img
          className={HomeReviewCSS["home-review-profileImg"]}
          src={props.img}
          alt="reviewer"
        />
        <div className={HomeReviewCSS["home-review-ratings"]}>
          <div className={HomeReviewCSS["home-review-profileName"]}>
            {props.name}
          </div>
          <div className={HomeReviewCSS["home-review-rateUs"]}>
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
          </div>
        </div>
      </div>
      <div className={HomeReviewCSS["home-review-container"]}>
        <i className={`${HomeReviewCSS.quote} fa-solid fa-quote-left`} />
        <p className={HomeReviewCSS["home-review-text"]}>{props.comment}</p>
      </div>
    </div>
  );
}

export const HomeReview = () => {
  return (
    <>
      <SectionHeading sectionName="What people think about us" />
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
          850: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {HomeReviewData.map((review) => {
          return (
            <SwiperSlide>
              <HomeReviewCard
                key={review.id}
                img={review.img}
                name={review.name}
                comment={review.comment}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

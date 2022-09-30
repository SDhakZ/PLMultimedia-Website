import React from "react";
import HomeReviewCSS from "./homeReview.module.css";
import MainHeading from "../../../../components/MainHeading/MainHeading";
import HomeReviewData from "../../../../data/homeReviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../SwiperJS/SwiperOverride.css";

function HomeReviewCard(props) {
  return (
    <div className={HomeReviewCSS["Home-comments-card"]}>
      <div className={HomeReviewCSS["Home-comment-profile"]}>
        <img
          className={HomeReviewCSS["profile-Image"]}
          src={props.img}
          alt="reviewer"
        />
        <div className={HomeReviewCSS["ratings"]}>
          <div className={HomeReviewCSS["profile-Name"]}>{props.name}</div>
          <div className={HomeReviewCSS["rate-us"]}>
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
            <i className={`${HomeReviewCSS.star} fa-solid fa-star`} />
          </div>
        </div>
      </div>
      <div className={HomeReviewCSS["review"]}>
        <i className={`${HomeReviewCSS.quote} fa-solid fa-quote-left`} />
        <p className={HomeReviewCSS["review-text"]}>{props.comment}</p>
      </div>
    </div>
  );
}

function HomeReview() {
  return (
    <>
      <MainHeading headingName="What people think about us" />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={5}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
}

export default HomeReview;

import React from "react";
import HomeReviewCSS from "./homeReview.module.css";
import MainHeading from "../../../../components/MainHeading/MainHeading";
import HomeReviewData from "../../../../data/homeReviewData";

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
    <React.Fragment>
      <MainHeading headingName="What people think about us" />
      <div className={HomeReviewCSS["Home-comments-container"]}>
        {HomeReviewData.map((review) => {
          return (
            <HomeReviewCard
              key={review.id}
              img={review.img}
              name={review.name}
              comment={review.comment}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default HomeReview;

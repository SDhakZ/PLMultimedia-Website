/* jsx to create the top section of home page */
import { React } from "react";
import HomeTopCSS from "./homeTop.module.css";
import { TypeAnimation } from "react-type-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// function to create structure for top section
export const HomeTop = () => {
  return (
    <>
      <div className={HomeTopCSS["home-top"]}>
        <div className={HomeTopCSS["home-top-text"]}>
          Let Us
          <TypeAnimation
            sequence={[
              "Solve Your Problems",
              1600,
              "Accelerate Your Growth",
              1300, // Waits 2s
              "Create Your Dreams",
              1600, // Waits 2s,
              "Start our journey together",
              1500, // Waits 2s
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            speed={25}
          />
        </div>

        <Carousel
          autoPlay
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={false}
          interval={6000}
          emulateTouch={true}
        >
          <img
            src={require("../../../../assets/Images/Home-Image/media.jpg")}
            className={HomeTopCSS["home-top-image"]}
            alt="media"
          />
          <img
            src={require("../../../../assets/Images/Home-Image/team.jpg")}
            className={HomeTopCSS["home-top-image"]}
            alt="team"
          />
          <img
            src={require("../../../../assets/Images/Home-Image/hostingGirl.jpg")}
            className={HomeTopCSS["home-top-image"]}
            alt="hosting girl"
          />
          <img
            src={require("../../../../assets/Images/Home-Image/plan.jpg")}
            className={HomeTopCSS["home-top-image"]}
            alt="plan"
          />
        </Carousel>
      </div>
    </>
  );
};

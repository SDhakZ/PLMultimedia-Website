import React, { useEffect } from "react";
import HomeCSS from "./home.module.css";
import { HomeTop } from "./Sections/Top/HomeTop";
import { HomeAboutUs } from "./Sections/AboutUs/HomeAboutUs";
import { HomeReview } from "./Sections/Review/HomeReview";
import { HomeBlogs } from "./Sections/Blog/HomeBlogs";
import { HomeServiceSlider } from "./Sections/Service/HomeServiceSlider";
import { HomePortfolio } from "./Sections/Portfolio/HomePortfolio";
import { GoToTop } from "../../components/GoToTop/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    Aos.init({
      offset: "10",
      Delay: "0",
      duration: "1000",
      easing: "ease-in",
      anchorPlacement: "top",
      once: true,
    });
  }, []);

  return (
    <div className={HomeCSS["home-container"]}>
      <section className={HomeCSS["home-first"]}>
        <HomeTop />
      </section>
      <div className="container">
        <section data-aos="fade" className={HomeCSS["home-aboutUs"]}>
          <HomeAboutUs />
        </section>
        <section data-aos="zoom-in" className={HomeCSS["home-services"]}>
          <HomeServiceSlider />
        </section>
        <section data-aos="zoom-in" className={HomeCSS["home-recentWorks"]}>
          <HomePortfolio />
        </section>
        <section data-aos="zoom-in" className={HomeCSS["home-blogs"]}>
          <HomeBlogs />
        </section>
        <section className={HomeCSS["home-review"]}>
          <HomeReview />
        </section>
      </div>

      <GoToTop />
    </div>
  );
};

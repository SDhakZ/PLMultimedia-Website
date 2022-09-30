import React, { useEffect } from "react";
import HomeCSS from "./home.module.css";
import HomeTop from "./Sections/Top/HomeTop";
import HomeAboutUs from "./Sections/AboutUs/HomeAboutUs";
import HomeReview from "./Sections/Review/HomeReview";
import HomeBlogs from "./Sections/Blog/HomeBlogs";
import { HomeServiceSlider } from "./Sections/Service/HomeServiceSlider";
import HomePortfolio from "./Sections/Portfolio/HomePortfolio";
import GoToTop from "../../components/GoToTop/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    Aos.init({
      offset: "50",
      Delay: "300",
      duration: "1000",
      easing: "ease-in-out",
      anchorPlacement: "top",
      once: true,
    });
  }, []);

  return (
    <div className={HomeCSS["Home-Container"]}>
      <section className={HomeCSS["first"]}>
        <HomeTop />
      </section>
      <section data-aos="fade" className={HomeCSS["Home-aboutUs"]}>
        <HomeAboutUs />
      </section>
      <section data-aos="zoom-in" className={HomeCSS["Home-services"]}>
        <HomeServiceSlider />
      </section>
      <section data-aos="zoom-in" className={HomeCSS["Home-recent-works"]}>
        <HomePortfolio />
      </section>
      <section data-aos="zoom-in" className={HomeCSS["Home-blogs"]}>
        <HomeBlogs />
      </section>
      <section className={HomeCSS["Home-what-ppl-think"]}></section>
      <GoToTop />
    </div>
  );
};

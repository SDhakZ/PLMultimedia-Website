import React, { useEffect } from "react";
import HomeCSS from "../CSSmodules/home.module.css";
import HomeTop from "../HomeComponents/homeTop";
import HomeAboutUs from "../HomeComponents/homeAboutUs";
import HomeReview from "../HomeComponents/homeReview";
import { HomeBlogs } from "../HomeComponents/homeBlogs";
import GoToTop from "../GoToTop";
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
      <section
        data-aos="zoom-in"
        className={HomeCSS["Home-services"]}
      ></section>
      <section className={HomeCSS["Home-recent-works"]}></section>
      <section className={HomeCSS["Home-blogs"]}>
        <HomeBlogs />
      </section>
      <section className={HomeCSS["Home-what-ppl-think"]}>
        <HomeReview />
      </section>
      <GoToTop />
    </div>
  );
};

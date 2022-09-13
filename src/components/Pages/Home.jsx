import React from "react";
import HomeCSS from "../CSSmodules/home.module.css";
import HomeTop from "../HomeComponents/homeTop";
import HomeAboutUs from "../HomeComponents/homeAboutUs";
export const Home = () => {
  return (
    <div className={HomeCSS["Home-Container"]}>
      <section className={HomeCSS["first"]}>
        <HomeTop />
      </section>
      <section className={HomeCSS["Home-aboutUs"]}>
        <HomeAboutUs />
      </section>
      <section className={HomeCSS["Home-services"]}></section>
      <section className={HomeCSS["Home-recent-works"]}></section>
      <section className={HomeCSS["Home-blogs"]}></section>
      <section className={HomeCSS["Home-what-ppl-think"]}></section>
    </div>
  );
};

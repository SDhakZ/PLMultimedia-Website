/* button that appears when you start scrolling and on click scrolls you to the top of the page */
import { useState, useEffect } from "react";
import goToTopCSS from "./goToTop.module.css";

// function to show the button after you scroll down to 600
export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // on click scroll to the top of the page
  return (
    <div>
      {isVisible ? (
        <button
          style={{ zIndex: 2 }}
          className={goToTopCSS["goToTop"]}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default GoToTop;

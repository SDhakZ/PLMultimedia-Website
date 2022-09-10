import React from "react";
import LoadingPageCSS from "../components/CSSmodules/loadingPage.module.css";

function LoadingPage() {
  return (
    <div className={LoadingPageCSS["LoadingPage-container"]}>
      {/* <div className={LoadingPageCSS["LoadingPage-outer"]}>
                <div className={LoadingPageCSS["LoadingPage-inner"]}/>
            </div> */}
    </div>
  );
}

export default LoadingPage;

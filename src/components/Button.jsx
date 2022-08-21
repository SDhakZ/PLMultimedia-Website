import React from "react";
import ButtonCSS from "../components/CSSmodules/Buttons.module.css";
function Button(props) {
  return (
    <React.Fragment>
      <button className={ButtonCSS[props.class]} onClick={props.click}>
        {props.btnMessage}
      </button>
    </React.Fragment>
  );
}
export default Button;

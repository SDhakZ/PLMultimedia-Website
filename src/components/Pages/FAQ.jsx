import React from "react";
import { FAQcard, FAQHeading, StillHaveQuestion } from "../FAQcard";
import FAQdata from "../../Datas/FAQData";
import FAQCSS from "../CSSmodules/FAQCSS.module.css";
export const FAQpage = () => {
  return (
    <div className={FAQCSS["FAQ-container"]}>
      <FAQHeading />
      {FAQdata.map(({ id, question, answer }) => {
        return <FAQcard key={id} question={question} answer={answer} />;
      })}

      <StillHaveQuestion />
    </div>
  );
};

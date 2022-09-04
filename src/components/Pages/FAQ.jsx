import React from "react";
import { FAQcard, FAQHeading, StillHaveQuestion } from "../FAQcard";
import faqData from "../../Datas/faqData";
import FAQCSS from "../CSSmodules/FAQ.module.css";
export const FAQpage = () => {
  return (
    <div className={FAQCSS["FAQ-container"]}>
      <FAQHeading />
      {faqData.map(({ id, question, answer }) => {
        return <FAQcard key={id} question={question} answer={answer} />;
      })}

      <StillHaveQuestion />
    </div>
  );
};

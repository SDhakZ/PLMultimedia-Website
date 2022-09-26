import React from "react";
import { FAQcard, FAQHeading, StillHaveQuestion } from "./FAQcard";
import faqData from "../../../datas/faqData";
import FAQCSS from "./FAQ.module.css";
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

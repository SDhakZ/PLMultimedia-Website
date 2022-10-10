import React from "react";
import { FAQcard, StillHaveQuestion } from "./FAQcard";
import faqData from "../../../data/faqData";
import FAQCSS from "./FAQ.module.css";
import { MainHeading } from "../../../components/MainHeading/MainHeading";

export const FAQpage = () => {
  return (
    <div className={FAQCSS["FAQ"]}>
      <MainHeading headingName="Frequently Asked Questions" />
      {faqData.map(({ id, question, answer }) => {
        return <FAQcard key={id} question={question} answer={answer} />;
      })}

      <StillHaveQuestion />
    </div>
  );
};

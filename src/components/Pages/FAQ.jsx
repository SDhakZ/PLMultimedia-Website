import React from "react";
import { FAQcard, FAQHeading, StillHaveQuestion } from "../FAQcard";
import FAQdata from "../../Datas/FAQData";
export const FAQpage = () => {
  return (
    <div>
      <FAQHeading />
      {FAQdata.map(({ id, question, answer }) => {
        return <FAQcard key={id} question={question} answer={answer} />;
      })}
      ;
      <StillHaveQuestion />
    </div>
  );
};

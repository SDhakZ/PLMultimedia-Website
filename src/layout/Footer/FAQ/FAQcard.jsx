import React, { useState } from "react";
import FAQCSS from "./FAQ.module.css";
import { Link } from "react-router-dom";

export function FAQcard({ question, answer }) {
  const [expanded, setExpand] = useState(false);

  return (
    <button className={FAQCSS["FAQ-card"]} onClick={() => setExpand(!expanded)}>
      <div
        className={
          expanded
            ? `${FAQCSS["FAQ-faqQuestion"]} ${FAQCSS["FAQ-active"]}`
            : FAQCSS["FAQ-faqQuestion"]
        }
      >
        {question}{" "}
        {expanded ? (
          <div className={FAQCSS["FAQ-minus"]}>-</div>
        ) : (
          <div className={FAQCSS["FAQ-plus"]}>+</div>
        )}
      </div>
      {expanded ? (
        <div className={FAQCSS["FAQ-faqAnswer"]}>{answer}</div>
      ) : null}
    </button>
  );
}

export function StillHaveQuestion() {
  return (
    <div className={FAQCSS["FAQ-moreQuestionsContainer"]}>
      <h1 className={FAQCSS["FAQ-stillHaveQuestion"]}>Still Have Question?</h1>
      <p className={FAQCSS["FAQ-faqContact"]}>
        If you cannot find the answer for your question in the FAQ page you can
        always contact us through our <Link to="/contact">Contact Us</Link>{" "}
        page.
      </p>
    </div>
  );
}

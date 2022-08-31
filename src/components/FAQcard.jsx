import React, { useState } from "react";
import FAQCSS from "./CSSmodules/FAQCSS.module.css";
import { Link } from "react-router-dom";

export function FAQcard({ question, answer }) {
  const [expanded, setExpand] = useState(false);

  return (
    <button className={FAQCSS.faqCard} onClick={() => setExpand(!expanded)}>
      <div className={FAQCSS.faqQuestion}>
        {question}{" "}
        {expanded ? (
          <div className={FAQCSS.mark}>-</div>
        ) : (
          <div className={FAQCSS.mark}>+</div>
        )}
      </div>
      {expanded ? <div className={FAQCSS.faqAnswer}>{answer}</div> : null}
    </button>
  );
}

export function StillHaveQuestion() {
  return (
    <div>
      <h1 className={FAQCSS.stillHaveQuestion}>Still Have Question?</h1>
      <p className={FAQCSS.faqContact}>
        If you cannot find the answer for your question in the FAQ page you can
        always contact us through our <Link to="/contact">Contact Us</Link>{" "}
        page.
      </p>
    </div>
  );
}

export function FAQHeading() {
  return <h1 className={FAQCSS.faqHeading}>Frequently Asked Questions</h1>;
}

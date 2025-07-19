import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file for styling

const FAQ = ({ faqs }) => {
  // State to manage which FAQ item is currently open on mobile view
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the answer visibility for a given index
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question-wrapper"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="faq-question">{faq.question}</h2>
              {/* Plus/Minus icon for mobile view */}
              <span className="faq-toggle-icon mobile-only">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {/* Answer section - visibility controlled by CSS and React state */}
            <div
              className={`faq-answer-wrapper ${
                openIndex === index ? "open" : ""
              }`}
            >
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

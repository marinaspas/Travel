import React, { useState } from "react";
import "../../App.css";
import FaqItem from "../FaqItem";
import "./Faq.css";

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: "How can you afford to travel all the time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Pharetra vel turpis nunc eget lorem dolor sed viverra.",
      open: true,
    },
    {
      question: "How much does all this travel cost?",
      answer:
        "I have spent over $20,000, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Volutpat sed cras ornare arcu dui vivamus arcu. Massa massa ultricies mi quis hendrerit dolor magna eget est. Nibh venenatis cras sed felis eget velit. ",
      open: false,
    },
    {
      question: "What things should I prepare for before a trip?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque. Volutpat sed cras ornare arcu. Tempor orci dapibus ultrices in iaculis nunc sed. Vitae purus faucibus ornare suspendisse sed. Neque egestas congue quisque egestas diam in. Quam quisque id diam vel quam elementum pulvinar etiam. Nec tincidunt praesent semper feugiat nibh sed.",
      open: false,
    },
    {
      question: "What travel insurance do you use?",
      answer:
        "I don’t have a travel-specific insurance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.",
      open: false,
    },
    {
      question: "I am thinking of taking a solo trip. Where should I begin?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Libero justo laoreet sit amet. Ac ut consequat semper viverra nam libero. Nunc consequat interdum varius sit amet mattis vulputate enim. Pulvinar proin gravida hendrerit lectus a.",
      open: false,
    },
    {
      question:
        "When's the best time to book flights and where do you find good deals?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus. Eu non diam phasellus vestibulum lorem sed risus. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nibh mauris cursus mattis molestie a. Sit amet tellus cras adipiscing enim eu turpis. In cursus turpis massa tincidunt dui. Massa sapien faucibus et molestie ac.",
      open: false,
    },
    {
      question: "How do you stay fit while traveling?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Facilisi nullam vehicula ipsum a arcu cursus vitae. Interdum velit euismod in pellentesque massa placerat duis. At tellus at urna condimentum. Blandit turpis cursus in hac habitasse. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Suspendisse sed nisi lacus sed viverra tellus.",
      open: false,
    },
    {
      question: "How do you prepare for a really long flight?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nunc id cursus metus aliquam eleifend mi. Urna nunc id cursus metus aliquam eleifend mi. Feugiat in ante metus dictum at tempor. Et magnis dis parturient montes. Facilisis magna etiam tempor orci eu lobortis.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="page-container">
      <div className="page-hero faq-hero">
        <h1>FAQ</h1>
      </div>
      <div className="faq-wrapper">
        <div className="faqs">
          {faqs.map((faq, i) => {
            return (
              <FaqItem faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;

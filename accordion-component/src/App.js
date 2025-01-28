import "./style.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [showingIndex, setShowingIndex] = useState(null);

  function handleClick(index) {
    setShowingIndex(index === showingIndex ? null : index);
  }

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          faq={faq}
          index={index}
          onClick={() => handleClick(index)}
          showText={showingIndex === index}
        >
          {faq.text}
        </Accordion>
      ))}
    </div>
  );
}

function Accordion({ faq, index, onClick, showText }) {
  // const [open, setOpen] = useState(false);

  // function toggleOpen() {
  //   setOpen(!open);
  // }
  return (
    <div className={`item ${showText ? "open" : ""}`} onClick={onClick}>
      <span className="number">
        {index < 9 ? "0" + (index + 1) : index + 1}
      </span>
      <h3 className="title">{faq.title}</h3>
      <span className="icon">{showText ? "-" : "+"}</span>
      {showText ? <div className="content-box">{faq.text}</div> : null}
      {/* {showText && <div className="content-box">{children}</div>} */}
    </div>
  );
}

import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return <FlashCards questions={questions} />;
}

function FlashCards({ questions }) {
  const [showingIndex, setShowingIndex] = useState(null);

  const handleClick = (index) => {
    setShowingIndex(index);
  };
  return (
    <div className="flashcards">
      {questions.map((question, index) => (
        <FlashCard
          key={question.id}
          question={question}
          handleClick={() => handleClick(index)}
          showAnswer={showingIndex === index}
        />
      ))}
    </div>
  );
}

function FlashCard({ question, handleClick, showAnswer }) {
  return (
    <div
      key={question.id}
      onClick={handleClick}
      className={showAnswer ? "selected" : ""}
    >
      {showAnswer ? question.answer : question.question}
    </div>
  );
}

export default App;

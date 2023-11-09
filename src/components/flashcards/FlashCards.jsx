import "./Flashcard.scss";
import { useEffect, useState } from "react";
import { Question } from "./Question.jsx";
import { Answer } from "./Answer.jsx";

function FlashCards({ flashcards }) {
  const [isReveal, setIsReveal] = useState(false);
  const [id, setId] = useState(0);

  function nextQuestion(event) {
    event.stopPropagation();
    if (flashcards.length > id + 1) {
      setIsReveal(false);
      setTimeout(() => {
        setId(id + 1);
      }, 300);
    }
  }

  return (
    <>
      <div
        className={`flip-card ${
          isReveal ? "flip-card-reveal" : "flip-card-hide"
        }`}
        onClick={() => setIsReveal(true)}
      >
        <div className="flip-card-inner">
          <Question question={flashcards[id].question} />
          <Answer answer={flashcards[id].answer} nextQuestion={nextQuestion} />
        </div>
      </div>
    </>
  );
}

export default FlashCards;

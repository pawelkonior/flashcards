export function Answer({ answer, nextQuestion }) {
  return (
    <div className="flip-card-back">
      <p>{answer}</p>
      <div>
        <button onClick={nextQuestion}>Easy</button>
        <button onClick={nextQuestion}>Good</button>
        <button onClick={nextQuestion}>Again</button>
      </div>
    </div>
  );
}

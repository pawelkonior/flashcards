import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeckAndFlashcards } from "/src/api/api.js";
import FlashCards from "../flashcards/FlashCards.jsx";

function LearningWrapper() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getDeckAndFlashcards(deckId, controller.signal).then(
      ([deckResponse, flashcardsResponse]) => {
        setDeck(deckResponse);
        setFlashcards(flashcardsResponse);
      },
    );

    return () => {
      controller.abort();
    };
  }, []);

  if (!deck) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Learning: {deckId} {deck.name} {deck.description}
      {flashcards.length ? (
        <FlashCards flashcards={flashcards} />
      ) : (
        <p>Flashcards not found</p>
      )}
    </div>
  );
}

export default LearningWrapper;

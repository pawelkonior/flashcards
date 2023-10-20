import { useEffect, useState } from "react";
import { getDecks } from "../../api/api.js";

function Decks() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getDecks(controller.signal).then(setDecks);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Decks</h1>
      {decks.map(({ id, name, cards }) => (
        <div
          key={id}
          style={{
            border: "1px solid darkgrey",
            borderRadius: 4,
            marginBottom: 10,
            padding: 10,
          }}
        >
          <h2>
            {name}, <span>{cards}</span>
          </h2>
          <button>Learn Now</button>
        </div>
      ))}
    </div>
  );
}

export default Decks;

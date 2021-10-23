import { useState } from "react";

const Card = ({ card, index }) => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [isMarked, setIsMarked] = useState(false);

  return (
    <div
      className={`card ${flippedCard === index ? "flipped" : ""}`}
      key={card}
    >
      <div>{card}</div>
      <div>{flippedCard === index ? "up" : "down"}</div>
      <button onClick={() => setFlippedCard(index)}>Flip</button>
      <button onClick={() => setIsMarked(!isMarked)}>
        {isMarked ? "Unmark" : "Mark"}
      </button>
    </div>
  );
};

export default Card;

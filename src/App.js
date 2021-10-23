import "./styles.css";
import { cards } from "./utils";
import { useState } from "react";
import Card from "./Card";

export default function App() {
  const [view, setView] = useState("grid");
  const [layout, setLayout] = useState(cards);

  const switchLayout = () => {
    if (view === "list") {
      setView("grid");
    } else {
      setView("list");
    }
  };

  function getRandomCard() {
    return Math.floor(Math.random() * 52);
  }

  function swapCards() {
    const card1 = getRandomCard();
    const card2 = getRandomCard();

    const newLayout = [...layout];
    const b = layout[card1];
    newLayout[card1] = layout[card2];
    newLayout[card2] = b;
    setLayout(newLayout);
  }

  return (
    <div className="App">
      <button onClick={switchLayout}>Switch layout</button>
      <button onClick={swapCards}>Swap cards</button>
      <div className={view}>
        {layout.map((card, index) => (
          <Card card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

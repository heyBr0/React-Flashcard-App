import { useState } from "react";

function Viewer({ cards, switchMode }) {
  const [current, setCurrent] = useState(0);
  const [frontSide, setFrontSide] = useState(true);

  const showNext = () => {
    const next = (current + 1) % cards.length;
    setCurrent(next);
    setFrontSide(true);
  };

  const flipCard = () => {
    setFrontSide((frontSide) => !frontSide);
  };

  if (cards.length > 0) {
    return (
      <div className="container">
        <h2>Card Viewer</h2>
        <div className="card" onClick={flipCard}>
          <div>{frontSide ? cards[current].front : cards[current].back}</div>
        </div>
        <button onClick={showNext}>Next Card</button>
        <hr />
        <button onClick={switchMode}>Switch to Editor</button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2>Error</h2>
        <div className="card">
          <div>
            <p>You have to create a new card first.</p>
            <p>Go back to the Editor and create a card.</p>
          </div>
        </div>
        <hr />
        <button onClick={switchMode}>Switch to Editor</button>
      </div>
    );
  }
}

export default Viewer;

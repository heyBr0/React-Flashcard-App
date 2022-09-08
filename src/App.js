import React, { useState } from "react";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";
import "./App.css";

function App() {
  const [editor, setEditor] = useState(true);
  const [cards, setCards] = useState([]);

  const switchMode = () => {
    setEditor((editor) => !editor);
  };

  const addCard = (card) => {
    setCards((cards) => [...cards, card]);
  };

  const removeCard = (index) => {
    const newCards = cards.filter((card, i) => i !== index);
    // const cardsCopy = [...cards];
    // const newCards = cardsCopy.splice(index, 1);
    // setCards(newCards);
    setCards(newCards);
  };

  if (editor) {
    return (
      <Editor
        cards={cards}
        addCard={addCard}
        removeCard={removeCard}
        switchMode={switchMode}
      />
    );
  } else {
    return <Viewer cards={cards} switchMode={switchMode} />;
  }
}

export default App;

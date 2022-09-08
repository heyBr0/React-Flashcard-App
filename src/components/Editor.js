import { useState } from "react";

function Editor({ cards, switchMode, addCard, removeCard }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "front") {
      setFront(e.target.value);
    } else {
      setBack(e.target.value);
    }
  };

  const createCard = () => {
    addCard({ front: front, back: back });
    setFront("");
    setBack("");
  };

  const rows = cards.map((card, i) => (
    <tr key={i}>
      <td>{card.front}</td>
      <td>{card.back}</td>
      <td>
        <button onClick={() => removeCard(i)}>Delete Card</button>
      </td>
    </tr>
  ));

  return (
    <div className="container" id="editor">
      <h2>Card Editor</h2>
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div>
        <input
          onChange={handleChange}
          name="front"
          value={front}
          placeholder="Front of Card"
        />
        <input
          onChange={handleChange}
          name="back"
          value={back}
          placeholder="Back of Card"
        />
        <button onClick={createCard}>Add Card</button>
      </div>
      <hr />
      <button onClick={switchMode}>Switch to Viewer</button>
    </div>
  );
}

export default Editor;

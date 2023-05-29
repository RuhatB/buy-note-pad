import React, { useState } from "react";

function App() {
  const [inputText, setInputtext] = useState("");
  const [items, setItems] = useState([]);

  function itsChange(event) {
    const newValue = event.target.value;
    setInputtext(newValue);
  }

  function write() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputtext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>to-buy list</h1>
      </div>
      <div className="form">
        <input onChange={itsChange} type="text" value={inputText} />
        <button onClick={write}>
          <span>write🖊️</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((buyItem) => (
            <li> {buyItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

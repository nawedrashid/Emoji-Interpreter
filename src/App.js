import React, { useState } from "react";
import "./styles.css";

const emojidictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "❤️": "Love",
  "😑": "Annoyance",
  "🔥": "Fire",
  "👍": "Thumabs Up",
  "👽": "Alien",
  "🤣": "ROFL",
  "😉": "Winking",
  "🤩": "Excited"
};

var emojis = Object.keys(emojidictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji) {
      setMeaning(emojidictionary[inputEmoji]);
    } else {
      setMeaning("This Emoji is not in our database");
    }
  }

  function clickHandler(inputEmoji) {
    setMeaning(emojidictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <div className="container box">
      <input onChange={changeHandler}
        value={emoji}
        placeholder={"Search your Emoji"}></input>
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {
      emojis.map((emoji) => (
          <span
            onClick={() => clickHandler(emoji)}>
            {emoji}{" "}
          </span>
        ))
      }
      </div>
    </div>
  );
}

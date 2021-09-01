import React, { useState } from "react";
import styled from "./Home.module.css";
const Home = () => {
  const [changeBtnMode, setChangeBtnMode] = useState({
    background: "black",
    color: "white",
  });
  const [changeDarkMode, setChangeDarkMode] = useState("Enable Light Mode");
  const changeMode = () => {
    if (changeBtnMode.color === "white") {
      setChangeBtnMode({
        background: "white",
        color: "black",
      });
      setChangeDarkMode("Enable Dark Mode");
    } else {
      setChangeBtnMode({
        background: "black",
        color: "white",
      });
      setChangeDarkMode("Enable Light Mode");
    }
  };
  const [text, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  const toUppercaseFun = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const toLowerCaceFun = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const allCelear = () => {
    setText("");
  };
  const hanndleCopy = () => {
    let textBox = document.getElementById("box");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
  };
  const extraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className={styled.container} style={changeBtnMode}>
        <div className={styled.header} style={changeBtnMode}>
          <h3>Text Utils</h3>
        </div>
        <div className={styled.main} style={changeBtnMode}>
          <h2>Analysis your text</h2>
          <textarea
            name="textArea"
            cols="70"
            rows="10"
            id="box"
            value={text}
            onChange={changeText}
          ></textarea>
          <div className={styled.btns} style={changeBtnMode}>
            <button onClick={toUppercaseFun} style={changeBtnMode}>
              Convert to UpperCase
            </button>
            <button onClick={toLowerCaceFun} style={changeBtnMode}>
              Convert to LowerCase
            </button>
            <button onClick={allCelear} style={changeBtnMode}>
              Clear All
            </button>
            <button onClick={extraSpaces} style={changeBtnMode}>
              Remove Extra Spaces{" "}
            </button>
            <button onClick={hanndleCopy} style={changeBtnMode}>
              Copy Text
            </button>
            <button onClick={changeMode} style={changeBtnMode}>
              {changeDarkMode}
            </button>
          </div>
        </div>
        <div className={styled.summery} style={changeBtnMode}>
          <h2>Text Utils Summery Here</h2>
          <p>
            {text.split(" ").length - 1} word and {text.length} cahracters
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

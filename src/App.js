import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TextBox from "./components/TextBox";
import { useState } from "react";


const App = () => {

  const [inputLanguage, setInputLanguage] = useState("English(en)");
  const [outputLanguage, setOutputLanguage] = useState("Japanese(ja)");
  const [showModal, setShowModal] = useState(null);

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }

  console.log("showModal", showModal);

  return (
    <div className="app">
      <TextBox
        selectedLanguage={inputLanguage} 
        style="input"
        setShowModal={setShowModal}
      />
      <div className="arrow-container" onClick={handleClick}>
        <Arrows />
      </div>
      <TextBox
        selectedLanguage={outputLanguage}
        style="output"
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;

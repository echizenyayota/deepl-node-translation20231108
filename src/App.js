import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TextBox from "./components/TextBox";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [inputLanguage, setInputLanguage] = useState("English(en)");
  const [outputLanguage, setOutputLanguage] = useState("Japanese(ja)");
  const [showModal, setShowModal] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const getLanguages = async() => {
    const response = await axios.get("http://localhost:8000/languages");
    setLanguages(response.data);
  }

  console.log("languages", languages);

  useEffect(() => {
    getLanguages();
  }, []);

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }

  console.log("showModal", showModal);

  return (
    <div className="app">
      {!showModal && <>
        <TextBox
          selectedLanguage={inputLanguage} 
          style="input"
          setShowModal={setShowModal}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslatedText={setTranslatedText}
        />
        <div className="arrow-container" onClick={handleClick}>
          <Arrows />
        </div>
        <TextBox
          selectedLanguage={outputLanguage}
          style="output"
          setShowModal={setShowModal}
          translatedText={translatedText}
        />
        <div className="button-container">
          <Button />
        </div>
      </>}
      {showModal && <Modal 
        setShowModal={setShowModal}
        languages={languages}
        chosenLanguage={showModal === "input" ? inputLanguage : outputLanguage}
        setChosenLanguage={showModal === "input" ? setInputLanguage : setOutputLanguage}
      />}
    </div>
  );
}

export default App;

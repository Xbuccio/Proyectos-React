import { useContext } from "react";
import { LanguageIcon } from "../icons/icons";
import LanguageContext from "./LanguageContext";
import "../styles/LanguageButton.css";

function LanguageButton() {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguage = () => {
    changeLanguage();
  };

  return (
    <div className="container-language">
      <button
        className="language-button"
        aria-pressed={language}
        onClick={handleLanguage}
      >
        <LanguageIcon className="language"/>
        <p>{language ? "ES" : "US"}</p>
      </button>
    </div>
  );
}

export default LanguageButton;

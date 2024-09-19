import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characterPool = "";
    if (includeUppercase) characterPool += upperCaseChars;
    if (includeLowercase) characterPool += lowerCaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <section>
      <div className="container">
        <form>
          <h2>Password Generator</h2>
          <div className="result">
            <input
              type="text"
              id="result"
              value={password}
              placeholder="min 10 chars"
              readOnly
            />
            <button
              className="clipboard"
              onClick={() => {
                navigator.clipboard.writeText(password);
                alert("Password copied to clipboard!");
              }}
            >
              {" "}
              Copy Password
            </button>
          </div>

          <div className="field">
            <label>Length</label>
            <input
              type="number"
              id="length"
              min={10}
              max={20}
              name="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Capital</label>
            <input
              type="checkbox"
              id="capital"
              name="capital"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
          </div>

          <div className="field">
            <label>Small</label>
            <input
              type="checkbox"
              id="small"
              name="small"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
          </div>

          <div className="field">
            <label>Number</label>
            <input
              type="checkbox"
              id="number"
              name="number"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>

          <div className="field">
            <label>Symbol</label>
            <input
              type="checkbox"
              id="symbol"
              name="symbol"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault(); // Empêche le rechargement de la page
              generatePassword(); // Génére le mot de passe
            }}
          >
            Generate Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default PasswordGenerator;

import { useState } from "react";
import { generator } from "../classes/Generator";
import Result from '../components/Result';

function App() {

  const [lang, setLang] = useState(1);
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);
  const [result, setResult] = useState('');

  const languageMap = {
    1: generator.latim,
    2: generator.greek,
    3: generator.hebraic,
    4: generator.arabic,
    5: generator.coptic,
    6: generator.cyrilic
  };

  const generate = (e) => {
     e.preventDefault();

     setResult(languageMap[lang]);
  }

  const closeResultModal = () => {
    setResult('');
  }

  return (
    <main className="main">
       <h1 className="main__title">Lorem Ipsum Generator</h1>

       <form onSubmit={generate} className="main__form">
        <select 
          value={lang} 
          onChange={(e)=>setLang(e.target.value)} 
          className="main__form-input"
        >
          <option value="1" className="main__form-input">Latim</option>
          <option value="2" className="main__form-input">Greek</option>
          <option value="3" className="main__form-input">Hebraic</option>
          <option value="4" className="main__form-input">Arabic</option>
          <option value="5" className="main__form-input">Coptic</option>
          <option value="6" className="main__form-input">Cyrilic</option>
        </select>

        <div className="main__form-input-box">
          <label className="main__form-label">Number Of Paragraphs</label>
          <input
            type="number"
            value={numberOfParagraphs}
            onChange={(e)=>setNumberOfParagraphs(e.target.value)}
            className="main__form-input"
          />
        </div>

        <button 
          type="submit"
          className="main__form-button"
        >Generate</button>
       </form>

       <Result result={result} onClose={closeResultModal}/>
    </main>
  )
}

export default App;
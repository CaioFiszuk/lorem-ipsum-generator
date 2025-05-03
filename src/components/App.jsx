import { useState } from "react";
import { generator } from "../classes/Generator";
import Result from '../components/Result';

function App() {

  const [lang, setLang] = useState(1);
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
    <div>
       <h1>Lorem Ipsum Generator</h1>

       <form onSubmit={generate}>
        <select value={lang} onChange={(e)=>setLang(e.target.value)}>
          <option value="1">Latim</option>
          <option value="2">Greek</option>
          <option value="3">Hebraic</option>
          <option value="4">Arabic</option>
          <option value="5">Coptic</option>
          <option value="6">Cyrilic</option>
        </select>

        <input type="number" placeholder="Number of paragraphs"/>

        <input type="number" placeholder="Number of words by paragraphs" />

        <button type="submit">Generate</button>
       </form>

       <Result result={result} onClose={closeResultModal}/>
    </div>
  )
}

export default App;
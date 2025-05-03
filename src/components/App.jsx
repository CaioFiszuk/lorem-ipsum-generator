
function App() {

  return (
    <div>
       <h1>Lorem Ipsum Generator</h1>

       <form>
        <select>
          <option value="">Latim</option>
          <option value="">Greek</option>
          <option value="">Hebraic</option>
          <option value="">Arabic</option>
          <option value="">Coptic</option>
          <option value="">Cyrilic</option>
        </select>

        <input type="number" placeholder="Number of paragraphs"/>

        <input type="number" placeholder="Number of words by paragraphs" />

        <button>Generate</button>
       </form>
    </div>
  )
}

export default App;

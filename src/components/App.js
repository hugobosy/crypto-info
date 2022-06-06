import './App.css';
import {Data} from "../data/Data";

function App() {

  const data = Data();


  return (
    <div className="App">
      <select>
        {
          data
              .map(pair => <option value={pair.symbol} key={pair.symbol}>{pair.symbol}</option>)
        }
      </select>
    </div>
  );
}

export default App;

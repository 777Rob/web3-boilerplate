import logo from "./logo.svg";
import "./App.css";
import { Star } from "assets/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Star size="50" />
          Learn React
        </a>

        <button className="btn-primary">Test</button>
      </header>
    </div>
  );
}

export default App;

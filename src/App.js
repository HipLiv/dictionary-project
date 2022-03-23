import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="Search Logo" />
          <h1>Dictionary</h1>
          <em>
            <h4>Search for a Word</h4>
          </em>
        </header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">Coded by Olivia</footer>
        </small>
      </div>
    </div>
  );
}

export default App;

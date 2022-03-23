import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="Search Logo" />
        <a href="#" className="btn btn-primary shadow">
          Serach
        </a>
      </header>
    </div>
  );
}

export default App;

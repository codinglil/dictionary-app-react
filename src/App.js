import "bootstrap/dist/css/bootstrap.min.css";
import learningisfunGif from "./learningisfun.gif";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img
            src={learningisfunGif}
            alt="learning is fun gif"
            className="welcome-gif img-fluid"
          />
        </header>
        <main>
          <h3 className="search-for-invite">
            Let's search for your word here:
          </h3>
          <Dictionary />
        </main>
        <footer>Coded by Lilia Gashin</footer>
      </div>
    </div>
  );
}

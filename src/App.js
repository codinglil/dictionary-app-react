import "bootstrap/dist/css/bootstrap.min.css";
import book1Gif from "./book1.gif";
import githubPng from "./github.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img
            src={book1Gif}
            alt="learning is fun gif"
            className="welcome-gif img-fluid"
          />
        </header>
        <main>
          <h3 className="search-for-invite">Let's search for your word!</h3>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/codinglil/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubPng}
              alt="gitHub icon"
              className="github-icon img-fluid"
            ></img>
          </a>{" "}
          This app was coded by{" "}
          <a
            href="https://main--bespoke-marigold-070266.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Lilia Gashin
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

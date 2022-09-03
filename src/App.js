import "bootstrap/dist/css/bootstrap.min.css";
import learningisfunGif from "./learningisfun.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
        <img
          src={learningisfunGif}
          alt="learning is fun gif"
          className="welcome-gif img-fluid"
        />
      </header>
    </div>
  );
}

export default App;

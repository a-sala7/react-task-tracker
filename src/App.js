import "./App.css";
import Header from "./components/Header";

function App() {
  const name = "Ahmed";

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <h1>Hello From {name}! :)</h1>
    </div>
  );
}

export default App;

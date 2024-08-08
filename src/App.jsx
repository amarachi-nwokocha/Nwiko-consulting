import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Objectives from "./Components/Objectives";
import Reasons from "./Components/Reasons";
import Values from "./Components/Values";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <div id="home">
            <Header />
          </div>
          <div id="objectives">
            <Objectives />
          </div>
          <div id="values">
            <Values />
          </div>
          <div>
            <Reasons />
          </div>
          <div id="team">
            <Team />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

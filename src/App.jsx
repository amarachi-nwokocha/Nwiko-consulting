import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Objectives from "./Components/Objectives";
import Reasons from "./Components/Reasons";
import Values from "./Components/Values";
import Team from "./Components/Team";
import Mail from "./Components/Mail";
import Footer from "./Components/Footer";

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
          <div id="contact">
            <Mail />
          </div>
          <div>
          <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

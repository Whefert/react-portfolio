import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mt-4">
        <div className="row">
          <Education col="col-4" />
          <div className="col">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

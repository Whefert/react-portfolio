import Header from "../Header/Header";
import Education from "../Education/Education";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

export default function Home() {
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
      <Footer />
    </>
  );
}

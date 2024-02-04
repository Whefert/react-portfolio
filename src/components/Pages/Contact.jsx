import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Form from "../Form/Form";
import SectionHeading from "../SectionHeading/SectionHeading";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col mt-3">
            <SectionHeading text={"Get In Touch"} />
            <Form />
          </div>
          <div className="col text-center">
            <iframe
              src="https://giphy.com/embed/KpOqvmCFdNMhF0pQb7"
              width="480"
              height="100%"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/hello-phone-call-ring-KpOqvmCFdNMhF0pQb7">
                via GIPHY
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

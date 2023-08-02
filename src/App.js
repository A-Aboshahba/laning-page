import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";

import Stats from "./components/Stats";
import Footer from "./components/Footer";
import { DrawerAppPar } from "./components/NavBar";
import { CarouselSlider } from "./components/Carsouel";
import { Info } from "./components/Info";

const data = [
  {
    start: "I feel",
    desc: " privileged to have the trust of so many patients to operate on their faces. I have dedicated most of my career to doing faces. I did thousands of facelifts, nose jobs, lid lifts and other facial procedures.",
    imagePath: "002.jpg",
  },
  {
    start: "I have",
    desc: "performed thousands of bodycontouring procedures including liposculpture, breast surgery, and body lift surgeries. I have practiced in various countries including the UK Turkey, Italy, Taiwan, and Egypt. Plastic Surgery is my job, but making people happy is my passion",
    imagePath: "003.jpg",
  },
  {
    start: "Welcome",
    desc: " to my website and thanks for your interest.I believe that faces are one unique human characteristic. Self-image and identity are defined by our faces. I believe everyone has a natural unique beauty. My job is to enhance what you already have. Feel free to browse the website to know more details about facial plastic surgery. Looking forward to seeing you",
    imagePath: "003.jpg",
  },
];
function App() {
  return (
    <div className="App position-relative">
      <DrawerAppPar />
      <CarouselSlider data={data}></CarouselSlider>

      <Info></Info>
      <About />
      <div className="div2"></div>
      <Stats />
      <Footer />
      <ContactUs></ContactUs>
    </div>
  );
}

export function ContactUs() {
  return (
    <div
      style={{ height: "40vh", position: "fixed", top: "50vh" }}
      className="d-flex flex-column justify-content-center "
    >
      <a
        href=""
        style={{
          textDecoration: "none",
          backgroundColor: "blue",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
        }}
        className="mb-2  "
      >
        <i className="fa-sharp fa-solid fa-phone fa-2xl text-white spin"></i>
      </a>
      <a
        href=""
        style={{
          textDecoration: "none",
          backgroundColor: "#25d366",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
        }}
        className="mb-2"
      >
        <i class="fa-brands fa-whatsapp fa-2xl text-white spin"></i>
      </a>
      <a
        href=""
        style={{
          textDecoration: "none",
          backgroundColor: "#833ab4",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
        }}
        className="mb-2"
      >
        <i className="fa-brands fa-instagram fa-2xl text-white spin"></i>
      </a>
    </div>
  );
}

export default App;

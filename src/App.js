import Carousel from "react-bootstrap/Carousel";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
    <div className="App">
      <OffcanvasExample />
      <DarkVariantExample data={data}></DarkVariantExample>
    </div>
  );
}

export default App;

export function DarkVariantExample({ data }) {
  return (
    <Carousel data-bs-theme="light" controls={false} touch={true}>
      <Carousel.Item>
        <CarouselInnerItem content={data[0]}></CarouselInnerItem>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselInnerItem content={data[1]}></CarouselInnerItem>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselInnerItem content={data[2]}></CarouselInnerItem>
      </Carousel.Item>
    </Carousel>
  );
}

export const CarouselInnerItem = ({ content }) => {
  const styles = {
    backgroundImage: `url(./${content.imagePath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
  };
  return (
    <div className="d-block w-100 extra-bold" style={styles}>
      <div
        style={{ paddingTop: "100px", paddingLeft: "20px", fontSize: "2.4vw" }}
        className=" w-50  text-start font-weight-bold"
      >
        <span style={{ color: "blue" }}>{content.start}</span> {content.desc}
      </div>
    </div>
  );
};

function OffcanvasExample() {
  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#" className="mt-2">
            <img
              src="./sssss3.png"
              style={{ height: "50px", width: "150px" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="extra-bold active-link" href="#action2">
                  After And Bedore
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action2">
                  Videos
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action2">
                  Medical Information
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action2">
                  Bearst
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action2">
                  Body
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action2">
                  Nose
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action1">
                  Face
                </Nav.Link>
                <Nav.Link className="extra-bold active-link" href="#action1">
                  Home Page
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export { OffcanvasExample };

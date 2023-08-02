import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
function DrawerAppPar() {
  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#" className="mt-2">
            <img
              alt="fghfg"
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

export { DrawerAppPar };

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png"
import facebook1 from "../assets/Group.svg"
import instagram1 from "../assets/duotone.svg"
import linkedin1 from "../assets/social.svg"
import discord1 from "../assets/Group 1.svg"
import telegram1 from "../assets/duotone.svg"
import "./index.scss"
function Navigation() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container>
        <img className="logo" src={logo} alt=""/> 
        <Navbar.Toggle aria-controls="navbarScroll" 
                    style={{ backgroundColor: "white" }}
                    />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="link" href="#">How It works</Nav.Link>
            <Nav.Link className="link" href="#">Blog</Nav.Link>
            <Nav.Link className="link" href="#">Support</Nav.Link>
          </Nav>

          <div className="Social_media">
          <img src={facebook1} alt=""/> 
          <img src={instagram1} alt=""/> 
          <img src={linkedin1} alt=""/> 
          <img src={discord1} alt=""/> 
          <img src={telegram1} alt=""/> 
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

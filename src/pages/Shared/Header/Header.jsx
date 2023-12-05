import logo from "../../../assets/logo.svg";
import instaIcon from "../../../assets/insta-icon.svg";
import twitterIcon from "../../../assets/twitter-icon.svg";
import utubeIcon from "../../../assets/utube-icon.svg";
import wifiIcon from "../../../assets/wifi-icon.svg";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
const Header = () => {
  return (
    <div className="mt-5">
     

      <Navbar expand="lg" className="  border-bottom border-dark-subtle">
        <Container className=" " fluid>
          <Navbar.Brand className="" href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0 ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Art</Nav.Link>
              <Nav.Link href="#action2">Magazine</Nav.Link>
              <Nav.Link href="#action2">Podcast</Nav.Link>
              <Nav.Link href="#action2">
                <img src={utubeIcon} alt="" />
              </Nav.Link>

              <Nav.Link href="#action2">
                <img src={instaIcon} alt="" />

              </Nav.Link>
              <Nav.Link href="#action2">
              <img src={twitterIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#action2">
              <img src={wifiIcon} alt="" />
              </Nav.Link>
              
            
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

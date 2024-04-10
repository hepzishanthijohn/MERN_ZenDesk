
import logo from "./imag/Z.jpg";
import './navbar.css'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; // Import the user icon



const Navbar = () => {
  return (
    <div id="navbarItems">
      
      <BootstrapNavbar bg="light" expand="lg" >
      <BootstrapNavbar.Brand ><div classname="logoItm">
        <img src={logo} id="nav-logo" />
        
       </div></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle id="toggleItm" aria-controls="basic-navbar-nav" />
      
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link className="navItms" href="/">Home</Nav.Link>
          <Nav.Link className="navItms" href="#">About</Nav.Link>
          <Nav.Link className="navItms" href="#">Contact</Nav.Link>
          <Nav.Link className="navItms" href="/loginform">Login</Nav.Link>
          <Nav.Link className="navItms" href="/registrationform">Register</Nav.Link>
        </Nav>
        
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
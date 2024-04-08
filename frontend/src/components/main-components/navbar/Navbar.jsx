
import logo from "./imag/Z.jpg";
import './navbar.css'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; // Import the user icon



const Navbar = () => {
  return (
    <div id="navbarItems">
      
      <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand ><div classname="logo">
        <img src={logo} id="nav-logo" />
        
       </div></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="#">Register</Nav.Link>
        </Nav>
        
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
    </div>
//    <div classname="nav-items">
//   <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-item">
//     <a className="navbar-brand" href="#">
//       <div classname="logo">
//         <img src={logo} id="nav-logo" />
        
//       </div>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/" id="navItm">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#" id="navItm">
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/blog" id="navItm">
//             BLog
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/loginform" id="navItm">
//             Login
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/registrationform" id="navItm">
//             Register
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// </div>

  );
};

export default Navbar;

import logo from "./imag/Z.jpg";
import './navbar.css'

const Navbar = () => {
  return (
   <div classname="nav-items">
  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-item">
    <a className="navbar-brand" href="#">
      <div classname="logo">
        <img src={logo} id="nav-logo" />
        
      </div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" id="navItm">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" id="navItm">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/blog" id="navItm">
            BLog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/loginform" id="navItm">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/registrationform" id="navItm">
            Register
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>

  );
};

export default Navbar;
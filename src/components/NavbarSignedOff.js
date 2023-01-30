import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

function NavbarSignedOff() {
  return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand text-white">iLetters <FontAwesomeIcon icon="fa-solid fa-share" /></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link ps-5" aria-current="page">HOME <FontAwesomeIcon icon="fa-solid fa-house" />
                    </NavLink>
                  </li>
                  <li className="nav-item px-5">
                    <NavLink to="/about" className="nav-link">ABOUT <FontAwesomeIcon icon="fa-solid fa-circle-info" /></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">CONTACT <FontAwesomeIcon icon="fa-solid fa-message" />
                    </NavLink>
                  </li>
                </ul>
                <span className="navbar-text ms-auto">
                <NavLink to="/login" className="nav-link text-white"> LOGIN <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /> </NavLink>
                </span>
              </div>
            </div>
          </nav>
        </header>
      </div>
  );
}

export default NavbarSignedOff;

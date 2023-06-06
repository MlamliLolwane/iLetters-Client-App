import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

function NavbarSignedIn() {
    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                    <div className="container-fluid">
                    <NavLink to="/learners/home" className="navbar-brand text-white">iLetters <FontAwesomeIcon icon="fa-solid fa-share" /></NavLink>
                        <button className="navbar-toggler" type="button" style={{borderColor:"white", boxShadow: "none"}} data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/learners/home" className="nav-link ps-lg-4" aria-current="page">HOME <FontAwesomeIcon icon="fa-solid fa-house" />
                                    </NavLink>
                                </li>
                                <li className="nav-item px-lg-4">
                                    <NavLink to="/learners/index" className="nav-link">LEARNERS <FontAwesomeIcon icon="fa-solid fa-user-graduate" /></NavLink>
                                </li>

                                <li className="nav-item px-lg-4">
                                    <NavLink to="/schools/index" className="nav-link">SCHOOL <FontAwesomeIcon icon="fa-solid fa-school" /></NavLink>
                                </li>

                                <li className="nav-item px-lg-4">
                                    <NavLink to="/grades/index" className="nav-link">GRADES <FontAwesomeIcon icon="fa-solid fa-list" /></NavLink>
                                </li>

                                <li className="nav-item px-lg-4">
                                    <NavLink to="/newsletters/index" className="nav-link">NEWSLETTERS <FontAwesomeIcon icon="fa-solid fa-envelope" /></NavLink>
                                </li>
                            </ul>
                            <span className="navbar-text text-white ms-auto">
                                PROFILE <FontAwesomeIcon icon="fa-solid fa-user" />
                            </span>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavbarSignedIn;

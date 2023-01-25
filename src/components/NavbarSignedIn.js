import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

function NavbarSignedIn() {
    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">iLetters <FontAwesomeIcon icon="fa-solid fa-share" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link ps-4" aria-current="page" href="#">HOME <FontAwesomeIcon icon="fa-solid fa-house" />
                                    </NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="/learners/add" className="nav-link" href="#">LEARNERS <FontAwesomeIcon icon="fa-solid fa-user-graduate" /></NavLink>
                                </li>

                                <li className="nav-item px-4">
                                    <NavLink to="/schools/add" className="nav-link" href="#">SCHOOL <FontAwesomeIcon icon="fa-solid fa-school" /></NavLink>
                                </li>

                                <li className="nav-item px-4">
                                    <NavLink to="/grade/add" className="nav-link" href="#">GRADES <FontAwesomeIcon icon="fa-solid fa-list" /></NavLink>
                                </li>

                                <li className="nav-item px-4">
                                    <NavLink to="/newsletters/create" className="nav-link" href="#">NEWSLETTERS <FontAwesomeIcon icon="fa-solid fa-envelope" /></NavLink>
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

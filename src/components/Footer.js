import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
      <div className="App">
        <div className="bg-body-tertiary bg-dark">
            <div className="text-center text-white fw-lighter py-2">
                Developed and designed by <NavLink to="/contact" className="text-white"><u>
                    Mlamli Lolwane.</u></NavLink>  <br/>
                I am currently seeking employment and available immediately.
                If you like what you see please contact me on the contact details below.
            </div>
        </div>
      </div>
  );
}

export default Footer;

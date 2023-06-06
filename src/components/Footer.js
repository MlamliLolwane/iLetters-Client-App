import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="App">
      <div className="bg-body-tertiary bg-dark">
        <div className="text-center text-white fw-lighter pt-3">
          <p>Made with <FontAwesomeIcon icon="fa-solid fa-heart" /> by
          <NavLink to="/contact" className="text-white"><u> Mlamli Lolwane.</u></NavLink>  <br />
                I am actively job seeking and available immediately.
                If you like what you see please contact me on the contact details below.</p>
        </div>
        <hr className="text-white px-5 mx-5"/>
        <div className="row">
          <div className="col-lg-6 text-white text-center">
            <h6> <u>Contact Details </u></h6>
            <p className="pt-3 text-white">
              Email: <a  className="text-white" href="mailto:mrlolwane96@gmail.com"> mrlolwane96@gmail.com</a></p>
            <p>Cellphone: 069 123 8001</p>
            <p>Alternative Cellphone: 072 199 7807</p>
          </div>
          <div className="col-lg-6 text-white fw-lighter text-center">
            <h6> <u>Links </u></h6>
            <p className="pt-3">Github Profile: <a className="text-white" href="https://github.com/MlamliLolwane" target="_blank" rel="noreferrer" >Mlamli Lolwane Github</a></p>
            <p>LinkedIn Profile: <a className="text-white" href="https://www.linkedin.com/in/mlamli-lolwane-3ba96b196/" target="_blank" rel="noreferrer" >Mlamli Lolwane LinkedIn</a></p>
            <p>iLetters Source Code: <a className="text-white" href="https://github.com/MlamliLolwane/iLetters" target="_blank" rel="noreferrer" >Mlamli Lolwane iLetters Project</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import NavbarSignedOff from '../components/NavbarSignedOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '.././components/Footer';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <NavbarSignedOff />

            <div className="row form-background" style={{ minHeight: "500px" }}>
                <div className="col-8 mx-auto my-5 pt-5 text-center text-white">
                <br/><br/><br/>
                    <h3>Hi and Welcome to iLetters</h3>

                    <h5 className="fw-lighter text-center mt-4">
                        An innovative way of composing and sharing school newsletters with parents.
                        Please Login to be able to access and manage your school newsletters.</h5>

                    <div className="text-center mt-4">
                    <NavLink to="/login"><button type="button" class="btn btn-primary">LOGIN <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /></button></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
import NavbarSignedOff from '.././components/NavbarSignedOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '.././components/Footer';

function Login() {
    return (
        <div>
            <NavbarSignedOff />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">LOGIN</h3>

                        <h6 className="text-center text-white fw-lighter">Welcome to iLetters. 
                        Please Login to be able to access and manage your school newsletters.</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Email Address</label>
                        </div>

                        <div class="form-floating my-4 mx-5">
                            <input type="email" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Password</label>
                        </div>

                        <div className="text-center mt-5">
                            <button type="button" class="btn btn-primary">LOGIN <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
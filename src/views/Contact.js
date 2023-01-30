import NavbarSignedOff from '../components/NavbarSignedOff';
import Footer from '.././components/Footer';

function Contact() {
    return (
        <div>
            <NavbarSignedOff />
            
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">CONTACT</h3>

                        <h6 className="text-center text-white fw-lighter">Hi and welcome to iLetters. 
                        My name is Mlamli Lolwane and I am actively job seeking. If you like what you 
                        see or have a query then please contact me on the contact details below.</h6>

                        <div className="row pt-4">
                            <div className="col text-white fw-lighter">
                                <h6> <u>Contact Details </u></h6>
                                <p className="pt-3">Email: mrlolwane96@gmail.com</p>
                                <p>Cellphone: 069 123 8001</p>
                                <p>Alternative Cellphone: 069 123 8001</p>
                            </div>
                        </div>

                        <div className="row pt-4">
                            <div className="col text-white fw-lighter">
                                <h6> <u>Links </u></h6>
                                <p className="pt-3">Github Profile: <a className="text-white" href="https://github.com/MlamliLolwane" target="_blank">Mlamli Lolwane Github</a></p>
                                <p>LinkedIn Profile: <a className="text-white" href="https://github.com/MlamliLolwane" target="_blank">Mlamli Lolwane LinkedIn</a></p>
                                <p>iLetters Source Code: <a className="text-white" href="https://github.com/MlamliLolwane" target="_blank">Mlamli Lolwane iLetters Project</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
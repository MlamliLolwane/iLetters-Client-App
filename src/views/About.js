import NavbarSignedOff from '../components/NavbarSignedOff';
import Footer from '.././components/Footer';

function About() {
    return (
        <div>
            <NavbarSignedOff />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">ABOUT</h3>

                        <p className="text-white fw-lighter">Hi and welcome to iLetters.
                        This project was developed to improve the way schools currently communicate with learners parents which is through paper
                        based newsletters and digitize the process due to the following reasons:</p>

                        <div className="row pt-4">
                            <div className="col text-white fw-lighter">
                                <p className="pt-3">
                                    1. Paper based school communique usually don't reach the parents because the learners lose or even forget to give their parents
                                    the newsletters.
                                </p>
                                <p className="pt-3">
                                    2. Paper based newsletters are not only expensive to the schools, but also have an impact on the environment from the
                                    paper they need to be printed on, to the cartridges needed to print the newsletters.
                                </p>

                                <p className="pt-3">
                                    In order to combat the above mentioned problems, a digital platform was created in the form of this project which will enable schools to compose
                                    and send newsletters straight to the parents via Email and or on Whatsapp. The parents will have an option
                                    of choosing how they want to receive the newsletters.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
        <div>
            <NavbarSignedIn />
            <div className="container">
                <div className="row mt-5 pb-3">
                    <div className="col mx-4">
                        <h5 className="fw-bold d-inline">USAGE STATISTICS</h5>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col form-background mx-4 py-4">
                        <h6 className="text-center text-white">NEWSLETTERS</h6>
                        <p style={{ fontSize: "50px" }} className="text-white text-center">17</p>
                        <div className="text-center">
                            <NavLink to="/newsletters/index"><button type="button" class="btn btn-primary mx-auto">
                                VIEW NEWSLETTERS <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                        </div>
                    </div>

                    {/* <div className="col-1"></div> */}

                    <div className="col form-background mx-4 py-4">
                        <h6 className="text-center text-white">LEARNERS</h6>
                        <p style={{ fontSize: "50px" }} className="text-white text-center">403</p>
                        <div className="text-center">
                            <NavLink to="/learners/index"><button type="button" class="btn btn-primary mx-auto">
                                VIEW LEARNERS <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                        </div>
                    </div>

                    <div className="col form-background mx-4 py-4">
                        <h6 className="text-center text-white">GRADES</h6>
                        <p style={{ fontSize: "50px" }} className="text-white text-center">7</p>
                        <div className="text-center">
                            <NavLink to="/grades/index"><button type="button" class="btn btn-primary mx-auto">
                                VIEW GRADES <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
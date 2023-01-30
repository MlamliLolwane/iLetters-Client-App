import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function LearnerInformation() {
    return (
        <div>
            <NavbarSignedIn />
            <div className="container">
                <div className="row mt-5 pb-2">
                    <div className="col">
                        <h5 className="fw-bold d-inline">ALL LEARNERS</h5>
                        <NavLink to="/learners/add" className="btn btn-sm btn-primary float-end" href="#">ADD LEARNER 
                        <FontAwesomeIcon icon="fa-solid fa-plus-circle" /> </NavLink>
                    </div>



                </div>

                <div className="row mb-5">
                    <div className="col">
                        <div class="table-responsive">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>GRADE</th>
                                        <th>CELLPHONE</th>
                                        <th>WHATSAPP</th>
                                        <th>EMAIL</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-semibold">Mlamli Lolwane</td>
                                        <td className="fw-semibold">4B</td>
                                        <td className="fw-semibold">0813544351</td>
                                        <td className="fw-semibold">0813544351</td>
                                        <td className="fw-semibold">mrlolwane96@gmail.com</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">Thabo Mbeki</td>
                                        <td className="fw-semibold">4B</td>
                                        <td className="fw-semibold">0813533351</td>
                                        <td className="fw-semibold">0813533351</td>
                                        <td className="fw-semibold">thaboMbeki@gmail.com</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">Jacob Zuma</td>
                                        <td className="fw-semibold">4B</td>
                                        <td className="fw-semibold">0693544351</td>
                                        <td className="fw-semibold">0693544351</td>
                                        <td className="fw-semibold">j.z@gmail.com</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">Julious Malema</td>
                                        <td className="fw-semibold">4B</td>
                                        <td className="fw-semibold">0723544351</td>
                                        <td className="fw-semibold">0723544351</td>
                                        <td className="fw-semibold">malema1@gmail.com</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LearnerInformation;
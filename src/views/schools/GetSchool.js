import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function GetSchool() {
    const school = '';
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto form-background pt-5">
                        <h5 className="text-center text-white">SCHOOL INFORMATION</h5>
                    </div>
                </div>
                <div className="row mb-5">
                    {school ? <div className="col-lg-6 mx-auto form-background pt-3 pb-5">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-light text-white text-center">School Name</td>
                                        <td className="fw-light text-white text-center">Golfview Combined School</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Email Address</td>
                                        <td className="fw-light text-white text-center">golviewhigh@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Primary Phone</td>
                                        <td className="fw-light text-white text-center">0183664517</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Secondary Phone</td>
                                        <td className="fw-light text-white text-center">0613544879</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Physical Address</td>
                                        <td className="fw-light text-white text-center">Golfview Combined School</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Postal Address</td>
                                        <td className="fw-light text-white text-center">Golfview Combined School</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center pt-3">
                            <button type="button" class="btn btn-primary me-2"> UPDATE <FontAwesomeIcon icon="fa-solid fa-pencil-alt" /></button>
                            <button type="button" class="btn btn-secondary">DELETE <FontAwesomeIcon icon="fa-solid fa-delete-left" /></button>
                        </div>
                    </div> :
                        <div className="col-lg-6 mx-auto form-background pt-3 pb-5">
                            <p className="text-white fw-lighter">
                                You have not yet added your school information to the database.
                                You can use the button below to add the information which will later on
                                be displayed here.
                            </p>
                            <div className="text-center pt-3">
                                <NavLink to="/grade-learner/add"><button type="button" class="btn btn-primary">ADD SCHOOL <FontAwesomeIcon icon="fa-solid fa-plus-circle" /></button></NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GetSchool;
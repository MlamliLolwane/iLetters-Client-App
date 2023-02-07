import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function GetNewsletters()
{
    return(
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row mt-5 pb-2">
                    <div className="col">
                        <h5 className="fw-bold d-inline">ALL NEWSLETTERS</h5>
                        <NavLink to="/newsletters/add" className="btn btn-sm btn-primary float-end" href="#">
                            CREATE NEWSLETTER <FontAwesomeIcon icon="fa-solid fa-plus-circle" /> </NavLink>
                    </div>

                </div>

                <div className="row mb-5">
                    <div className="col">
                        <div class="table-responsive">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th>TITLE</th>
                                        <th>DATE SENT</th>
                                        <th>SENT TO GRADE(S)</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-semibold">Athletics Day</td>
                                        <td className="fw-semibold">21 January 2023</td>
                                        <td className="fw-semibold">1A, 1B, 1C, 2A, 2B, 2C, 3A, 3B, 3C, 4A</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">No School Attendance On Thursday</td>
                                        <td className="fw-semibold">23 January 2023</td>
                                        <td className="fw-semibold">1A, 1B, 1C, 2A, 2B, 2C, 3A, 3B, 3C</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">Updated School Fees</td>
                                        <td className="fw-semibold">26 January 2023</td>
                                        <td className="fw-semibold">All Grades</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">End of Term Report Collection</td>
                                        <td className="fw-semibold">20 March 2023</td>
                                        <td className="fw-semibold">1A, 1B, 1C, 2A, 2B, 2C, 3A, 3B, 3C</td>
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

export default GetNewsletters;
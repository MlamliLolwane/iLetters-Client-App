import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function GetGrades()
{
    return(
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row mt-5 pb-2">
                    <div className="col">
                        <h5 className="fw-bold d-inline">ALL GRADES</h5>
                        <NavLink to="/grades/add" className="btn btn-sm btn-primary float-end" href="#">ADD GRADE 
                        <FontAwesomeIcon icon="fa-solid fa-plus-circle" /> </NavLink>
                    </div>

                </div>

                <div className="row mb-5">
                    <div className="col">
                        <div class="table-responsive">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th>GRADE</th>
                                        <th>CLASSES</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-semibold">1</td>
                                        <td className="fw-semibold">A, B, C, D</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">2</td>
                                        <td className="fw-semibold">A, B, C</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">3</td>
                                        <td className="fw-semibold">A, B, C</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">4</td>
                                        <td className="fw-semibold">A, B, C, D</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">5</td>
                                        <td className="fw-semibold">A, B, C, D</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-semibold">6</td>
                                        <td className="fw-semibold">A, B, C</td>
                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetGrades;
import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import Footer from '.././../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
function GetGrades() {
    const [grades, setGrades] = useState([]);
    const [gradeSuffix, setGradeSuffix] = useState([]);
    const [active, setActive] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:8000/api/grades/distinct/noid')
            .then((response) => {
                //Loop through the response and set the grade numbers as well as the grade suffix
                setGrades([...new Set(response.data.map(grade => grade.grade_number))]);
                //console.log(response.data)
                setGradeSuffix(response.data);
                setActive(false);
            }).catch(e => {
                console.log(e);
                setActive(false);
            })
    }, []);

    return (
        <LoadingOverlay
            active={active}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: '#1d1b1bf6',
                    height: '100vh'
                }),
            }}
            spinner={<HashLoader color="#4b9263" />}
            text={"Loading..."}
        >
            <div>
                <NavbarSignedIn />

                <div className="container">
                    <div className="row mt-5 pb-2">
                        <div className="col">
                            <h5 className="fw-bold d-inline">ALL GRADES</h5>
                            <NavLink to="/grades/add" className="btn btn-sm btn-primary float-end" href="#">
                                ADD GRADE <FontAwesomeIcon icon="fa-solid fa-plus-circle" /> </NavLink>
                        </div>

                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th>GRADE</th>
                                            <th>CLASSES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            grades.map((gradeNumber) => {
                                                var suffix = "";
                                                return (
                                                    <tr>
                                                        <td className="fw-semibold">{gradeNumber}</td>

                                                        {
                                                            gradeSuffix.map((grade) => {
                                                                if (grade.grade_number == gradeNumber)
                                                                    suffix = suffix + ", " + grade.grade_suffix
                                                            })
                                                        }
                                                        <td className="fw-semibold">{suffix.substring(1)}</td>
                                                    </tr>
                                                )

                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </LoadingOverlay>
    );
}

export default GetGrades;
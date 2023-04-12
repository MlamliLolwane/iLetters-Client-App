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
    const [active, setActive] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:8000/api/grades/index')
            .then((response) => {
                setGrades(response.data);
                console.log(response.data[0]);
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
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            grades.map((grade) => {
                                                return (
                                                    <tr key={grade.id}>
                                                            <td className="fw-semibold">{grade.current_grade}</td>
                                                            <td className="fw-semibold">{grade.classes}</td>
                                                            <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                                            </td>
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
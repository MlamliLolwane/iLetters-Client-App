import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';

function GetSchool() {
    const [schools, setSchools] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/schools/index')
            .then((response) => {
                setSchools(response.data);
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
                    <div className="row mt-5">
                        <div className="col-lg-6 mx-auto form-background pt-5">
                            <h5 className="text-center text-white">SCHOOL INFORMATION</h5>
                        </div>
                    </div>
                    <div className="row mb-5">
                        {active
                            &&
                            <div className="col-lg-6 mx-auto form-background pt-3 pb-5">
                                <p className="text-center text-white">
                                    Loading school details...
                                </p>
                            </div>

                        }
                        {!active
                        &&
                            < div className="col-lg-6 mx-auto form-background pt-3 pb-5">
                            <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                {
                                    schools.map((school) => {
                                        return (
                                            <tbody key={school.id}>
                                                <tr>
                                                    <td className="fw-light text-white text-center">School Name</td>
                                                    <td className="fw-light text-white text-center">{school.school_name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Email Address</td>
                                                    <td className="fw-light text-white text-center">{school.email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Primary Phone</td>
                                                    <td className="fw-light text-white text-center">{school.primary_phone_number}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Secondary Phone</td>
                                                    <td className="fw-light text-white text-center">{school.secondary_phone_number}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Physical Address</td>
                                                    <td className="fw-light text-white text-center">{school.physical_address}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Postal Address</td>
                                                    <td className="fw-light text-white text-center">{school.postal_address}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>

                        <div className="text-center pt-3">
                            <button type="button" className="btn btn-primary me-2"> UPDATE <FontAwesomeIcon icon="fa-solid fa-pencil-alt" /></button>
                            <button type="button" className="btn btn-secondary">DELETE <FontAwesomeIcon icon="fa-solid fa-delete-left" /></button>
                        </div>

                    </div>
}

                        {/* {progress === "empty"
                        &&
                        <div className="col-lg-6 mx-auto form-background pt-3 pb-5">
                            <p className="text-white fw-lighter">
                                You have not yet added your school information to the database.
                                You can use the button below to add the information which will later on
                                be displayed here.
                            </p>
                            <div className="text-center pt-3">
                                <NavLink to="/schools/add"><button type="button" className="btn btn-primary">ADD SCHOOL <FontAwesomeIcon icon="fa-solid fa-plus-circle" /></button></NavLink>
                            </div>
                        </div>
} */}

                </div>
            </div>
            <Footer />
            </div>
        </LoadingOverlay >
    );
}

export default GetSchool;
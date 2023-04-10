import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRequest } from '../../axiosClient';
import axios from 'axios';

function LearnerInformation() {
    const [learnerInfo, setLearnerInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/query/learner-information')
            .then((response) => {
                //console.log(response.data.data);
                setLearnerInfo(response.data.data);
            })
    }, []);

    const getLearnerInfo = () => {
        const response = getRequest('query/learner-information');

        setLearnerInfo(response.data);
    };

    return (
        <div>
            <NavbarSignedIn />
            <div className="container">
                <div className="row mt-5 pb-2">
                    <div className="col">
                        <h5 className="fw-bold d-inline">ALL LEARNERS</h5>
                        <NavLink to="/learners/add" className="btn btn-sm btn-primary float-end">
                            ADD LEARNER <FontAwesomeIcon icon="fa-solid fa-plus-circle" /> </NavLink>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-dark">
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
                                    {
                                        learnerInfo.map((learner) => {
                                            return (
                                                <tr key={learner.id}>
                                                    <td className="fw-semibold">{
                                                        learner.first_name
                                                    } {learner.last_name}</td>
                                                    <td className="fw-semibold">{learner.grade}</td>
                                                    <td className="fw-semibold">{learner.cellphone}</td>
                                                    <td className="fw-semibold">{learner.whatsapp}</td>
                                                    <td className="fw-semibold">{learner.email}</td>
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
    )
}

export default LearnerInformation;
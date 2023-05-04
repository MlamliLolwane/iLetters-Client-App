import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import Modal from '../../components/ModalDeleteLearner';
import { useDispatch } from "react-redux";
import { storeLearnerInformation } from '../../actions/learnerAction';
import { useNavigate } from "react-router-dom";
import { storeContactInformation } from '../../actions/contactAction';

function LearnerInformation() {
    const [learnerInfo, setLearnerInfo] = useState([]);
    const [active, setActive] = useState(true);
    const [learner, setLearner] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/query/learner-information')
            .then((response) => {
                setLearnerInfo(response.data.data);
                setActive(false);
            })
    }, []);

    function DeleteLearner(learner) {
        setLearner(learner);
    }

    function UpdateLearner(learner) {
        const learnerValues = {
            first_name: learner.first_name,
            last_name: learner.last_name,
            learner_id: learner.id
        }

        const contactValues = {
            cell_phone: learner.cellphone,
            whatsapp: learner.whatsapp,
            email: learner.email
        }

        dispatch(storeLearnerInformation(learnerValues));
        dispatch(storeContactInformation(contactValues));

        navigate('/learners/add');
    }

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
        >
            <div>
                <NavbarSignedIn />
                <Modal learner={learner} />
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
                                                        <td><div className="text-center">
                                                            <button type="button" onClick={() => { UpdateLearner(learner) }} className="btn btn-sm btn-primary me-2">
                                                                UPDATE <FontAwesomeIcon icon="fa-solid fa-pencil-alt" />
                                                            </button>
                                                            <button type="button" onClick={() => DeleteLearner(learner)} className="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                                DELETE <FontAwesomeIcon icon="fa-solid fa-delete-left" />
                                                            </button>
                                                        </div>
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
    )
}

export default LearnerInformation;
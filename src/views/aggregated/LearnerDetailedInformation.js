import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import axios from 'axios';

function LearnerDetailedInformation() {
    const [active, setActive] = useState(true);
    const [contact, setContact] = useState("");
    const [learner, setLearner] = useState("");
    const [gradeLearner, setGradeLearner] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/query/get_last_learner_information')
            .then((response) => {
                setContact(response.data.contact);
                setLearner(response.data.learner);
                setGradeLearner(response.data.grade_learner);
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
        >
            <div>
                <NavbarSignedIn />

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6 mx-auto form-background pt-5">
                            <h5 className="text-center text-white">LEARNER DETAILED INFORMATION</h5>
                        </div>
                    </div>
                    <div className="row mb-5">
                        {active
                            &&
                            <div className="col-lg-6 mx-auto form-background pt-3 pb-5">
                                <p className="text-center text-white">
                                    Loading learner information...
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
                                            <tbody>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Name</td>
                                                    <td className="fw-light text-white text-center">{learner.first_name + ' ' + learner.last_name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Grade</td>
                                                    <td className="fw-light text-white text-center">{gradeLearner.grade_number + gradeLearner.grade_suffix}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Cellphone Number</td>
                                                    <td className="fw-light text-white text-center">{contact.cell_phone}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Whatsapp Number</td>
                                                    <td className="fw-light text-white text-center">{contact.whatsapp}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Email Address</td>
                                                    <td className="fw-light text-white text-center">{contact.email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-light text-white text-center">Preferred Contact Method</td>
                                                    <td className="fw-light text-white text-center">{contact.preffered_contact_method}</td>
                                                </tr>
                                            </tbody>
                                        }
                                    </table>
                                </div>

                                <div className="text-center pt-3">
                                    <button type="button" className="btn btn-primary me-2"> UPDATE <FontAwesomeIcon icon="fa-solid fa-pencil-alt" /></button>
                                    <button type="button" className="btn btn-secondary">DELETE <FontAwesomeIcon icon="fa-solid fa-delete-left" /></button>
                                </div>

                            </div>
                        }

                    </div>
                </div>
                <Footer />
            </div>

        </LoadingOverlay>
    )
}

export default LearnerDetailedInformation;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { useState } from 'react'
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';

function Modal({ learner }) {
    const [active, setActive] = useState(false);

    function DeleteLearner(id) {
        setActive(true);
        axios.delete('http://localhost:8000/learners/delete/' + id)
            .then(() => {
                setActive(false);
            })
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
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="modalDelete" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bolder" id="exampleModalLabel">Confirm Delete</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-center mb-0 pb-0">Are you sure you want to delete the following learner?</p> <br />
                                <table className="table pt-0 mt-0">
                                    <thead>
                                        <tr>
                                            <th> </th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    {
                                        <tbody>
                                            <tr>
                                                <td className="fw-light">Name</td>
                                                <td className="fw-light">{learner.first_name + ' ' + learner.last_name}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-light">Grade</td>
                                                <td className="fw-light">{learner.grade}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-light ">Cellphone Number</td>
                                                <td className="fw-light ">{learner.cellphone}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-light ">Whatsapp Number</td>
                                                <td className="fw-light ">{learner.whatsapp}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-light ">Email Address</td>
                                                <td className="fw-light ">{learner.email}</td>
                                            </tr>
                                        </tbody>
                                    }
                                </table>

                            </div>
                            <div className="text-center pb-4 pt-1">
                                <button type="submit" className="btn btn-primary me-2" onClick={() => { DeleteLearner(learner.id) }} data-bs-dismiss="modal">
                                    DELETE <FontAwesomeIcon icon="fa-solid fa-delete-left" />
                                </button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    )
}
export default Modal;
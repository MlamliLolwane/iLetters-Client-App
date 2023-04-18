import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeLearnerInformation } from '../../actions/learnerAction';

function CreateLearner() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactID, setContactID] = useState('');

    const [active, setActive] = useState(false);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    function saveLearner(e) {
        e.preventDefault();

        const learnerInformation = {
            first_name: firstName,
            lastName: lastName
        };

        dispatch(storeLearnerInformation(learnerInformation));

        console.log(state);
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

                <div className="container">
                    <form className="row my-5 needs-validation">
                        <div className="col-lg-6 mx-auto form-background py-5">
                            <h3 className="text-center text-white">LEARNER</h3>

                            <h6 className="text-center text-white fw-lighter">Step 1 of 3: Use this form to add information of the learner.</h6>

                            <div className="form-floating my-4 mx-5">
                                <input type="text" required={true} className="form-control" id="floatingInput" placeholder=" " onChange={e => setFirstName(e.target.value)}/>
                                <label htmlFor="floatingInput">First Name</label>
                                <div className="invalid-feedback">
                                    First Name Required
                                </div>
                            </div>

                            <div className="form-floating mb-3 mx-5">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" " onChange={e => setLastName(e.target.value)} />
                                <label htmlFor="floatingInput">Last Name</label>
                            </div>

                            <div className="text-center mt-5">
                            <NavLink to="/grade-learner/add" style={{ textDecoration: "none" }}><button type="submit" onClick={saveLearner} className="btn btn-primary">NEXT <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </LoadingOverlay>
    );
}

export default CreateLearner;
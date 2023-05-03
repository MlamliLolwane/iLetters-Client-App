import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeLearnerInformation } from '../../actions/learnerAction';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



function CreateLearner() {
    const [active, setActive] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const learner = useSelector(state => state.learner);

    useEffect(() => {
        if (Array.isArray(learner) && learner.length > 1) {
            setFirstName(learner[0].first_name);
            setLastName(learner[0].last_name);
        }
        else {
            setFirstName("");
            setLastName("");
        }
    }, []);

    return (
        <Formik enableReinitialize={true}
            initialValues={{
                first_name: firstName,
                last_name: lastName
            }} validationSchema={Yup.object({
                first_name: Yup.string().required('First Name Required'),
                last_name: Yup.string().required('Last Name Required')
            })} onSubmit={values => {
                dispatch(storeLearnerInformation(values));

                navigate('/grade-learner/add');
                //console.log(values);
            }}
        >
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
                        <Form className="row my-5">
                            <div className="col-lg-6 mx-auto form-background py-5">
                                <h3 className="text-center text-white">LEARNER</h3>

                                <h6 className="text-center text-white fw-lighter">Step 1 of 3: Use this form to add information of the learner.</h6>

                                <div className="form-floating my-4 mx-5">
                                    <Field type="text" name="first_name" className="form-control" id="first_name" placeholder=" " />
                                    <label htmlFor="first_name">First Name</label>
                                    <ErrorMessage name="first_name">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-floating mb-3 mx-5">
                                    <Field name="last_name" type="text" className="form-control" id="last_name" placeholder=" " />
                                    <label htmlFor="last_name">Last Name</label>
                                    <ErrorMessage name="last_name">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-primary">NEXT <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div >
            </LoadingOverlay>
        </Formik>
    )
}

export default CreateLearner;
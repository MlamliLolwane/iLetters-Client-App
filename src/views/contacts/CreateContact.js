import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
//import { postRequst } from '../../axiosClient';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import { storeContactInformation, deleteContactInformation } from '../../actions/contactAction';
import { deleteLearnerInformation } from '../../actions/learnerAction';
import { deleteGradeLearnerInformation } from '../../actions/gradeLearnerAction';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreateContact() {
    const [active, setActive] = useState(false);
    const [cellPhone, setCellPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const learner = useSelector(state => state.learner);
    const gradeLearner = useSelector(state => state.gradeLearner);
    const contact = useSelector(state => state.contact);
    const ref = useRef(null);
    const dispatch = useDispatch();

    function previous() {
        dispatch(storeContactInformation(ref.current.values));
        navigate('/grade-learner/add');
    }

    useEffect(() => {
        if (Array.isArray(contact) && contact.length) {
            setCellPhone(contact[0].cell_phone);
            setWhatsapp(contact[0].whatsapp);
            setEmail(contact[0].email);
        }
        else {
            setCellPhone("");
            setWhatsapp("");
            setEmail("");
        }
    }, []);

    return (
        <Formik enableReinitialize={true}
            innerRef={ref}
            initialValues={{
                cell_phone: cellPhone,
                whatsapp: whatsapp,
                email: email,
                preffered_contact_method: ''
            }} validationSchema={Yup.object({
                cell_phone: Yup.string().required('Cellphone Number Required'),
                whatsapp: Yup.string().required('Whatsapp Number Required'),
                email: Yup.string().email('Email Address Invalid').required('Email Address Required'),
                preffered_contact_method: Yup.string().required('Preferred Contact Method Required')
            })} onSubmit={values => {
                setActive(true);
                const request = {
                    learner_information: learner[0],
                    grade_learner: gradeLearner[0],
                    contacts: values
                };

                //Have to check if the user still wants to create or edit the learner

                if (learner.learner_id) {
                    axios.post('http://localhost:8000/api/aggregates/learner/update/' + learner[0].learner_id, request)
                        .then((response) => {
                            dispatch(deleteLearnerInformation());
                            dispatch(deleteGradeLearnerInformation());
                            dispatch(deleteContactInformation());
                            setActive(false);

                            navigate('/learners/details');
                        });
                }
                else {
                    axios.post('http://localhost:8000/api/aggregates/learner/store', request)
                        .then((response) => {
                            dispatch(deleteLearnerInformation());
                            dispatch(deleteGradeLearnerInformation());
                            dispatch(deleteContactInformation());
                            setActive(false);

                            navigate('/learners/details');
                        });
                }
            }}
        >
            <LoadingOverlay
                active={active}
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: '#1d1b1bf6',
                        height: '100%'
                    }),
                }}
                spinner={<HashLoader color="#4b9263" />}
            >
                <div>
                    <NavbarSignedIn />

                    <div className="container">
                        <Form className="row my-5">
                            <div className="col-lg-6 mx-auto form-background py-5">
                                <h3 className="text-center text-white">CONTACTS</h3>

                                <h6 className="text-center text-white fw-lighter">Step 3 of 3: Use this form to add contact details of the learner</h6>

                                <div className="form-floating my-4 mx-5">
                                    <Field type="text" name="cell_phone" className="form-control" id="cell_phone" placeholder=" " />
                                    <label htmlFor="cell_phone">Cellphone Number</label>
                                    <ErrorMessage name="cell_phone">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-floating mb-3 mx-5">
                                    <Field type="text" name="whatsapp" className="form-control" id="whatsapp" placeholder=" " />
                                    <label htmlFor="whatsapp">Whatsapp Number</label>
                                    <ErrorMessage name="whatsapp">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-floating mb-3 mx-5">
                                    <Field type="email" name="email" className="form-control" id="email" placeholder=" " />
                                    <label htmlFor="email">Email Address</label>
                                    <ErrorMessage name="email">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-floating mx-5 pb-5">
                                    <label htmlFor="floatingInput">Preferred Contact Method</label>
                                </div>
                                <div className="form-check form-check-inline mx-5">
                                    <Field className="form-check-input" type="radio" name="preffered_contact_method" id="whatsapp" value="whatsapp" />
                                    <label className="form-check-label text-white" htmlFor="whatsapp">Whatsapp</label>
                                </div>
                                <div className="form-check form-check-inline mx-5">
                                    <Field className="form-check-input" type="radio" name="preffered_contact_method" id="email" value="email" />
                                    <label className="form-check-label text-white" htmlFor="email">Email</label>
                                </div>
                                <div className="form-check form-check-inline mx-5">
                                    <Field className="form-check-input" type="radio" name="preffered_contact_method" id="both" value="both" />
                                    <label className="form-check-label text-white" htmlFor="both">Both</label>
                                </div>
                                <div className="form-floating mb-3 mx-5">
                                    <ErrorMessage name="preffered_contact_method">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="text-center mt-5">
                                    <button type="button" onClick={previous} className="btn btn-secondary me-2"> PREV <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-left" /></button>
                                    <button type="submit" className="btn btn-primary">FINISH <FontAwesomeIcon icon="fa-solid fa-check-circle" /></button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div >
            </LoadingOverlay>
        </Formik>
    );
}

export default CreateContact;
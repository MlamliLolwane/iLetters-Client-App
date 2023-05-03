import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import { storeGradeLearnerInformation } from '../../actions/gradeLearnerAction';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreateGradeLearner() {
    const [active, setActive] = useState(false);
    const [gradeID, setGradeID] = useState('');
    const [learnerID, setLearnerID] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [grades, setGrades] = useState([]);
    const gradeLearner = useSelector(state => state.gradeLearner);

    useEffect(() => {
        //Change to if cookie exists then load from cookie, else load from database
        setActive(true);
        const localGrades = localStorage.getItem('Grades');

        if (localGrades) {
            setGrades(JSON.parse(localGrades));
            setActive(false);
        }
        else {
            alert("False")
            axios.get('http://localhost:8000/api/grades/get')
                .then((response) => {
                    setGrades(response.data.data);
                    localStorage.setItem('Grades', JSON.stringify(response.data.data));
                    setActive(false);
                });
        }
    }, []);

    function previous() {
        if (ref.current.values.grade_id) {
            dispatch(storeGradeLearnerInformation(ref.current.values));
        }

        navigate('/learners/add');
    }

    return (
        <Formik enableReinitialize={true}
            innerRef={ref}
            initialValues={{
                grade_id: gradeID,
                learner_id: ''
            }} validationSchema={Yup.object({
                grade_id: Yup.number().required('Grade Required')
            })} onSubmit={values => {
                dispatch(storeGradeLearnerInformation(values));

                navigate('/contacts/add');
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
                                <h3 className="text-center text-white">GRADE</h3>

                                <h6 className="text-center text-white fw-lighter">Step 2 of 3: Use this form to assign the learner to a grade</h6>

                                <div className="form-floating my-4 mx-5">
                                    <Field as="select" name="grade_id" className="form-control select-style" id="grade_id" placeholder=" ">
                                        <option defaultValue="0">Select Grade</option>
                                        {
                                            grades.map((grade) => {
                                                return (
                                                    <option key={grade.id} value={grade.id}>{"Grade " + grade.grade_number + grade.grade_suffix}</option>
                                                )
                                            })
                                        }
                                    </Field>
                                    <label htmlFor="7">Grade</label>
                                    <ErrorMessage name="grade_id">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="text-center mt-5">
                                    <button type="button" onClick={previous} className="btn btn-secondary me-2"> PREV <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-left" /></button>
                                    <button type="submit" className="btn btn-primary ms-2">NEXT <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div >
            </LoadingOverlay>
        </Formik>
    );
}

export default CreateGradeLearner;
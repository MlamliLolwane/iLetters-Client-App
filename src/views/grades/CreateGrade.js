// 'cell_phone',
// 'whatsapp',
// 'email',
// 'preffered_contact_method'
import NavbarSignedIn from '.././../components/NavbarSignedIn';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import { postRequst } from '../../axiosClient';
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateGrade() {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    return (
        <Formik enableReinitialize={true}
            initialValues={{
                grade_number: "",
                grade_suffix: ""
            }} validationSchema={Yup.object({
                grade_number: Yup.number().required('Grade Number Required'),
                grade_suffix: Yup.string().required('Grade Suffix Required')
            })} onSubmit={values => {
                setActive(true);
                axios.post('http://localhost:8000/api/grades/store', values)
                        .then(() => {
                            setActive(false);
                            navigate('/grades/index');
                        }).catch(error => {
                            console.log(error);
                            setActive(false);
                        })
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
                                <h3 className="text-center text-white">CONTACTS</h3>

                                <h6 className="text-center text-white fw-lighter">Use this form to add contact details of the learner</h6>

                                <div class="form-floating my-4 mx-5">
                                    <Field type="number" name="grade_number" class="form-control" id="floatingInput" placeholder=" " />
                                    <label for="floatingInput">Grade Number</label>
                                    <ErrorMessage name="grade_number">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div class="form-floating mb-3 mx-5">
                                    <Field type="text" name="grade_suffix" class="form-control" id="floatingInput" placeholder=" " />
                                    <label for="floatingInput">Grade Suffix</label>
                                    <ErrorMessage name="grade_suffix">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="text-center mt-5">
                                    <button type="submit" class="btn btn-primary">ADD GRADE</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div >
            </LoadingOverlay>
        </Formik>
    );
}

export default CreateGrade;
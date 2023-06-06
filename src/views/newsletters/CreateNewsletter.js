import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { postRequst } from '../../axiosClient';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreateNewsletter() {
    // const [title] = useState("");
    // const [body] = useState("");
    const [active, setActive] = useState(false);
    const [grades, setGrades] = useState([]);
    const [gradeNumbers, setGradeNumbers] = useState([]);

    useEffect(() => {
        setActive(true);
        axios.get('http://localhost:8000/api/grades/distinct')
            .then((response) => {
                setGradeNumbers([...new Set(response.data.map(grade => grade.grade_number))]);
                setGrades(response.data);
                setActive(false);
            }).catch(e => {
                console.log(e);
                setActive(false);
            })
    }, [])

    return (
        <Formik
            initialValues={{
                title: "",
                body: "",
                grades: []
            }} validationSchema={Yup.object({
                title: Yup.string().required('Newsletter title is required'),
                body: Yup.string().required('Newsletter body is required'),
                grades:
                    Yup.array().of(Yup.string()).min(1, 'Please select at least one grade and class')
            })} onSubmit={values => {
                setActive(true);
                axios.post('http://localhost:8000/api/newsletters/store', values)
                    .then((response) => {
                        console.log(response);
                        setActive(false);
                    }).catch((error) => {
                        setActive(false);
                        console.log(error);
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
                                <h3 className="text-center text-white">NEWSLETTER</h3>

                                <h6 className="text-center text-white fw-lighter">Use this form to compose a newsletter.</h6>

                                <div className="form-floating my-4 mx-5">
                                    <Field type="text" className="form-control" name="title" placeholder=" " />
                                    <label htmlFor="title">Title</label>
                                    <ErrorMessage name="title">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                {/* <div className="form-floating mb-3 mx-5">
                                    <Field type="textarea" className="form-control" placeholder=" " name="body" style={{ height: "100px" }} />
                                    <label htmlFor="body">Body</label>
                                    <ErrorMessage name="body">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div> */}

                                <div class="form-floating mb-3 mx-5">
                                    <Field className="form-control" placeholder=" " name="body" style={{ height: "100px" }} />
                                    <label htmlFor="body">Body</label>
                                    <ErrorMessage name="body">
                                        {message => <div className="validation-message">{message}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-floating mx-5 pb-5">
                                    <label htmlFor="floatingInput">SELECT CLASSES</label>
                                </div>
                                {
                                    gradeNumbers.map((gradeNumber) => {
                                        return (
                                            <div>
                                                <div className="form-floating mx-5 pb-5">
                                                    <label htmlFor="floatingInput">Grade {gradeNumber}</label>
                                                </div>
                                                {
                                                    grades.map((grade) => {
                                                        if (grade.grade_number == gradeNumber) {
                                                            return (
                                                                <div className="form-check form-check-inline mx-5">
                                                                    <Field className="form-check-input" type="checkbox" name="grades" value={grade.id.toString()} />
                                                                    <label className="form-check-label text-white" htmlFor="whatsapp">Grade {grade.grade_number}{grade.grade_suffix}</label>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }

                                            </div>
                                        )
                                    })
                                }

                                <ErrorMessage name="grades">
                                    {message => <div className="validation-message mx-5">{message}</div>}
                                </ErrorMessage>

                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-primary">CREATE NEWSLETTER <FontAwesomeIcon icon="fa-solid fa-check-circle" /></button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <Footer />
                </div>
            </LoadingOverlay>
        </Formik>
    );
}

export default CreateNewsletter;
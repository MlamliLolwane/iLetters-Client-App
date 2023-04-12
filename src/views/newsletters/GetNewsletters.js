import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRequest } from '../../axiosClient';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
function GetNewsletters() {
    const [newsletters, setNewsletters] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/newsletters/get-newsletters')
            .then((response) => {
                setNewsletters(response.data);
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
            text={"Loading..."}
        >
            <div>
                <NavbarSignedIn />

                <div className="container">
                    <div className="row mt-5 pb-2">
                        <div className="col">
                            <h5 className="fw-bold d-inline">ALL NEWSLETTERS</h5>
                            <NavLink to="/newsletters/add" className="btn btn-sm btn-primary float-end" href="#">
                                CREATE NEWSLETTER <FontAwesomeIcon icon="fa-solid fa-plus-circle" /> </NavLink>
                        </div>

                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <div class="table-responsive">
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th>TITLE</th>
                                            <th>DATE SENT</th>
                                            <th>SENT TO GRADE(S)</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            newsletters.map((newsletter) => {
                                                return (
                                                    <tr key={newsletter.id}>
                                                        <td className="fw-semibold">{newsletter.title}</td>
                                                        <td className="fw-semibold">{newsletter.created_at}</td>
                                                        <td className="fw-semibold">{newsletter.grades}</td>
                                                        <td><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </LoadingOverlay>
    );
}

export default GetNewsletters;
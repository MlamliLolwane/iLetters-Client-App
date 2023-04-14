import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { getRequest } from '../../axiosClient';
import { useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';

function Home() {
    const [usageStatistics, setUsageStatistics] = useState([]);
    const [active, setActive] = useState(true);

    useEffect(() => {
        // axios.get('http://localhost:8000/api/query/dashboard')
        //     .then((response) => {
        //         setUsageStatistics(response.data.data);
        //         setActive(false);
        //     })
        const dashboard = getRequest('query/dashboard');
        console.log(dashboard);
        //setUsageStatistics(dashboard.data.data);
        setActive(false);

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
                    <div className="row mt-5 pb-3">
                        <div className="col mx-4">
                            <h5 className="fw-bold d-inline">USAGE STATISTICS</h5>
                        </div>
                    </div>
                    {
                        <div className="row mb-5">
                            <div className="col-lg form-background mx-lg-4 py-4">
                                <h6 className="text-center text-white">NEWSLETTERS</h6>
                                <p style={{ fontSize: "50px" }} className="text-white text-center">{usageStatistics.newsletters}</p>
                                <div className="text-center">
                                    <NavLink to="/newsletters/index"><button type="button" className="btn btn-primary mx-auto">
                                        VIEW NEWSLETTERS <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                                </div>
                            </div>

                            <div className="col-lg form-background mx-lg-4 py-4 my-5 my-lg-0">
                                <h6 className="text-center text-white">LEARNERS</h6>
                                <p style={{ fontSize: "50px" }} className="text-white text-center">{usageStatistics.learners}</p>
                                <div className="text-center">
                                    <NavLink to="/learners/index"><button type="button" className="btn btn-primary mx-auto">
                                        VIEW LEARNERS <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                                </div>
                            </div>

                            <div className="col-lg form-background mx-lg-4 py-4">
                                <h6 className="text-center text-white">GRADES</h6>
                                <p style={{ fontSize: "50px" }} className="text-white text-center">{usageStatistics.grades}</p>
                                <div className="text-center">
                                    <NavLink to="/grades/index"><button type="button" className="btn btn-primary mx-auto">
                                        VIEW GRADES <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                                </div>
                            </div>
                        </div>

                    }
                </div>
                <Footer />
            </div>
        </LoadingOverlay>
    );
}

export default Home;
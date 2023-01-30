import NavbarSignedIn from '.././../components/NavbarSignedIn';
import Footer from '.././../components/Footer';

function GetSchool() {
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto form-background pt-5">
                        <h5 className="text-center text-white">SCHOOL INFORMATION</h5>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-light text-white text-center">School Name</td>
                                        <td className="fw-light text-white text-center">Golfview Combined School</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Email Address</td>
                                        <td className="fw-light text-white text-center">golviewhigh@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Primary Phone</td>
                                        <td className="fw-light text-white text-center">0183664517</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Secondary Phone</td>
                                        <td className="fw-light text-white text-center">0613544879</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Physical Address</td>
                                        <td className="fw-light text-white text-center">Golfview Combined School</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-light text-white text-center">Postal Address</td>
                                        <td className="fw-light text-white text-center">Golfview Combined School</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default GetSchool;
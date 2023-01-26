import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function CreateLearner() {
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">LEARNER</h3>

                        <h6 className="text-center text-white fw-lighter">Step 1 of 3: Use this form to add information of the learner.</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">First Name</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Last Name</label>
                        </div>

                        <div className="text-center mt-5">
                        <NavLink to="/grade-learner/add"><button type="button" class="btn btn-primary">NEXT <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CreateLearner;
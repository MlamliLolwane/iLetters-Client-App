// 'cell_phone',
// 'whatsapp',
// 'email',
// 'preffered_contact_method'
import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function CreateGradeLearner() {
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">GRADE</h3>

                        <h6 className="text-center text-white fw-lighter">Step 2 of 3: Use this form to assign the learner to a grade</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="number" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Grade</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Learner</label>
                        </div>

                        <div className="text-center mt-5">
                        <NavLink to="/learners/add" style={{textDecoration:"none"}}><button type="button" class="btn btn-secondary me-2"> PREV <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-left" /></button> </NavLink>
                        <NavLink to="/contacts/add" style={{textDecoration:"none"}}><button type="button" class="btn btn-primary ms-2">NEXT <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-right" /></button> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CreateGradeLearner;
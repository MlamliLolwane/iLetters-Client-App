import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateNewsletter() {
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">NEWSLETTER</h3>

                        <h6 className="text-center text-white fw-lighter">Use this form to compose a newsletter.</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Title</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <textarea class="form-control" placeholder=" " id="floatingTextarea" style={{height:"100px"}}></textarea>
                            <label for="floatingTextarea">Body</label>

                        </div>

                        <div class="form-floating my-4 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Comment (Optional)</label>
                        </div>

                        <div className="text-center mt-5">
                            <button type="button" class="btn btn-primary">CREATE NEWSLETTER <FontAwesomeIcon icon="fa-solid fa-check-circle" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewsletter;
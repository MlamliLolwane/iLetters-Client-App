// 'cell_phone',
// 'whatsapp',
// 'email',
// 'preffered_contact_method'
import NavbarSignedIn from '.././../components/NavbarSignedIn';

function CreateGrade() {
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">CONTACTS</h3>

                        <h6 className="text-center text-white fw-lighter">Use this form to add contact details of the learner</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="number" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Grade Number</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Grade Suffix</label>
                        </div>

                        <div className="text-center mt-5">
                            <button type="button" class="btn btn-primary">ADD GRADE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CreateGrade;
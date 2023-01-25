// 'cell_phone',
// 'whatsapp',
// 'email',
// 'preffered_contact_method'
import NavbarSignedIn from '.././../components/NavbarSignedIn';

function CreateContact() {
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">CONTACTS</h3>

                        <h6 className="text-center text-white fw-lighter">Use this form to add contact details of the learner</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="email" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Cellphone Number</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="email" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Whatsapp Number</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="email" class="form-control" id="floatingInput" placeholder=" " />
                            <label for="floatingInput">Email Address</label>
                        </div>

                        <div class="form-floating mx-5 pb-5">
                            <label for="floatingInput">Preferred Contact Method</label>
                        </div>
                        <div class="form-check form-check-inline mx-5">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label text-white" for="inlineRadio1">Whatsapp</label>
                        </div>
                        <div class="form-check form-check-inline mx-5">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label text-white" for="inlineRadio2">Email</label>
                        </div>
                        <div class="form-check form-check-inline mx-5">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label text-white" for="inlineRadio2">Both</label>
                        </div>

                        <div className="text-center mt-5">
                            <button type="button" class="btn btn-primary">CREATE CONTACT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CreateContact;
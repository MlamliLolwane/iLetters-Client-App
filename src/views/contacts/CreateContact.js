import NavbarSignedIn from '.././../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import {postRequst} from '../../axiosClient';

function CreateContact() {
    const [cellphone, setCellPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [preferredContactMethod, setPreferredContactMethod] = useState('');
    //This is where we take the data from the Learner, Grade and Contacts steps and send them to the server
    const createLearnerInfo = (e) => {
        e.preventDefault();

        const contactData = new FormData();

        contactData.append('cell_phone', cellphone);
        contactData.append('whatsapp', whatsapp);
        contactData.append('email', email);
        contactData.append('preffered_contact_method', preferredContactMethod);

        const learner = postRequst('learners/store', contactData);
        const grade_learner = postRequst('grade_learner/store', contactData);
        const contact = postRequst('contacts/store', contactData);

        console.log(contact);
    }
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">CONTACTS</h3>

                        <h6 className="text-center text-white fw-lighter">Step 3 of 3: Use this form to add contact details of the learner</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="text" class="form-control" id="cellphone" placeholder=" " 
                            value={cellphone} onChange={(e) => {setCellPhone(e.target.value)}}/>
                            <label for="cellphone">Cellphone Number</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="text" class="form-control" id="whatsapp" placeholder=" " 
                            value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}}/>
                            <label for="whatsapp">Whatsapp Number</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="email" class="form-control" id="email" placeholder=" " 
                            value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            <label for="email">Email Address</label>
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
                        <NavLink to="/grade-learner/add" style={{textDecoration:"none"}}><button type="button" class="btn btn-secondary me-2"> PREV <FontAwesomeIcon icon="fa-solid fa-arrow-alt-circle-left" /></button> </NavLink>
                            <button type="button" onClick={createLearnerInfo} class="btn btn-primary">FINISH <FontAwesomeIcon icon="fa-solid fa-check-circle" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CreateContact;
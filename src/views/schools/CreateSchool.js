import NavbarSignedIn from '../../components/NavbarSignedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '.././../components/Footer';
import { useState } from 'react';
import {postRequst} from '../../axiosClient';

function CreateSchool() {
    const [schoolName, setSchoolName] = useState('');
    const [email, setEmail] = useState('');
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState('');
    const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState('');
    const [physicalAddress, setPhysicallAddress] = useState('');
    const [postalAddress, setPostalAddress] = useState('');

    const createSchool = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('school_name', schoolName);
        formData.append('email', email);
        formData.append('primary_phone_number', primaryPhoneNumber);
        formData.append('secondary_phone_number', secondaryPhoneNumber);
        formData.append('physical_address', physicalAddress);
        formData.append('postal_address', postalAddress);

        const school = postRequst('schools/store', formData);

        console.log(school);
    }
    return (
        <div>
            <NavbarSignedIn />

            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 mx-auto form-background py-5">
                        <h3 className="text-center text-white">SCHOOL</h3>

                        <h6 className="text-center text-white fw-lighter">Use this form to add the particulars of your school to the database.</h6>

                        <div class="form-floating my-4 mx-5">
                            <input type="text" class="form-control" id="floatingInput" value={schoolName} 
                            placeholder=" " onChange={(e) => {setSchoolName(e.target.value)}}/>
                            <label for="floatingInput">School Name</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="email" class="form-control" id="floatingInput" placeholder=" " 
                            value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            <label for="floatingInput">Email Address</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " 
                            value={primaryPhoneNumber} onChange={(e) => {setPrimaryPhoneNumber(e.target.value)}}/>
                            <label for="floatingInput">Phone Number</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <input type="text" class="form-control" id="floatingInput" placeholder=" " 
                            value={secondaryPhoneNumber} onChange={(e) => {setSecondaryPhoneNumber(e.target.value)}}/>
                            <label for="floatingInput">Alternative Phone Number (Optional)</label>
                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <textarea class="form-control" placeholder=" " id="physicalAddress" style={{ height: "130px" }} 
                            value={physicalAddress} onChange={(e) => {setPhysicallAddress(e.target.value)}}></textarea>
                            <label for="physicalAddress">Physical Address</label>

                        </div>

                        <div class="form-floating mb-3 mx-5">
                            <textarea class="form-control" placeholder=" " id="postalAddress" style={{ height: "130px" }}
                            value={postalAddress} onChange={(e) => {setPostalAddress(e.target.value)}}></textarea>
                            <label for="postalAddress">Postal Address (Leave blank if same as physical address)</label>

                        </div>

                        <div className="text-center mt-5">
                            <button type="submit" onClick={createSchool} class="btn btn-primary">CREATE SCHOOL <FontAwesomeIcon icon="fa-solid fa-check-circle" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default CreateSchool;
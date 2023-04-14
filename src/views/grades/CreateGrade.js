// 'cell_phone',
// 'whatsapp',
// 'email',
// 'preffered_contact_method'
import NavbarSignedIn from '.././../components/NavbarSignedIn';
import LoadingOverlay from 'react-loading-overlay-ts';
import HashLoader from 'react-spinners/HashLoader';
import { postRequst } from '../../axiosClient';
import { useState } from 'react';

function CreateGrade() {
    const [gradeNumber, setGradeNumber] = useState('');
    const [gradeSuffix, setGradeSuffix] = useState('');
    const [active, setActive] = useState(false);
    setActive(false);

    function createGrade(e)
    {
        e.preventDefault();
        setActive(true);

        const gradeData = new FormData();

        gradeData.append('grade_number', gradeNumber);
        gradeData.append('grade_suffix', gradeSuffix);

        postRequst('grades/store', gradeData);

        setActive(false);
    }

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
                                <button type="button" onClick={createGrade} class="btn btn-primary">ADD GRADE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </LoadingOverlay>
    );
}

export default CreateGrade;
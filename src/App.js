import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './views/Home';
import About from './views/About';
import ContactUs from './views/Contact';

/**
 * Contacts
 */
import CreateContact from './views/contacts/CreateContact';

/**
 * Learners
 */
import CreateLearner from './views/learners/CreateLearner';

/**
 * Schools
 */
import GetSchools from './views/schools/GetSchool';

/**
 * Grades
 */
import CreateGrade from './views/grades/CreateGrade';
import CreateGradeLearner from './views/grades/CreateGradeLearner';
import GetGrades from './views/grades/GetGrades';

/**
 * Newsletters
 */
import GetNewsletters from './views/newsletters/GetNewsletters';
import CreateNewsletter from './views/newsletters/CreateNewsletter';

/**
 * Aggregates
 */
import LearnerInformation from './views/aggregated/LearnerInformation';



import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faHouse, faCircleInfo, faMessage, faShare, faUser, faUserGraduate, 
  faEnvelope, faSchool, faList, faEdit, faEllipsisVertical, faPlusCircle, faArrowAltCircleRight, 
  faArrowAltCircleLeft, faCheckCircle }
  from "@fortawesome/free-solid-svg-icons";

library.add(faRightToBracket, faHouse, faCircleInfo, faMessage, faShare, 
  faUser, faUserGraduate, faEnvelope, faSchool, faList, faEdit, faEllipsisVertical, faPlusCircle, 
  faArrowAltCircleRight, faArrowAltCircleLeft, faCheckCircle);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />

        {/* Contact Routes */}
        <Route exact path="/contacts/add" element={<CreateContact />} />

        {/* Learner Routes */}
        <Route exact path="/learners/add" element={<CreateLearner />} />

        {/* School Routes */}
        <Route exact path="/schools/index" element={<GetSchools />} />

        {/* Grade Routes */}
        <Route exact path="/grades/index" element={<GetGrades />} />
        <Route exact path="/grades/add" element={<CreateGrade />} />
        <Route exact path="/grade-learner/add" element={<CreateGradeLearner />} />

        {/* Newsletters Routes */}
        <Route exact path="/newsletters/index" element={<GetNewsletters />} />
        <Route exact path="/newsletters/add" element={<CreateNewsletter />} />
        
        {/* Aggregates Routes */}
        <Route exact path="/learners/index" element={<LearnerInformation />} />
      </Routes>
    </div>
  );
}

export default App;

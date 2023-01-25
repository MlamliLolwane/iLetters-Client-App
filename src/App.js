import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

/**
 * Contacts
 */
import CreateContact from './views/contacts/CreateContact';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faHouse, faCircleInfo, faMessage, faShare, faUser, faUserGraduate, faEnvelope, faSchool, faList }
  from "@fortawesome/free-solid-svg-icons";

library.add(faRightToBracket, faHouse, faCircleInfo, faMessage, faShare, faUser, faUserGraduate, faEnvelope, faSchool, faList);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* Contact Routes */}
        <Route exact path="/contacts/create" element={<CreateContact />} />

      </Routes>
    </div>
  );
}

export default App;


//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//PAGES
import Home from './Pages/Home.js'

//COMPONENTS
import Navbar from "./Components/Navbar.js"
import SignUpForm from "./Components/SignUpForm.js";
import TherapistDashboardHR from "./Dashboards/TherapistDashboardHR.js";
import TherapistDashboardMR from "./Dashboards/TherapistDashboardMR.js";
import TherapistDashboardLR from "./Dashboards/TherapistDashboardLR.js";
import PatientDashboard from "./Dashboards/PatientDashboard.js";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/therapist/:tid/highrisk" element={<TherapistDashboardHR />} />
          <Route path="/therapist/:tid/mediumrisk" element={<TherapistDashboardMR />} />
          <Route path="/therapist/:tid/lowrisk" element={<TherapistDashboardLR />} />
         <Route path="/patient" element={<PatientDashboard />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

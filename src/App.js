
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
import PatientDashboard2 from "./Dashboards/PatientDashboard2.js";
import PatientEntriesUnreadGrid from "./Components/PatientEntriesUnreadGrid.js";
import PatientEntriesReadGrid from "./Components/PatientEntriesReadGrid.js"
import PatientJournalEntry from "./Components/Patients/PatientJournalEntry.js";
import PatientInviteForm from "./Components/Patients/PatientInviteForm.js";
import LogIn from "./Components/LogIn.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/invite" element={<PatientInviteForm />} />
          <Route path="/therapist/:tid/highrisk" element={<TherapistDashboardHR />} />
          <Route path="/therapist/:tid/mediumrisk" element={<TherapistDashboardMR />} />
          <Route path="/therapist/:tid/lowrisk" element={<TherapistDashboardLR />} />
          <Route path="/patient/:id/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/:id/dashboardProfile" element={<PatientDashboard2 />} />
          <Route path="/therapist/:tid/patient/:pid/read" element={<PatientEntriesReadGrid/>} />
          <Route path="/therapist/:tid/patient/:pid/unread" element={<PatientEntriesUnreadGrid/>} />
          <Route path="/therapist/:tid/patient/:pid/journals/unread/:jid" element={<PatientJournalEntry />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

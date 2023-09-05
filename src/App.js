
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import SignUpForm from "./Components/SignUpForm.js"
import LogIn from './Components/LogIn';
import Template from './Components/Template';
//import TherapistDashboard from './Components/TherapistDashboard.js';
//import PatientJournalListing from './Components/PatientJournalListing';

function App() {
  return (
    <div>
      <Navbar />
      {/* <TherapistDashboard /> */}
      {/* <PatientJournalListing /> */}
       <SignUp />
       <LogIn />
       {/* <SignUpForm />
       <Template /> 
       <Footer /> */}
     
    </div>
  );
}

export default App;

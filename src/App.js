
//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from './Pages/Home.js'

//COMPONENTS
import Navbar from "./Components/Navbar.js"
import SignUpForm from "./Components/SignUpForm.js";
import TherapistDashboard from "./Dashboards/TherapistDashboard.js";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <TherapistDashboard />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          {/* <Route path="/dashboard" element={<TherapistDashboard />} /> */}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

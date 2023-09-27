import AuthDetails from "./AuthDetails";
import SearchBar from "./SearchBar.js";
import { useParams,Link } from "react-router-dom";
import { GrEmoji } from "react-icons/gr";

import { FiFrown,
  FiMeh,
  FiSmile
 } from "react-icons/fi";

import { 
  SlUserFollow,
  SlDocs, 
 } from "react-icons/sl";
import PatientInviteForm from "./Patients/PatientInviteForm";

 
export default function TherapistDashboardNav() {
  
  
  const { tid } = useParams();
  

  return (
   <nav className="m-2">
      <div className="">
        <ul className="flex justify-around text-center pl-16">
           <li className="">
             <Link to={`/therapist/${tid}/highrisk`}>
               <i className="text-3xl hover:opacity-40"><FiFrown /></i>
             <p>High Risk</p>
             </Link>
             
           </li>
           <li>
             <Link to={`/therapist/${tid}/mediumrisk`}>
                <i className="text-3xl hover:opacity-40"><FiMeh /></i>
                <p>Medium Risk</p>
              </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/lowrisk`}>
                <i className="text-3xl hover:opacity-40"><FiSmile /></i>
              <p>Low Risk</p>
              </Link>
              
           </li>
           <li>
             <Link to="/invite">
                <i className="text-3xl hover:opacity-40"><SlUserFollow /></i>
                <p>Send Invite</p>
                </Link>
          </li>
           <li>
             <Link to="/">
                <i className="text-3xl hover:opacity-40"><SlDocs /></i>
              <p>Patient Profiles</p></Link>
           </li>
           <li><SearchBar  /></li>
          <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
};



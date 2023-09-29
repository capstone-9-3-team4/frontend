import AuthDetails from "./AuthDetails";
import SearchBar from "./SearchBar.js";
import { useParams,Link,useLocation } from "react-router-dom";
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
  const location = useLocation();
  
  // Determine the active route based on the pathname
  const activeRoute = location.pathname.includes('highrisk')
    ? 'highrisk'
    : location.pathname.includes('mediumrisk')
    ? 'mediumrisk'
    : 'lowrisk';

  return (
    <nav className="m-2">
      <div className="">
        <ul className="flex justify-around text-center pl-16">
          <li className="">
            <Link to={`/therapist/${tid}/highrisk`}>
              <div className={`flex flex-col justify-center text-center ${activeRoute === 'highrisk' ? 'text-red-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl"><FiFrown /></i>
                <p>High Risk</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/therapist/${tid}/mediumrisk`}>
              <div className={`flex flex-col justify-center text-center ${activeRoute === 'mediumrisk' ? 'text-yellow-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl"><FiMeh /></i>
                <p>Medium Risk</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/therapist/${tid}/lowrisk`}>
              <div className={`flex flex-col justify-center text-center ${activeRoute === 'lowrisk' ? 'text-green-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl"><FiSmile /></i>
                <p>Low Risk</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/invite">
              <div className={`flex flex-col justify-center text-center ${activeRoute === 'invite' ? 'text-blue-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl"><SlUserFollow /></i>
                <p>Send Invite</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={`flex flex-col justify-center text-center ${activeRoute === 'patientprofiles' ? 'text-purple-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl"><SlDocs /></i>
                <p>Patient Profiles</p>
              </div>
            </Link>
          </li>
          <li><SearchBar /></li>
          {/* <li><AuthDetails /></li> */}
        </ul>
      </div>
    </nav>
  );
}

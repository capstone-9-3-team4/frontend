//import AuthDetails from "./AuthDetails";
import SearchBar from "./SearchBar.js";
import { useParams,Link } from "react-router-dom";
import { GrEmoji } from "react-icons/gr";

import { BiArrowBack} from "react-icons/bi";

 import { CiRead,
  CiUnread
 } from "react-icons/ci";

import { 
  SlUserFollow,
  SlDocs, 
 } from "react-icons/sl";
//import PatientInviteForm from "./Patients/PatientInviteForm";

 
export default function TherapistDashboardNavGrid({tid,pid}) {
  
  
  //const { tid } = useParams();
  

  return (
   <nav className="m-2">
      <div className="">
        <ul className="flex justify-around text-center pl-16">
           <li className="">
             <Link to={`/therapist/${tid}/highrisk`}>
              <div className="flex flex-col justify-center text-center">
               <i className="text-3xl hover:opacity-40"><BiArrowBack /></i>
             <p>Back to Profiles</p>
             </div>
             </Link>
             
           </li>
           <li>
             <Link to={`/therapist/${tid}/patient/${pid}/unread`}>
                <i className="text-3xl hover:opacity-40"><CiUnread /></i>
                <p>Unread Journal Entries</p>
              </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/patient/${pid}/read`}>
                <i className="text-3xl hover:opacity-40"><CiRead /></i>
              <p>Read Journal Entries</p>
              </Link>
              
           </li>
           
        </ul>
      </div>
    </nav>
  );
};
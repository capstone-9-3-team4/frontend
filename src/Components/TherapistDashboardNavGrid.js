//import AuthDetails from "./AuthDetails";
//import SearchBar from "./SearchBar.js";
import { Link,useLocation } from "react-router-dom";
//import { GrEmoji } from "react-icons/gr";

import { BiArrowBack} from "react-icons/bi";

 import { CiRead,
  CiUnread
 } from "react-icons/ci";

// import { 
//   SlUserFollow,
//   SlDocs, 
//  } from "react-icons/sl";
//import PatientInviteForm from "./Patients/PatientInviteForm";

 
export default function TherapistDashboardNavGrid({tid,pid}) {
  const location = useLocation();
  
  const activeRoute = location.pathname.includes('unread')? ('unread'): ('read')
  
  

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
                <i className="text-3xl hover:opacity-40" ><CiUnread className={`${activeRoute ==='unread' ? "text-dark-blue " : null}`}/></i>
                <p className={`text-lg hover:opacity-40 ${activeRoute ==='unread' ? 'text-bold underline text-dark-blue text-4xl ' : null}`}>Unread Journal Entries</p>
              </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/patient/${pid}/read`}>
                <i className="text-3xl hover:opacity-40"><CiRead className={`${activeRoute ==='read' ? "text-dark-blue" : null}`} /></i>
                <p className={`text-lg hover:opacity-40 ${activeRoute ==='read' ? 'text-bold underline text-dark-blue text-4xl' : null}`}>Read Journal Entries</p>
              </Link>
              
           </li>
           
        </ul>
      </div>
    </nav>
  );
};
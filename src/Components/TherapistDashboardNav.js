import AuthDetails from "./AuthDetails";
import SearchBar from "./SearchBar.js";
import { useParams,Link } from "react-router-dom";
import { 
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
  FcAlphabeticalSortingAz,
  
} from "react-icons/fc";



export default function TherapistDashboardNav() {
  
  
  const { tid } = useParams();
  

  return (
   <nav className="p-2">
      <div >
        <ul className="container flex justify-around">
          {/* <div className="border-4 border-blue rounded-2xl"> */}
           <li>
             <Link to={`/therapist/${tid}/highrisk`}>
               <i className="text-red text-5xl hover:opacity-40"><FcHighPriority /></i>
             </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/mediumrisk`}>
                <i className="text-dark-green text-5xl hover:opacity-40"><FcMediumPriority /></i>
              </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/lowrisk`}>
                <i className="text-dark-green text-5xl hover:opacity-40"><FcLowPriority /></i>
              </Link>
           </li>
           {/* </div> */}
           <li>
             <Link to="/">
                <i className="text-dark-green text-5xl hover:opacity-40"><FcAlphabeticalSortingAz /></i>
              </Link>
           </li>
           <li><SearchBar  /></li>
          <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
};



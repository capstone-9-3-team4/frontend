import AuthDetails from "./AuthDetails";
import { 
  // HiOutlineDesktopComputer,
  // HiUserGroup,
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority
  
} from "react-icons/fc";
import { useParams,Link } from "react-router-dom";

export default function TherapistDashboardNav() {
  
  
  const { tid } = useParams();
  

  return (
   <nav className="p-2">
      <div className="container flex justify-center">
        <ul className="flex space-x-5">
         
           <li>
             <Link to={`/therapist/${tid}/highrisk`}>
               <i className="text-dark-green text-6xl hover:text-7xl"><FcHighPriority /></i>
             </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/mediumrisk`}>
                <i className="text-dark-green text-6xl hover:text-7xl"><FcMediumPriority /></i>
              </Link>
           </li>
           <li>
             <Link to={`/therapist/${tid}/lowrisk`}>
                <i className="text-dark-green text-6xl hover:text-7xl"><FcLowPriority /></i>
              </Link>
           </li>


          {/* <li>
            <a href="#" className="text-dark-green text-2xl hover:text-light-green"><HiOutlineDesktopComputer /></a>
          </li>
          <li>
            <a href="#" className="text-dark-green text-2xl hover:text-light-green"><HiUserGroup /></a>
          </li> */}
          {/* <li>
            <a href="#" className="text-dark-green hover:text-light-green"></a>
          </li> */}
          <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
};



import AuthDetails from "./AuthDetails";
import { 
  HiOutlineDesktopComputer,
  HiUserGroup
  
} from "react-icons/hi";

export default function TherapistDashboardNav() {
  return (
   <nav className="p-2">
      <div className="container flex justify-center">
        <ul className="flex space-x-5">
          <li>
            <a href="#" className="text-dark-green text-2xl hover:text-light-green"><HiOutlineDesktopComputer /></a>
          </li>
          <li>
            <a href="#" className="text-dark-green text-2xl hover:text-light-green"><HiUserGroup /></a>
          </li>
          {/* <li>
            <a href="#" className="text-dark-green hover:text-light-green"></a>
          </li> */}
          <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
};



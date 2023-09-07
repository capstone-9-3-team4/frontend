import Logo from "../../../src/images/logo.png"
import AuthDetails from "../AuthDetails";
//GO TO AIRBNB SITE TO BUILD A SIMILAR NAVBAR

export default function TherapistDashboardNav() {
  return (
    <nav className="bg-dark-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><img src={Logo} width="100" /></div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-light-green">Dashboard</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-light-green">Patients</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-light-green">Bell with Notification</a>
          </li>
          <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
}
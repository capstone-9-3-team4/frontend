import AuthDetails from "./AuthDetails";



export default function PatientDashboardNav() {
 
  
  return (
   <nav className="p-2">
      <div>
        <p className="text-center text-dark-green uppercase">Welcome back</p>
        <ul className="container flex justify-around">
        <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
};



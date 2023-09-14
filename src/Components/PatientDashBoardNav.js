import AuthDetails from "./AuthDetails";



export default function PatientDashboardNav() {
 
  
  return (
   <nav className="p-2">
      <div >
        <ul className="container flex justify-around">
        <li><AuthDetails /></li>
        </ul>
      </div>
    </nav>
  );
};



import PatientProfileByTherapistread from "./Patients/PatientProfileByTherapistread.js"
import TherapistDashboardNavGrid from "../Components/TherapistDashboardNavGrid.js"
import { useParams} from "react-router-dom";
//this is a test


export default function PatientEntriesReadGrid() {
    const { tid, pid } = useParams();
  return (
    <div>
        <TherapistDashboardNavGrid tid={tid}  pid={pid}/>
         <PatientProfileByTherapistread  tid={tid}  pid={pid}/> 
        
        
    </div>
  )
}
import PatientProfileByTherapistUnread from "./Patients/PatientProfileByTherapistUnread.js"
import TherapistDashboardNavGrid from "../Components/TherapistDashboardNavGrid.js"
import { useParams} from "react-router-dom";
//this is a test


export default function PatientEntriesUnreadGrid() {
    const { tid, pid } = useParams();
  return (
    <div>
        <TherapistDashboardNavGrid tid={tid}  pid={pid}/>
        <PatientProfileByTherapistUnread  tid={tid}  pid={pid}/>
        
        
    </div>
  )
}
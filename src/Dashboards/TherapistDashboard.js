import PatientJournalCards from "../Components/Patients/PatientJournalCards.js"
import TherapistDashboardNav from "../Components/Therapists/TherapistDashBoardNav.js"

export default function TherapistDashboard() {
  return (
    <div>
        <TherapistDashboardNav />
        <PatientJournalCards />
        
    </div>
  )
}

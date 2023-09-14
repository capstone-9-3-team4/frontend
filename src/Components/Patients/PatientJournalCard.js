import ProfilePic from "../../images/profilepic.png"
import { Link } from "react-router-dom";

export default function PatientJournalCard ({ patient }) {

    return (
        <div className="max-w-sm overflow-hidden border-2 hover:border-indigo-500 rounded-3xl shadow-lg ">
            <Link to={`/therapist/${patient.t_id}/patient/${patient.p_id}`}>
                <img className="w-full" src={`${patient.profile_picture}`} alt="PatientPic" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{patient.p_first_name}  {patient.p_last_name}</div>
                    <p className="text-gray-700 text-base"></p>
                </div>
                </Link>
        </div>
    );
} 
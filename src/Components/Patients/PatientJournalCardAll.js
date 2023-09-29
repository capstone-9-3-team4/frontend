import { Link } from "react-router-dom";

export default function PatientJournalCardAll ({ patient }) {

    return (
        <div className="max-w-sm overflow-hidden border-2 hover:border-indigo-500 hover:scale-110 hover:shadow-xl  rounded-3xl shadow-lg ">
            <Link to={`/therapist/${patient.therapist_id}/patient/${patient.id}/unread`}>
                <img className="w-full h-24" src={`${patient.profile_picture}`} alt="PatientPic" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{patient.first_name}  {patient.last_name}</div>
                    <p className="text-gray-700 text-base"></p>
                </div>
                </Link>
        </div>
    );
} 
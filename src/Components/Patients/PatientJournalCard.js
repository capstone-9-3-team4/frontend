import ProfilePic from "../../images/profilepic.png"


export default function PatientJournalCard ({ patient }) {
    return (
        <div class="max-w-sm rounded overflow-hidden border-2 hover:border-indigo-500 rounded-3xl shadow-lg ">
            {/* <a href="#"> */}
                <img class="w-full" src={ProfilePic} alt="PatientPic" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{patient.p_first_name}  {patient.p_last_name}</div>
                    <p class="text-gray-700 text-base"></p>
                </div>
            {/* </a> */}
        </div>
    );
} 
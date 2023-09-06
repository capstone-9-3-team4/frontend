import ProfilePic from "../../images/profilepic.png"
export default function PatientJournalCard () {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <a href="#">
                <img class="w-full" src={ProfilePic} alt="PatientPic" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Patient Name</div>
                    <p class="text-gray-700 text-base"></p>
                </div>
            </a>
        </div>
    );
}
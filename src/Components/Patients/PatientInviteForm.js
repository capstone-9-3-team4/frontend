import PatientAddForm from "./PatientAddForm";

export default function PatientInviteForm() {
    
    
    return (
        <div className="bg-light-green m-8 p-8 rounded-2xl">
            <div className="font-bold text-3xl  text-dark-purple">Patient Invite Form</div>
            <div className="flex gap-3">
                <label className="align-middle">Patient Email:</label>
                <input 
                    placeholder="Email"
                    type="email"
                    />
                <button className="px-4 py-1 text-white font-light cursor-pointer tracking-wider bg-dark-green hover:bg-dark-purple rounded">Send Invite</button>
        
            </div>
            <div>
            <PatientAddForm />
            </div>
        </div>
        
    );
}
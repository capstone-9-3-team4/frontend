import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import TherapistDashboardNav from "../TherapistDashboardNav";

const API = process.env.REACT_APP_API_URL;

export default function PatientJournalEntry () {
    const { tid, pid, jid } = useParams();
    const [notes, setNotes] = useState("")
    const [journal, setJournal] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get(`${API}/therapist/${tid}/patients/${pid}/journals/unread/${jid}`)
        .then((response) => {
           
            setJournal(response.data);
            setNotes(response.data.therapist_notes)
            console.log(response.data)
           
        })
        .catch((e) => {
          console.warn("catch", e);
        });
    }, [tid, pid, jid]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setJournal(journal[`therapist_notes`] = notes)
       
        
        insertNotes();
        
    };
    
    const markAsRead = () => {
        setJournal(journal[`read`] = true)
        insertNotes()
    }

    const insertNotes = () => {
        
        axios
        .put(`${API}/journal/${jid}`, journal)
        .then(() => {
            
            navigate(`/therapist/${tid}/patient/${pid}/unread`);
            
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setNotes( event.target.value)
       
    }
  
    return (

       
       <div className={journal.analysis_score === 1 ? ('border-red-500') : journal.analysis_score === 2 ? ('border-yellow-500') : ('border-green-500') }> 
         <div className="justify-center mx-6 h-screen overflow-hidden border-4 rounded-3xl shadow-lg ">
            <div className="p-10 items-center">
                <h1 className="text-center uppercase font-bold text-3xl text-dark-purple "> Patient Journal & Analysis </h1>
                <div className="grid grid-cols-2 gap-6 mt-5">
                    <div className="justify-center mx-6 p-5 text-center border-4 rounded-3xl ">
                            <h2 className="font-bold text-dark-green uppercase text-center">Patient Journal Entry</h2>
                            <div >
                                <p className="mx-5">{journal.journal_entry} </p>
                            </div> 
                            <button className="px-4 py-1 mt-2 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                            onClick={markAsRead}
                            type="submit">Mark as Read</button>
                    </div>
                    <div className="justify-center mx-6 p-5 text-center border-4 rounded-3xl ">
                        <h2 className="font-bold  text-dark-green uppercase text-center">AI Analysis & Score - {journal.analysis_score}</h2>
                        <div>
                            <p className="mx-5">{journal.ai_response} </p>
                    </div>
                    </div>
                </div>

                <div className="justify-center mt-10 mx-6 p-5 text-center border-4 rounded-3xl ">
                        <h2 className="font-bold  text-dark-green uppercase">Therapist Notes</h2>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                className="w-full px-5 bg-light-green rounded-2xl focus:outline-none focus:bg-white" 
                                id="notes"
                                type="text"
                                name="notes"
                                placeholder="My Notes..." 
                                tabIndex="5"
                                value={notes}
                                onChange={handleTextChange}>
                            </textarea>
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                                type="submit"
                                >Submit</button>
                        </form>

                    </div>   
                    {/* <div className="rounded overflow-hidden shadow-lg">
                                <p className="mx-5">{journal.therapist_notes} </p>
                            </div>  */}
                </div>
            
        </div>
        </div>
       
    )
}
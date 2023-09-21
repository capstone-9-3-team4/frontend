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
        })
        .catch((e) => {
          console.warn("catch", e);
        });
    }, [tid, pid, jid]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hello')
        insertNotes();
    };

    const insertNotes = (notes) => {
        console.log("hello")
        axios
        .put(`${API}/journal/${jid}`, notes)
        .then(() => {
            // navigate(`${API}/therapist/${tid}/patients/${pid}`);
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setNotes({ ...notes, [event.target.id]: event.target.value})
        console.log(notes)
    }
  
    return (
       
       <div className={journal.analysis_score === 1 ? ('border-red-500') : journal.analysis_score === 2 ? ('border-yellow-500') : ('border-green-500') }>
        <div className="justify-center mx-6 overflow-hidden border-4 rounded-3xl shadow-lg ">
            <div className="p-10 items-center">
                <h1 className="text-center uppercase font-bold text-3xl text-dark-purple "> </h1>
                <div className="grid grid-cols-2 gap-6 mt-5">
                    <div className="text-center">
                            <h2 className="font-bold text-dark-green uppercase text-center">Patient Journal Entry</h2>
                            <div class="rounded overflow-hidden shadow-lg">
                                <p className="mx-5">{journal.journal_entry} </p>
                            </div> 
                            <button className="px-4 py-1 mt-2 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                            type="submit">Mark as Read</button>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold  text-dark-green uppercase text-center">AI Analysis & Score - {journal.analysis_score}</h2>
                        <div class="rounded overflow-hidden shadow-lg">
                            <p className="mx-5">Lorem ipsum is used to help designers plan out where the content will sit, without needing to wait for the content to be written and approved. It's also used to create a natural looking block of text that doesn't distract from the layout. </p>
                    </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                        <h2 className="font-bold  text-dark-green uppercase">Therapist Notes</h2>
                        <form>
                            <textarea 
                                className="w-full px-5 bg-light-green rounded focus:outline-none focus:bg-white" 
                                id="notes"
                                type="text"
                                name="notes"
                                placeholder="My Notes..." 
                                tabIndex="5"
                                value={notes.notes}
                                onChange={handleTextChange}>
                            </textarea>
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                                type="submit"
                                onSubmit={handleSubmit}>Submit</button>
                        </form>

                    </div>   
                    <div class="rounded overflow-hidden shadow-lg">
                                <p className="mx-5">{journal.therapist_notes} </p>
                            </div> 
                </div>
            
        </div>
        </div>
    )
}
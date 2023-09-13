import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function PatientJournalEntry () {
    const { tid, pid, jid } = useParams();

    const [journal, setJournal] = useState({});

    useEffect(() => {
      axios
        .get(`${API}/therapist/${tid}/patients/${pid}/journals/unread/${jid}`)
        .then((response) => {
            setJournal(response.data);
            console.log(journal)
        })
        .catch((e) => {
          console.warn("catch", e);
        });
    }, [tid, pid, jid]);

    return (
         <div className="font-sans h-screen">
            <div className="m-8 p-10 container items-center">
            <h1 className="uppercase font-bold text-3xl text-dark-purple "> </h1>
                <div className="grid grid-cols-2 gap-10 mt-5">
                    <div className="text-center">
                            <h2 className="font-bold text-dark-green uppercase text-center">Patient Journal Entry</h2>
                            <div class="rounded overflow-hidden shadow-lg">
                                <p className="mx-5">{journal.journal_entry} </p>
                            </div> 
                            <button className="px-4 py-1 mt-2 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                            type="submit">Read</button>
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
                            <textarea className="w-full px-5 py-1 text-gray-700 bg-light-green rounded focus:outline-none focus:bg-white" name="message" placeholder="My Notes..." tabindex="5"></textarea>
                        </form>
                
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                                type="submit">Submit</button>
                    </div>   
                </div>
            
        </div>
    )
}
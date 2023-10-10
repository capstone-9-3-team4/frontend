//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    IoCloseSharp,
 } from "react-icons/io5";

const API = process.env.REACT_APP_API_URL;

export default function PatientJournalEntry ({journalentryunread,setJournalEntryUnRead}) {
  
    const [notes, setNotes] = useState("")
    const [journal, setJournal] = useState({});
    

    useEffect(() => {
      axios
        .get(`${API}/journal/${journalentryunread.je_id}`)
        .then((response) => {
           
            setJournal(response.data);
            setNotes(response.data.therapist_notes)
            
           
        })
        .catch((e) => {
          console.warn("catch", e);
        });
    }, [journalentryunread.je_id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (notes) {
          setJournal(journal[`therapist_notes`] = notes)
          insertNotes();
        }
        else {
            alert('please insert a note')
        }
        
    };
    
    const markAsRead = () => {
        setJournal(journal[`read`] = true)
        insertNotes()
    }

    const insertNotes = () => {
        console.log(journalentryunread.je_id)
        console.log(journal)
        axios
        .put(`${API}/journal/${journalentryunread.je_id}`, journal)
        .then(() => {
            setJournalEntryUnRead({})
            window.location.reload(false)
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setNotes( event.target.value)
       
    }
  
    return (
         <div className="p-5 justify-center mx-6 h-120 overflow-y-auto scrollbar bg-gray-100 border-4 border-dark-blue rounded-3xl shadow-lg ">
            <div className=" flex flex-col">
               <div className="p-1 items-center">
               <button onClick={()=>setJournalEntryUnRead({})} className="flex justify-start h-6 px-2 py-3 text-2xl text-dark-blue hover:text-3xl hover:text-red-500"><IoCloseSharp/></button>
            </div>   
                <div className="text-center font-bold text-lg "> Patient Journal & Analysis </div>
                <div className="grid grid-cols-2 gap-2 mt-5">
                    <div className="justify-center mx-6 p-1 overflow-y-auto scrollbar h-48 text-center border-2 border-dark-blue  hover:bg-light-blue rounded-xl ">
                            <h2 className="font-bold text-center text-lg">Patient Journal Entry</h2>
                            <div >
                                <p className="mx-5">{journal.journal_entry} </p>
                            </div> 
                            <button className="px-2 py-1 mt-2 text-white font-light tracking-wider bg-dark-blue hover:bg-light-blue hover:text-black hover:text-bold hover:border-2 hover: border-dark-blue rounded"
                            onClick={markAsRead}
                            type="submit">Mark as Read</button>
                    </div>
                    <div className="justify-center mx-6 p-2 overflow-y-auto scrollbar h-48 text-center border-2 border-dark-blue  hover:bg-light-blue rounded-xl ">
                        <h2 className="font-bold text-lg text-center">AI Analysis & Score - {journal.analysis_score}</h2>
                        <div>
                            <p className="mx-5">{journal.ai_response} </p>
                    </div>
                    </div>
                </div>

                <div className="justify-center mt-10 mx-6 p-2 text-center border-dark-blue rounded-xl ">
                        <h2 className="font-bold text-lg text-center">Therapist Notes</h2>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                className="w-full px-2 overflow-y-auto scrollbar border-2 border-dark-blue rounded-xl focus:outline-none focus:bg-white" 
                                id="notes"
                                type="text"
                                name="notes"
                                placeholder="My Notes..." 
                                tabIndex="5"
                                value={notes}
                                onChange={handleTextChange}>
                            </textarea>
                        <button className="px-2 py-1 mt-2 text-white font-light tracking-wider bg-dark-blue hover:bg-light-blue hover:text-black hover:text-bold hover:border-2 hover: border-dark-blue rounded"
                                type="submit"
                                >Submit</button>
                        </form>

                    </div>   
                 
                </div>
            
        </div>
      
       
    )
}
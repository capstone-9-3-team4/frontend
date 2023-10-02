// import { useNavigate, useParams } from "react-router-dom";
 import { useState, useEffect } from "react";
 import axios from "axios";
 
 import {
    IoCloseSharp,
 } from "react-icons/io5";

 const API = process.env.REACT_APP_API_URL;

export default function PatientJournalEntryRead ({journalentryread,setJournalEntryRead}) {
    
    const [journal, setJournal] = useState({});
   

    useEffect(() => {
      axios
        .get(`${API}/journal/${journalentryread.je_id}`)
        .then((response) => {
           
            setJournal(response.data);
         
            
           
        })
        .catch((e) => {
          console.warn("catch", e);
        });
    }, [journalentryread.je_id]);


    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
  
    return (

       
       
         <div className="justify-center mx-6 h-64 p-1 overflow-y-auto scrollbar bg-gray-100 border-2 border-dark-blue rounded-2xl shadow-lg ">
            <div className="grid grid-cols-1 gap-3 tems-center ">
                 <div className=" flex flex-col">
                   <button onClick={()=>setJournalEntryRead({})} className="flex justify-start h-6 px-1 py-1 text-2xl text-dark-blue hover:text-3xl hover:text-red-500"><IoCloseSharp/></button>
                  
                   <h2 className="text-center font-bold text-lg"> Patient Journal Entry, Analysis & Therapist Note <h3>{formatDate(journal.entry_date)}</h3> </h2>
                 </div>
                <div className="grid grid-cols-2 gap-5 mt-3">
                    <div className="justify-center mx-6 p-2 hover:bg-light-blue  h-32 overflow-y-auto scrollbar text-center border-2 border-dark-blue rounded-2xl ">
                            <h2 className="font-bold text-lg text-center">Patient Journal Entry</h2>
                            <div >
                                <p className="mx-5">{journal.journal_entry} </p>
                            </div> 
                           
                    </div>
                    <div className="justify-center mx-6 p-2 hover:bg-light-blue  h-32 overflow-y-auto scrollbar text-center border-2 border-dark-blue rounded-2xl ">
                        <h2 className="font-bold  text-lg text-center">AI Analysis & Score - {journal.analysis_score}</h2>
                        <div>
                            <p className="mx-5">{journal.ai_response} </p>
                    </div>
                    </div>
                </div>

                <div className="justify-center hover:bg-light-blue h-24 overflow-y-auto scrollbar mx-6 p-1 text-center border-2 border-dark-blue rounded-2xl ">
                        <h2 className="font-bold text-lg text-center">Therapist Note</h2>
                        <div>
                            <p className="mx-5">{journal.therapist_notes} </p>
                    </div>
                </div>

             
                 
            </div>
            
         </div>

       
    )
}
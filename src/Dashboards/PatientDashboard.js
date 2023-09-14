import React, { useState,useEffect } from "react";
import PatientDashBoardNav from "../Components/PatientDashBoardNav";  
import axios from "axios";
import { useParams } from "react-router-dom";

 const API = process.env.REACT_APP_API_URL;

  export default function PatientDashboard() {
    const { userId } = useParams();
    


    function getDate() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      return `${year}/${month}/${date}`;
    }
     
      const [entryText, setEntryText] = useState("");
      const [patient, setPatient] = useState({});
      useEffect(() => {
        axios
            .get(`${API}/patients/user/${userId}`)
         
            .then((response) => {
                console.log(response.data)
              setPatient(response.data);

            })
            .catch((e) => {

                console.warn("catch", e);
            });
    }, [userId]);
    
    

    
    
    
    
    
  const handleTextChange = (e) => {
      setEntryText(e.target.value);

  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        const journalEntry = { 
          patient_id:patient.id,
          entry_date:getDate(),
          journal_entry:entryText,
          therapist_notes:'',
          analysis_score:1,
          read:false

    }
        axios
        .post(`${API}/journal` , journalEntry)
        .then(() => {
            // navigate(`${API}/therapist/${tid}/patients/${pid}/journals/unread`);
            console.log('check data base')
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
   
  }
    

  return (
    <div>
      <PatientDashBoardNav />
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write your journal entry here..."
          value={entryText}
          onChange={handleTextChange}
        ></textarea>
        <br />
        <button type="submit" >Submit Journal Entry</button>
      </form>
    </div>
  );
  
}
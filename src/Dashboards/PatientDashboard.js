import React, { useState,useEffect } from "react";
import PatientDashBoardNav from "../Components/PatientDashBoardNav";  
import axios from "axios";
import { useParams } from "react-router-dom";
import { OpenAI} from 'langchain/llms/openai';


 const API = process.env.REACT_APP_API_URL;
 const AI_APIKEY = process.env.REACT_APP_OPENAI_API_KEY;
  

  export default function PatientDashboard() {
    const { userId } = useParams();
     
   



     const  openai = new OpenAI({ 
         openAIApiKey: AI_APIKEY})




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
          analysis_score:0,
          read:false

    }

const resp = await openai.call(`${entryText},  based on this entry can you give me a response based on the numbers 1, 2, and 3 (1 being the patient needs to seek immediate help for their mental health state, 2 being the patient is in an ok mental health state and 3 being the patient has a good mental health state), evaluate this as a therapist`)
        // axios
        // .post(`${API}/journal` , journalEntry)
        // .then(() => {
        //     // navigate(`${API}/therapist/${tid}/patients/${pid}/journals/unread`);
        //     console.log('check data base')
        // },
        // (error) => console.error(error)
        // )
        // .catch((c) => console.warn("catch", c));


        console.log(resp)
       console.log('this is a jounal object ',journalEntry)
   
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
        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded" type="submit" >Submit Journal Entry</button>
      </form>
    </div>
  );
  
}
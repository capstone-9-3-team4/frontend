import React, { useState,useEffect } from "react";
import PatientDashBoardNav from "../Components/PatientDashBoardNav";  
import axios from "axios";
import { useParams } from "react-router-dom";
import { OpenAI} from 'langchain/llms/openai';
// import AuthDetails from "../Components/AuthDetails";
//import PatientJournalCard from "../Components/Patients/PatientJournalCard";


 const API = process.env.REACT_APP_API_URL;
 const AI_APIKEY = process.env.REACT_APP_OPENAI_API_KEY;
  

  export default function PatientDashboard({setChangeFlag}) {
    const { id } = useParams();
     
    // const navegate = useNavigate()



     const  openai = new OpenAI({ 
                     openAIApiKey: AI_APIKEY
        })




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
            .get(`${API}/patients/${id}`)
         
            .then((response) => {
                
              setPatient(response.data);

            })
            .catch((e) => {

                console.warn("catch", e);
            });
    }, [id]);
    
    

    
    
  const handleclick = () => {
    setChangeFlag('dashboard')
    //  navegate(`/patient/${id}/dashboardProfile`)
  }
    
    
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
          ai_response: '',
          read:false

    }
   if (entryText) {
    const resp = await openai.call(`${entryText}, Based on this journal entry can you give me a response based on the numbers 1, 2, and 3 (1 being the author is in a high concern for their mental health state, 2 being the author is in an adequate mental health state and 3 being the author is in a  good and positive mental health state). Please evaluate the entry as a psychiatrist using professional medical terminology. Avoid using broad and general statements (ex: It appears that the patient is in an overall okay mental health state)`)
       
       if ( resp.includes('1')) {
        journalEntry.analysis_score = 1;
       } else if (resp.includes('2')) {
        journalEntry.analysis_score = 2;
       }else {
        journalEntry.analysis_score = 3;
       }

       journalEntry.ai_response = resp;
       console.log(journalEntry)
    axios
        .post(`${API}/journal` , journalEntry)
        .then(() => {
          setChangeFlag('dashboard')
          // navegate (`/patient/${id}/dashboardProfile`);
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));


   
      
      
    }
    else{
      alert('please enter a journal entry')
    }

  }
    

  return (
    <div className="h-screen justify-center mx-6 p-10 overflow-hidden">
      <PatientDashBoardNav />
      <div className="text-center mt-5">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full px-5 bg-light-blue rounded-2xl border-2 border-dark-blue focus:outline-none focus:bg-white" 
            rows="4"
            cols="50"
            placeholder="Write your journal entry here..."
            value={entryText}
            onChange={handleTextChange}
          ></textarea>
          <br />
          <div className=" flex flex-row justify-around">
              
              <button className="px-4 py-1 text-white bg-dark-blue hover:bg-dark-purple rounded " onClick={handleclick} >Cancel</button>
              <button className="px-4 py-1 text-white bg-dark-blue hover:bg-dark-purple rounded " type="submit" >Submit Journal Entry</button>
              
          
            </div>
        </form>
      </div>
    </div>
  );
  
}
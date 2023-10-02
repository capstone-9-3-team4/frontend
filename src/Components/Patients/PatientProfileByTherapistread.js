import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientJournalEntryRead from "./PatientJournalEntryRead.js"
//import { useParams, Link } from "react-router-dom";
import {  HiCake,
          HiHome,
          HiPhone,
          HiUser,
          HiEnvelope, } 
  from "react-icons/hi2";

const API = process.env.REACT_APP_API_URL;

function PatientProfileByTherapistread({tid,pid}) {
  // const { tid, pid } = useParams();

  const [patientProfile, setPatientProfile] = useState([]);
  const [upatientJournals, setUPatientJournals] = useState([]);
  const [journalentryread, setJournalEntryRead] = useState({})

  const datos = {
    mostrar: "",
    je_id: 0,
  }

  useEffect(() => {
    axios
      .get(`${API}/therapist/${tid}/patients/${pid}`)
      .then((response) => {
        
        setPatientProfile(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [tid, pid]);

  useEffect(() => {
    axios
      .get(`${API}/therapist/${tid}/patients/${pid}/journals/read`)
      .then((journals) => {
        
        setUPatientJournals(journals.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [tid, pid]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handdleClick = (jid) => {
    datos.mostrar = "show";
    datos.je_id = jid;
    setJournalEntryRead(datos)
  }

  return (
    <>
     
      <div className="flex  flex-row justify-start gap-5 m-5">
        <div>
          <img
            src={patientProfile.profile_picture}
            alt={`${patientProfile.first_name} ${patientProfile.last_name}`}
            className="w-48 h-48 rounded-full mx-auto shadow-md bg-light-blue p-1 hover:bg-dark-blue"
          />
        </div>
        <div className="flex grow justify-between" >
          <div className="px-5">
            <h2 className="text-2xl font-semibold mt-4">
              {patientProfile.first_name} {patientProfile.last_name}
            </h2>
           <div className="flex space-x-1 items-center"><p><HiCake /></p><p> {formatDate(patientProfile.dob)}</p></div>
           <div className="flex space-x-1 items-center"><p><HiUser/> </p><p>{patientProfile.gender}</p></div>
           <div className="flex space-x-1 items-center"><p><HiEnvelope /></p><p>{patientProfile.email}</p></div>
           <div className="flex space-x-1 items-center"><p><HiPhone /> </p><p>{patientProfile.contact_number}</p></div>
           <div className="flex space-x-1 items-center"><p><HiHome /> </p><p>{patientProfile.address}, {patientProfile.city}, {patientProfile.state} {patientProfile.zip_code}</p></div>
         </div>
         
       
        
        </div>
      </div>
      <div>
        {journalentryread.mostrar === "show" ? (<PatientJournalEntryRead journalentryread={journalentryread} setJournalEntryRead={setJournalEntryRead}/>): null}
       
      </div>

      <div className="m-6">
        <table className="w-full border-collapse border border-dark-blue">
          <thead>
            <tr className="bg-dark-blue text-white">
              <th className="border border-light-blue p-2">Analysis Score</th>
              <th className="border border-light-blue p-2">Entry Date</th>
              <th className="border border-light-blue p-2">Journal Entry</th>
            </tr>
          </thead>
          <tbody>
            {upatientJournals.map((x) => {
              return (
                <React.Fragment key={x.id}>
                  <tr className="hover:bg-light-blue">
                    <td className="border border-dark-blue p-2">
                      {x.analysis_score === 1 ? (
                        
                        <button className="text-red-500 underline" onClick={() => handdleClick(x.id)} >Hight</button>  
                      
                      ) : x.analysis_score === 2 ? (
                      
                         <button className="text-yellow-500 underline" onClick={() => handdleClick(x.id)}>Medium</button> 
                      
                      ) : (
                       
                        <button className="text-green-500 underline" onClick={() => handdleClick(x.id)}>Low</button> 
                     
                      )}
                    </td>
                    <td className="border border-dark-blue p-2">
                      {formatDate(x.entry_date)}
                    </td>
                    <td className="border border-dark-blue p-2" colSpan="2">
                      {x.journal_entry || "No journal entry available."}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PatientProfileByTherapistread;

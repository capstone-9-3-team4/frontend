import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientJournalEntryUnread from "./PatientJournalEntryUnread.js"
// import {  Link } from "react-router-dom";
import {
  HiCake,
  HiHome,
  HiPhone,
  HiUser,
  HiEnvelope,
}
  from "react-icons/hi2";

const API = process.env.REACT_APP_API_URL;

function PatientProfileByTherapistUnread({ tid, pid }) {
  // const { tid, pid } = useParams();

  const [patientProfile, setPatientProfile] = useState([]);
  const [upatientJournals, setUPatientJournals] = useState([]);
  const [journalentryunread, setJournalEntryUnRead] = useState({})
  const [totalhr, setTotalhr] = useState(0);
  const [totalJE, setTotalJE] = useState(0);


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
      .get(`${API}/therapist/${tid}/patients/${pid}/journals/`)
      .then((journals) => {

        setUPatientJournals(journals.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [tid, pid]);

  let hr = 0
  let allJE = upatientJournals.length;
  for (let i = 0; i < upatientJournals.length; i++) {
    if (upatientJournals[i].analysis_score === 1) {
      hr++
    }
  }

  useEffect(() => {
    setTotalhr(hr)
    setTotalJE(allJE)
  }, [hr, allJE])

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  const handdleClick = (jid) => {
    datos.mostrar = "show";
    datos.je_id = jid;
    setJournalEntryUnRead(datos)
  }

  return (
    <>

      <div className="flex  justify-around gap-5 m-5">
        <div>
          <img
            src={patientProfile.profile_picture}
            alt={`${patientProfile.first_name} ${patientProfile.last_name}`}
            className="w-48 h-48 rounded-full mx-auto shadow-md bg-light-blue  hover:bg-dark-blue p-1"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mt-4">
            {patientProfile.first_name} {patientProfile.last_name}
          </h2>
          <div className="flex space-x-1 items-center"><p><HiCake /></p><p> {formatDate(patientProfile.dob)}</p></div>
          <div className="flex space-x-1 items-center"><p><HiUser /> </p><p>{patientProfile.gender}</p></div>
          <div className="flex space-x-1 items-center"><p><HiEnvelope /></p><p>{patientProfile.email}</p></div>
          <div className="flex space-x-1 items-center"><p><HiPhone /> </p><p>{patientProfile.contact_number}</p></div>
          <div className="flex space-x-1 items-center"><p><HiHome /> </p><p>{patientProfile.address}, {patientProfile.city}, {patientProfile.state} {patientProfile.zip_code}</p></div>
          <div className="font-bold"> Diagnosis: Depression</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold py-2 mt-4">Total Journal Entries</h3>
          <h3 className="text-bold text-center text-2xl py-2 text-dark-blue">{totalJE}</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold py-2 mt-4">Total High Risk Journal Entries</h3>
          <h3 className="text-bold text-center text-2xl py-2 text-red-400 ">{totalhr}</h3>
        </div>


      </div>

      <div>
        {journalentryunread.mostrar === "show" ? (<PatientJournalEntryUnread journalentryunread={journalentryunread} setJournalEntryUnRead={setJournalEntryUnRead} />) : null}

      </div>

      <div className="m-6">
        <table className="w-full border-collapse border border-dark-blue">
          <thead>
            <tr className="bg-dark-blue text-white">
              <th className="border border-light-blue p-2">Analysis Score</th>
              <th className="border border-light-blue p-2">Entry Date</th>
              <th className='border border-light-blue p-2'>Status</th>
              <th className="border border-light-blue p-2">Journal Entry</th>
              {/* <th className='border border-light-blue p-2'>Diagnosis</th> */}
            </tr>
          </thead>
          <tbody>
            {upatientJournals.filter((unrd) => unrd.read === false).map((x) => {
              return (
                <React.Fragment key={x.id}>
                  <tr className="hover:bg-light-blue">
                    <td className="border border-dark-blue p-2">
                      {x.analysis_score === 1 ? (

                        <button className="text-red-500 underline" onClick={() => handdleClick(x.id)} >High</button>

                      ) : x.analysis_score === 2 ? (

                        <button className="text-yellow-500 underline" onClick={() => handdleClick(x.id)} >Medium</button>

                      ) : (

                        <button className="text-green-500 underline" onClick={() => handdleClick(x.id)} >Low</button>
                      )}
                    </td>
                    <td className="border border-dark-blue p-2">
                      {formatDate(x.entry_date)}
                    </td>
                    <td className="border border-dark-blue p-2 flex items-center justify-center" >
                      {x.analysis_score === 1 ? (
                        <p>😞</p>

                      ) : x.analysis_score === 2 ? (
                        <p>😐</p>

                      ) : (
                        <p>😄</p>
                      )}
                    </td>
                    <td className="border border-dark-blue p-2">
                      {x.journal_entry || "No journal entry available."}
                    </td>
                    {/* <td className="border border-dark-blue p-2">Depressed</td> */}
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

export default PatientProfileByTherapistUnread;

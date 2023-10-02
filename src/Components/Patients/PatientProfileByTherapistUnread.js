import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";
import {  HiCake,
          HiHome,
          HiPhone,
          HiUser,
          HiEnvelope, } 
  from "react-icons/hi2";

const API = process.env.REACT_APP_API_URL;

function PatientProfileByTherapistUnread({tid,pid}) {
  // const { tid, pid } = useParams();

  const [patientProfile, setPatientProfile] = useState([]);
  const [upatientJournals, setUPatientJournals] = useState([]);

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
      .get(`${API}/therapist/${tid}/patients/${pid}/journals/unread`)
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

  return (
    <>
     
      <div className="flex gap-5 m-5">
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
          <div className="flex space-x-1 items-center"><p><HiUser/> </p><p>{patientProfile.gender}</p></div>
          <div className="flex space-x-1 items-center"><p><HiEnvelope /></p><p>{patientProfile.email}</p></div>
          <div className="flex space-x-1 items-center"><p><HiPhone /> </p><p>{patientProfile.contact_number}</p></div>
          <div className="flex space-x-1 items-center"><p><HiHome /> </p><p>{patientProfile.address}, {patientProfile.city}, {patientProfile.state} {patientProfile.zip_code}</p></div>
        </div>
        
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
                        <Link 
                          to={`/therapist/${tid}/patient/${pid}/journals/unread/${x.id}`}
                          className="text-red-500 underline"
                        >
                          High
                        </Link>
                      ) : x.analysis_score === 2 ? (
                        <Link
                          to={`/therapist/${tid}/patient/${pid}/journals/unread/${x.id}`}
                          className="text-yellow-500 underline"
                        >
                          Medium
                        </Link>
                      ) : (
                        <Link
                          to={`/therapist/${tid}/patient/${pid}/journals/unread/${x.id}`}
                          className="text-green-500 underline"
                        >
                          Low
                        </Link>
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

export default PatientProfileByTherapistUnread;

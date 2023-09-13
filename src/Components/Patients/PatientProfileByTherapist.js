import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function PatientProfileByTherapist() {
  const { tid, pid } = useParams();

  const [patientProfile, setPatientProfile] = useState([]);
  const [upatientJournals, setUPatientJournals] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/therapist/${tid}/patients/${pid}`)
      .then((response) => {
        console.log(response.data)
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
      <article className="bg-white p-4 rounded-lg shadow-md">
        <div>
          <img
            src={patientProfile.profile_picture}
            alt={`${patientProfile.first_name} ${patientProfile.last_name}`}
            className="w-48 h-48 rounded-full object-cover mx-auto"
          />
        </div>
        <h2 className="text-2xl font-semibold mt-4">
          {patientProfile.first_name} {patientProfile.last_name}
        </h2>
        <p><strong>Email:</strong> {patientProfile.email}</p>
        <p><strong>Date of Birth:</strong> {patientProfile.dob}</p>
        <p><strong>Gender:</strong> {patientProfile.gender}</p>
        <p><strong>Contact Number:</strong> {patientProfile.contact_number}</p>
        <p><strong>Address:</strong> {patientProfile.address}</p>
        <p><strong>City:</strong> {patientProfile.city}</p>
        <p><strong>State:</strong> {patientProfile.state}</p>
        <p><strong>Zip Code:</strong> {patientProfile.zip_code}</p>
      </article>

      <article className="mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Analysis Score</th>
              <th className="border border-gray-300 p-2">Entry Date</th>
              <th className="border border-gray-300 p-2">Journal Entry</th>
            </tr>
          </thead>
          <tbody>
            {upatientJournals.map((x) => {
              return (
                <React.Fragment key={x.id}>
                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">
                      {x.analysis_score === 1 ? (
                        <Link
                          to="/"
                          className="text-red underline"
                        >
                          High
                        </Link>
                      ) : x.analysis_score === 2 ? (
                        <Link
                          to="/"
                          className="text-yellow-500 underline"
                        >
                          Medium
                        </Link>
                      ) : (
                        <Link
                          to="/"
                          className="text-green-500 underline"
                        >
                          Low
                        </Link>
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {formatDate(x.entry_date)}
                    </td>
                    <td className="border border-gray-300 p-2" colSpan="2">
                      {x.journal_entry || "No journal entry available."}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default PatientProfileByTherapist;

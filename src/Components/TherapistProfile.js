import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {  
  HiBriefcase,
  HiEnvelope, } 
from "react-icons/hi2";

const API = process.env.REACT_APP_API_URL;

export default function TherapistProfile() {
  const { tid } = useParams();
  const [therapistProfile, setTherapistProfile] = useState([])
  
  console.log(therapistProfile)

  useEffect(() => {
    axios
      .get(`${API}/therapist/${tid}`)
      .then((response) => {
        
        setTherapistProfile(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [tid]);

  return (
    <>
      <div className="flex gap-5 m-5">
        <div>
          <img
            src='#'
            alt=''
            className="w-48 h-48 rounded-full mx-auto shadow-md bg-dark-blue p-1"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mt-4">
            Dr. 
          </h2>
          <div className="flex space-x-1 items-center"><p><HiEnvelope /></p><p>Email</p></div>
          <div className="flex space-x-1 items-center"><p><HiBriefcase /> </p><p>Specialization</p></div>
          <Link><button className="px-4 py-1 text-white  bg-dark-blue hover:bg-dark-purple rounded" >Edit</button></Link>
        </div>
      </div>
    </>
  )
}

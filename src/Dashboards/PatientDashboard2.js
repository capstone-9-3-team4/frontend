import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PatientDashboard from "./PatientDashboard";
//import AuthDetails from "../Components/AuthDetails";
import {  HiCake,
          HiHome,
          HiPhone,
          HiUser } 
  from "react-icons/hi2";
import {  MdNoteAdd, MdDashboard } from "react-icons/md";
import {  TfiLayoutGrid3Alt } from "react-icons/tfi";

const API = process.env.REACT_APP_API_URL;

function PatientDashBoard2() {
    const { id } = useParams();
  

  const [patientProfile, setPatientProfile] = useState([]);
  const [therapistinfo,setTherapistInfo] = useState({});
  const [alljournal,setAllJournal] = useState([])

  const [changeFlag, setChangeFlag] = useState("dashboard");
  
  console.log(patientProfile)
  useEffect(() => {
    axios
      .get(`${API}/patients/${id}`)
      .then((response) => {
        
        setPatientProfile(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/patients/${id}/gettherapist`)
      .then((thera) => {
     
        setTherapistInfo(thera.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/patients/${id}/journals`)
      .then((allj) => {
     
        setAllJournal(allj.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDate = () => {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    return  formatDate(`${year}/${month}/${date}`)
  }
  
 return (
    <div className="h-screen justify-center mx-6 bg-dark-purple bg-opacity-10 px-2 py-1 overflow-y-auto border-4 border-dark-purple rounded-3xl shadow-lg">
      <div className="flex flex-row p-10">
         <div className="flex flex-col  border-2 border-dark-purple bg-white rounded-3xl shadow-lg justify-around w-64  px-2">
            <div className="flex items-center justify-center text-dark-blue text-3x1 py-3">
                <b>Hello, {`${patientProfile.first_name}`}!</b>
            </div>
             <div className="flex flex-col flex-auto">
                <div className="p-2 hover:bg-dark-purple hover:text-white py-2">
                    <div className="flex flex-row space-x-5">
                         < MdDashboard className= "hover:animate-bounce"/>
                         <button onClick={() =>setChangeFlag("dashboard") } className="font-bold text-dark-blue hover:text-white hover:rounded-xl">Dashboard Profile</button>
                    </div>
                </div>
                <div className="p-2 hover:bg-dark-purple hover:text-white py-2">
                    <div className="flex flex-row space-x-5">
                         < TfiLayoutGrid3Alt className="hover:animate-bounce"/>
                         <button  onClick={() =>setChangeFlag("journal") } className="font-bold text-dark-blue hover:text-white">All Journals Entries</button>
                    </div>
                </div>
                <div className="p-2 hover:bg-dark-purple  hover:text-white py-2">
                    <div className="flex flex-row space-x-5">
                         < MdNoteAdd className="hover:animate-spin"/>
                         <button onClick={() =>setChangeFlag("journalentry") } className="font-bold text-dark-blue hover:text-white">New Journal Entry</button>
 
            </div>
                </div>
             </div>
        </div>

        <div className="flex flex-col ml-5 w-screen border-2 border-dark-purple bg-white rounded-3xl shadow-lg justify-around  px-2">
           {changeFlag ==="dashboard" &&
             <div className="flex flex-col">
                    <div className="flex flex-col bg-white rounded-2xl">
                       <div className="flex flex-row space-x-3">
                           <h4 className="font-bold text-dark-blue uppercase text-4xl p-2">Your Dashboard</h4> 
                       </div>
                       <p className="font-bold py-2 px-4">{getDate()}</p>
                    </div> 
                    <div className="">
                        <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols p-4">
                            
                            <div className="flex flex-col items-center rounded-3xl shadows-sm justify-between">
                                <img src={`${patientProfile.profile_picture}`} alt="PatientPic"
                                  className="w-48 h-48 rounded-full mx-auto shadow-md bg-dark-purple p-1" />
                                 <div>{`${patientProfile.email}`}</div>
                                 <div className="text-dark-purple underline hover:text-dark-blue">Edit</div>
                             </div>

                             <div className="flex flex-col items-center ">
                                <div className="text-lg item-left font-bold"> Patient Info: </div>
                                <div className="flex flex-col pt-5">
                                    <div className="flex flex-row">
                                        <HiCake className="text-3xl font-bold"/>
                                        <div className="p-1 text-lg">{formatDate(patientProfile.dob)} </div>
                                 
                             </div>
                                      <div  className="flex space-x-1 items-center">
                                        <HiUser className="text-3xl font-bold"/> 
                                        <p className="p-1">{patientProfile.gender} </p>
                                    </div>
                                    <div  className="flex space-x-1 items-center">
                                        <HiPhone className="text-3xl font-bold"/> 
                                        <p className="p-1">{patientProfile.contact_number} </p>
                                    </div>
                                    <div className="flex flex-row ">
                                        <HiHome className="text-3xl font-bold"/> 
                                        <div className="p-1 text-lg">{patientProfile.address}, {patientProfile.city}, {patientProfile.state} {patientProfile.zip_code}</div>
                                    </div>
                             </div>
                             </div>
                             <div className="flex flex-col items-center">
                                  <div className="flex flex-col text-lg font-bold"> Therapist </div> 
                                  <div className="flex items-center justify-center py-3">
                                      <b>{`${therapistinfo.first_name}  ${therapistinfo.last_name}`}</b>
                                  </div>
                                  <div className="flex items-center justify-center py-1">
                                      <p>{therapistinfo.email} </p>
                                  </div>
                                  <div className="flex items-center justify-center py-1">
                                      <p> {therapistinfo.specialization} </p>
                                  </div>
                                  {/* <div className="flex items-center justify-center py-1">
                                      <p>Lic. Numb. {therapistinfo.license_number} </p>
                                  </div> */}
                              
                             </div>

                             <div className="flex flex-col items-center">
                               <div className="text-lg text-center font-bold pt-20">Total number of Journal Entries </div>
                               <p className=" text-3xl text-dark-purple p-4">106</p>
                             </div>

                             <div className="flex flex-col items-center">
                               <div className="text-lg text-center font-bold pt-20">Journal Entries read by Therapist</div>
                               <p className=" text-3xl text-dark-purple p-4">95</p>
                             </div>

                             <div className="flex flex-col items-center">
                               <div className="text-lg text-center font-bold pt-20">Total number of High Risk Entries</div>
                               <p className=" text-3xl text-dark-purple p-4">34</p>
                             </div>
                        </div>   
                    </div>  
              </div> }
            { changeFlag ==="journal" &&
                 
                 <div className="h-screen flex flex-col mt-5 mb-5 overflow-y-auto scrollbar">
                      <div className="flex flex-col rounded-2xl">
                          <div className="flex flex-row space-x-3">
                             <h4 className="font-bold px-4"> All Journal Entries</h4> 
                         </div>
                            <p className="font-bold py-2 px-4">{getDate()}</p>
                      </div> 
                      <div className="px-10 py-2">
                        {alljournal.map((x) => {
                          return(
                            <React.Fragment key={x.id}>
                                     <tr className="  hover:bg-light-blue">
                                          <td className="border border-dark-purple p-2">
                                               {formatDate(x.entry_date)}
                                          </td>
                                          <td className="border border-dark-purple p-2" colSpan="2">
                                                  {x.journal_entry || "No journal entry available."}
                                          </td>
                                      </tr>
                             </React.Fragment>
                          )
                        })}
                      </div>
   
                   </div> }
               

                  {changeFlag ==="journalentry" &&
                    <PatientDashboard setChangeFlag={setChangeFlag}/>
                  }
                </div> 
          </div>
   </div> 
  );
}

export default PatientDashBoard2;




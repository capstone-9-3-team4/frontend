import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
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
    const navegate = useNavigate()

  const [patientProfile, setPatientProfile] = useState([]);
  const [therapistinfo,setTherapistInfo] = useState({});
  const [alljournal,setAllJournal] = useState([])

  const [changeFlag, setChangeFlag] = useState("dashboard");

 
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


  

  const newjournal = () => {
    
     navegate(`/patient/${id}/dashboard`)
  }

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
    
    <div className="justify-center mx-6 h-screen bg-gray-100 px-2 py-1 overflow-y-auto border-4 rounded-3xl shadow-lg">
    
      <div className="flex flex-row">
          
         <div className="flex flex-col  border-2 border-dark-blue gap-4 bg-white rounded-3xl h-screen  shadow-lg justify-around w-64  px-2">
            
            <div className="flex items-center justify-center text-gray-600 text-3x1 py-3">
                <b>{`${patientProfile.first_name}  ${patientProfile.last_name}`}</b>
            </div>

             <div className="flex flex-col flex-auto ">
                <div className="p-2 hover:bg-yellow-100 py-2">
                    <div className="flex flex-row space-x-6">
                         < MdDashboard className="hover:text-pink-500 hover:animate-ping"/>
                         <button onClick={() =>setChangeFlag("dashboard") } className="font-bold text-dark-blue hover:text-red-400">Dashboard Profile</button>
                    </div>
                </div>
                <div className="p-2 hover:bg-yellow-100 py-2">
                    <div className="flex flex-row space-x-6">
                         <  TfiLayoutGrid3Alt className="hover:text-pink-500 hover:animate-bounce"/>
                         <button  onClick={() =>setChangeFlag("journal") } className="font-bold text-dark-blue hover:text-red-400">All Journals Entries</button>
                    </div>
                </div>
                <div className="p-2 hover:bg-yellow-100 py-2">
                    <div className="flex flex-row space-x-6">
                         < MdNoteAdd className="hover:text-pink-500 hover:animate-spin"/>
                         <button onClick={newjournal} className="font-bold text-dark-blue hover:text-red-400">New Journal Entry</button>
                    </div>
                </div>
                
             </div>
            


         </div>

         <div className="flex-auto">
           {changeFlag ==="dashboard" &&
             <div className="flex flex-col">
                    <div className="flex flex-col bg-gray-200 rounded-2xl">
                       <div className="flex flex-row space-x-5">
                           <h4 className="font-bold  px-4"> Dashboard Profile</h4> 
                       </div>
                       <p className="font-bold py-2 px-4">{getDate()}</p>
                    </div> 
                    <div className="h-screen bg-gray-100 ">
                        <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols p-4">
                            
                            <div className="flex flex-col items-center bg-gray-100 rounded-3xl shadows-sm justify-between">
                                <img src={`${patientProfile.profile_picture}`} alt="PatientPic"
                                  className="w-48 h-48 rounded-full mx-auto shadow-md  border-2 border-dark-blue hover:border-red-300  p-1" />
                                 <div>{`${patientProfile.email}`}</div>
                                 <Link to={`/patient/${id}/dashboard2`} className="text-dark-blue hover:text-red-300">Edit</Link>
                                
                             </div>

                             <div className="flex flex-col items-center  bg-gray-100">
                                <div className="text-lg font-bold"> Personale Info. </div>
                                <div className="flex flex-col items-center pt-5">
                                    <div className="flex space-x-1 items-center">
                                        <HiCake/>
                                        <p className="p-1">{formatDate(patientProfile.dob)} </p>
                                    </div>
                                    <div  className="flex space-x-1 items-center">
                                        <HiUser/> 
                                        <p className="p-1">{patientProfile.gender} </p>
                                    </div>
                                    <div  className="flex space-x-1 items-center">
                                        <HiPhone/> 
                                        <p className="p-1">{patientProfile.contact_number} </p>
                                    </div>
                                    <div  className="flex space-x-1 items-center">
                                        <HiHome/> 
                                        <p className="p-1">{patientProfile.address} </p>
                                    </div>
                                    <div className="text-sm">{`${patientProfile.city} ${patientProfile.state} ${patientProfile.zip_code}`} </div>
                                </div>
                             </div>

                             <div className="flex flex-col items-center bg-gray-100">
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

                             
                             

                             <div className="flex flex-col items-center bg-gray-100">
                               <div className="text-lg font-bold pt-20">Total number of  </div>
                               <div className="text-lg font-bold">Journal Entries</div>
                               <p className=" text-4xl text-dark-blue p-4">106</p>
                            
                             </div>

                             <div className="flex flex-col items-center bg-gray-100">
                               <div className="text-lg font-bold pt-20">Total number of Journal Entries </div>
                               <div className="text-lg font-bold">read by Therapist</div>
                               <p className=" text-4xl text-dark-blue p-4">95</p>
                            
                             </div>

                             <div className="flex flex-col items-center bg-gray-100">
                               <div className="text-lg font-bold pt-20">Total number of Journal Entries </div>
                               <div className="text-lg font-bold">with high considerations</div>
                               <p className=" text-4xl text-dark-blue p-4">34</p>
                            
                             </div>


                             
                             
                        </div>
                        
                        
                         
                    </div>  
              </div> }
            { changeFlag ==="journal" &&
                 
                 <div className="flex flex-col">
                      <div className="flex flex-col bg-gray-200 rounded-2xl">
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
                                          <td className="border border-dark-blue p-2">
                                               {formatDate(x.entry_date)}
                                          </td>
                                          <td className="border border-dark-blue p-2" colSpan="2">
                                                  {x.journal_entry || "No journal entry available."}
                                          </td>
                                      </tr>
                             </React.Fragment>
                          )
                        })}
                      </div>
   
                   </div> }
               </div> 

      </div>

      

    
    </div>
  );
}

export default PatientDashBoard2;




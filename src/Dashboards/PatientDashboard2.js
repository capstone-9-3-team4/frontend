import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthDetails from "../Components/AuthDetails";
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
          
         <div className="flex flex-col  border-2 border-gray-300 bg-white rounded-3xl h-screen  shadow-lg justify-around w-64  px-2">
            
            <div className="flex items-center justify-center text-gray-600 text-3x1 py-3">
                <b>{`${patientProfile.first_name}  ${patientProfile.last_name}`}</b>
            </div>

             <div className="flex flex-col flex-auto ">
                <div className="p-2 hover:bg-yellow-100 py-2">
                    <div className="flex flex-row space-x-6">
                         < MdDashboard className="hover:text-pink-500 hover:animate-ping"/>
                         <button onClick={() =>setChangeFlag("dashboard") } className="font-bold text-dark-green hover:text-blue">Dashboard Profile</button>
                    </div>
                </div>
                <div className="p-2 hover:bg-yellow-100 py-2">
                    <div className="flex flex-row space-x-6">
                         <  TfiLayoutGrid3Alt className="hover:text-pink-500 hover:animate-bounce"/>
                         <button  onClick={() =>setChangeFlag("journal") } className="font-bold text-dark-green hover:text-blue">All Journals Entries</button>
                    </div>
                </div>
                <div className="p-2 hover:bg-yellow-100 py-2">
                    <div className="flex flex-row space-x-6">
                         < MdNoteAdd className="hover:text-pink-500 hover:animate-spin"/>
                         <button onClick={newjournal} className="font-bold text-dark-green hover:text-blue">New Journal Entry</button>
                    </div>
                </div>
                
             </div>
            

             <div className="pb-24 items-center justify-center">
               <AuthDetails />
             </div>   

         </div>

        <div className="flex-auto">
           {changeFlag ==="dashboard" &&
             <div className="flex flex-col">
                    <div className="flex flex-col bg-white rounded-2xl">
                       <div className="flex flex-row space-x-3">
                           <h4 className="font-bold text-gray-500 p-2"> Dashboard Profile</h4> 
                       </div>
                       <p className="text-gray-400 px-2">{getDate()}</p>
                    </div> 
                    <div className="h-screen bg-gray-100 ">
                        <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols p-4">
                            
                            <div className="flex flex-col items-center bg-gray-100 rounded-3xl shadows-sm justify-between">
                                <img src={`${patientProfile.profile_picture}`} alt="PatientPic"
                                  className="w-48 h-48 rounded-full mx-auto shadow-md bg-dark-green p-1" />
                                 <div>{`${patientProfile.email}`}</div>
                                 <Link to={`/patient/${id}/dashboard2`} className="text-dark-green hover:text-light-green">Edit</Link>
                                
                             </div>

                             <div className="flex flex-col items-center  bg-gray-100">
                                <div className="text-lg font-bold"> Personale Info. </div>
                                <div className="flex flex-col items-center pt-5">
                                    <div className="flex flex-row ">
                                        <HiCake className="text-3xl font-bold"/>
                                        <div className="p-1 text-lg">{formatDate(patientProfile.dob)} </div>
                                    </div>
                                    <div className="flex flex-row ">
                                        <HiUser className="text-3xl font-bold"/> 
                                        <div className="p-1 text-lg">{patientProfile.gender} </div>
                                    </div>
                                    <div className="flex flex-row ">
                                        <HiPhone className="text-3xl font-bold"/> 
                                        <div className="p-1 text-lg">{patientProfile.contact_number} </div>
                                    </div>
                                    <div className="flex flex-row ">
                                        <HiHome className="text-3xl font-bold"/> 
                                        <div className="p-1 text-lg">{patientProfile.address} </div>
                                    </div>
                                    <div className="text-sm">{`${patientProfile.city} ${patientProfile.state} ${patientProfile.zip_code}`} </div>
                                </div>
                             </div>

                             <div className="flex flex-col items-center bg-gray-100">
                                  <div className="text-lg font-bold"> Therapist Info. </div> 
                                  <div className="text-3xl">Here</div>
                              
                             </div>

                             
                             

                             <div className="flex flex-col items-center bg-gray-100">
                               <div className="text-lg font-bold pt-20">Total number of  </div>
                               <div className="text-lg font-bold">Journal Entries</div>
                               <p className=" text-6xl text-dark-purple p-4">106</p>
                            
                             </div>

                             <div className="flex flex-col items-center bg-gray-100">
                               <div className="text-lg font-bold pt-20">Total number of Journal Entries </div>
                               <div className="text-lg font-bold">read by Therapist</div>
                               <p className=" text-6xl text-dark-purple p-4">95</p>
                            
                             </div>

                             <div className="flex flex-col items-center bg-gray-100">
                               <div className="text-lg font-bold pt-20">Total number of Journal Entries </div>
                               <div className="text-lg font-bold">with high considerations</div>
                               <p className=" text-6xl text-dark-purple p-4">34</p>
                            
                             </div>


                             
                             
                        </div>
                        
                        
                         
                    </div>  
              </div> }
            {changeFlag ==="journal" &&
                  <div className="flex flex-col">
                    <div className="flex flex-col bg-white rounded-2xl">
                       <div className="flex flex-row space-x-3">
                           <h4 className="font-bold text-gray-500 p-2"> All Journal Entries</h4> 
                       </div>
                       <p className="text-gray-400 px-2">{getDate()}</p>
                    </div> 
                     <div className="flex flex-col">
                        <div className="flex flex-row space-x-3">
                          <h4 className="font-bold text-gray-500 p-2"> Grid with all journal entries here</h4> 
                        </div>




                        
                     </div>   
                  </div> }
       </div> 

      </div>

      

    
    </div>
  );
}

export default PatientDashBoard2;



//  <div>
// <img
//   src={patientProfile.profile_picture}
//   alt={`${patientProfile.first_name} ${patientProfile.last_name}`}
//   className="w-48 h-48 rounded-full mx-auto shadow-md bg-dark-green p-1"
// />
//   <h2 className="text-2xl font-semibold mt-4">
//   {patientProfile.first_name} {patientProfile.last_name}
// </h2>
// </div>

// <div className="space-y-4 gap-y-8">
// <h3><HiEnvelope />{patientProfile.email}</h3>
// <h3><HiCake />{formatDate(patientProfile.dob)}</h3>
// <h3><HiUser/> {patientProfile.gender}</h3>

// </div>
// <div>
// <h3><HiPhone /> {patientProfile.contact_number}</h3>
// <h3><HiHome /> {patientProfile.address}</h3>
// <h3> {patientProfile.city}, {patientProfile.state} {patientProfile.zip_code}</h3>
// </div>
// <div>
//   <h3>Therapist Info</h3>
// </div>
// <div>
//      <button onClick={navegatetoEnterAJournal}   className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded">Add Journal Entry</button>
// </div> 




// const [upatientJournals, setUPatientJournals] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API}/therapist/${tid}/patients/${pid}/journals/unread`)
//       .then((journals) => {
        
//         setUPatientJournals(journals.data);
//       })
//       .catch((e) => {
//         console.warn("catch", e);
//       });
//   }, [tid, pid]);



//GRID
//  <div className="m-6">
// <table className="w-full border-collapse border border-dark-green">
//   <thead>
//     <tr className="bg-dark-green text-white">
     
//       <th className="border border-light-green p-2">Entry Date</th>
//       <th className="border border-light-green p-2">Journal Entry</th>
//     </tr>
//   </thead>
//   <tbody>
//     {upatientJournals.map((x) => {
//       return (
//         <React.Fragment key={x.id}>
//           <tr className="hover:bg-light-green">
           
//             <td className="border border-dark-green p-2">
//               {formatDate(x.entry_date)}
//             </td>
//             <td className="border border-dark-green p-2" colSpan="2">
//               {x.journal_entry || "No journal entry available."}
//             </td>
//           </tr>
//         </React.Fragment>
//       );
//     })}
//   </tbody>
// </table>
// </div> 
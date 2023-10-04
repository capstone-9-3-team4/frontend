import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Footer from "./Footer";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [loginmsg, setLoginmsg] = useState('')
  //const [therapistId, setTherapistId] = useState()
  const [userObj, setUserObj] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
      // console.log(userId)
      if (userId) {
     
          axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
              .then(response => {
                  
                
                  setUserObj(response.data);
                 

              })
              .catch(error => console.log(error))
      }
  }, [userId]);

  const login2 = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setUserId(userCredential.user.uid);
          })
          .catch((error) => {
             // console.log(error);
             setLoginmsg('pls check your email and pswd')
              
          })
  };
  // useEffect(() => {
  //     // Navigate based on user role
      

  //       axios.get(`${process.env.REACT_APP_API_URL}/users/therapist/${userId}`)
  //             .then(thera => {
  //                 
                
  //                 setTherapistId(thera.data);
                 

  //             })
  //             .catch(error => console.log(error))
        
  // }, [userId]);

   useEffect(() => {
    if (userObj.role === "T") {
      
      navigate(`/therapist/${userObj.t_id}/highrisk`);
  } else if (userObj.role === "P") {
      console.log(userObj.p_id)
      navigate(`/patient/${userObj.p_id}/dashboardProfile`);
  }

   }, [userObj,navigate]);


    return (
    
        <div className="font-sans max-h-screen">
        <div className="container mx-auto flex flex-1 black justify-center items-center">
            <div className="w-full max-w-lg">
              <div className="leading-loose">
                <form onSubmit={login2} className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                    <p className="text-center text-dark-blue text-lg font-bold">LOGIN</p>
                      <div className="">
                        <label className="block text-sm text-white">E-mail</label>
                        <input type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-1 text-gray-700 bg-light-blue rounded focus:outline-none focus:bg-white" id="email"  placeholder="Email" aria-label="email" required />
                      </div>
                      <div className="mt-2">
                        <label className="block  text-sm text-white">Password</label>
                         <input className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none focus:bg-white"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         type="password" id="password" placeholder="Password" arial-label="password" required />
                          </div>
                        <div className="mt-4 items-center flex justify-between">
                          <button className="px-4 py-1 text-white  bg-dark-blue hover:bg-dark-purple rounded"   
                          type="submit">Log In</button>
                          <h2>{loginmsg}</h2>

                        {/* <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-dark-blue hover:text-blue"
                          href="#">Forgot Password?</a> */}
                      </div> 
                      
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
       
    );
  }

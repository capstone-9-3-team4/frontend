import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [userObj, setUserObj] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
      // console.log(userId)
      if (userId) {
     
          axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
              .then(response => {
                  //console.log("hello1")
                  console.log(response.data)
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
              console.log(error);
          })
  };
  useEffect(() => {
      // Navigate based on user role
      if (userObj.role === "T") {
        console.log("therapist")
          navigate("/therapist");
      } else if (userObj.role === "P") {
          navigate("/patient");
      }
  }, [userObj, navigate]);


    return (
    
        <div className="font-sans login bg-cover">
        <div className="container mx-auto flex flex-1 black justify-center items-center">
            <div className="w-full max-w-lg">
              <div className="leading-loose">
                <form onSubmit={login2} className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                    <p className="text-center text-dark-purple text-lg font-bold">LOGIN</p>
                      <div className="">
                        <label className="block text-sm text-white">E-mail</label>
                        <input type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-1 text-gray-700 bg-light-green rounded focus:outline-none focus:bg-white" id="email"  placeholder="Email" aria-label="email" required />
                      </div>
                      <div className="mt-2">
                        <label className="block  text-sm text-white">Password</label>
                         <input className="w-full px-5 py-1 text-gray-700 bg-light-green rounded focus:outline-none focus:bg-white"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         type="password" id="password" placeholder="Password" arial-label="password" required />
                          </div>
                        <div className="mt-4 items-center flex justify-between">
                          <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"   
                          type="submit">Log In</button>

                        {/* <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-dark-blue hover:text-blue"
                          href="#">Forgot Password?</a> */}
                      </div> 
                </form>
              </div>
            </div>
          </div>
        </div>
       
    );
  }

import { Link } from "react-router-dom";
import Logo from "../../src/images/logo.png"

import { useState, useEffect} from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Navbar() {

  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
              setAuthUser(user);
          } else {
              setAuthUser(null);
          }
      });

      return () => {
          listen();
      }
  }, []);

  const userSignOut = () => {
      signOut(auth).then(() => {
      navigate("/")   
      }).catch(error => console.log(error));
  };


  return (
    <nav className="z-50 bg-white p-2 top-0 sticky ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-dark-blue font-bold text-xl"><Link to={"/"} className="hover:text-dark-purple"><img src={Logo} alt="" width="100" /></Link></div>
        <ul className="flex space-x-4 text-dark-blue">
          <li>
            <Link to={"/"} className="hover:text-dark-purple">Home</Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-dark-purple">About</Link>
          </li>
          
          {authUser ? 
              <li className="flex flex-row justify-center">
               <button className="px-4 py-1 text-white bg-dark-blue hover:bg-dark-purple rounded"  onClick={userSignOut}>
                Log Out
               </button>
             </li> 
            : <>
              <li>
                 <Link to={"/login"} className="px-4 py-1 text-white  bg-dark-blue hover:bg-dark-purple rounded">
                              Log In</Link>
              </li>
              <li>
                 <Link to={"/signup"} className="px-4 py-1 text-white bg-dark-blue hover:bg-dark-purple rounded"> Sign Up</Link>
              </li>
              </>
            }
         
         
         
        </ul>
       
      
      </div>
      <div><hr className="h-px my-1 bg-dark-blue border-0 dark:bg-gray-700"></hr></div>
    </nav>
  );
}



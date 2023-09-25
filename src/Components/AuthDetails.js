import { useState, useEffect} from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AuthDetails = () => {
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
        <div className="text-dark-green hover:text-light-green">
             
            {authUser ? 
              <div className="flex flex-row justify-center">
               {/* <p className="p-2 text-gray-400">{`Signed In as ${authUser.email}`}</p>  */}
               <button className="px-6 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded-3xl"  onClick={userSignOut}>
                Log Out
               </button>
             </div> 
            : null}
            {/* {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>} */}
        </div>
        // <i className="text-dark-green text-5xl hover:text-6xl"><FcAutomatic /></i>
        // <p>{`Signed In as ${authUser.email}`}</p>
    );
};
export default AuthDetails;
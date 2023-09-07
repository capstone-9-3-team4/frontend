import { useState, useEffect, Link} from "react";
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
        <div className="text-white hover:text-light-green">
            {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : null}
            {/* {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>} */}
        </div>
    );
};
export default AuthDetails;
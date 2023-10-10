//import AuthDetails from "./AuthDetails";
import SearchBar from "./SearchBar.js";
import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FiFrown,
  FiMeh,
  FiSmile
} from "react-icons/fi";

import {
  SlUserFollow,
  SlDocs,
  SlSettings,
} from "react-icons/sl";

const API = process.env.REACT_APP_API_URL;

export default function TherapistDashboardNav() {
  const { tid } = useParams();
  const location = useLocation();
  const [therapistProfile, setTherapistProfile] = useState([])

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

  // Determine the active route based on the pathname
  const activeRoute = location.pathname.includes('highrisk')
    ? 'highrisk'
    : location.pathname.includes('mediumrisk')
      ? 'mediumrisk'
      : location.pathname.includes('lowrisk')
        ? 'lowrisk'
        : 'paprofiles'


  return (
    <nav className="m-2">
      <div className="">
        <ul className="flex justify-around text-center pl-16 px-16">
          <li className="">
            <Link to={`/therapist/${tid}/highrisk`}>
              <div className={`flex flex-col justify-center items-center text-center ${activeRoute === 'highrisk' ? 'text-red-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl pb-2"><FiFrown /></i>
                <p>High Risk</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/therapist/${tid}/mediumrisk`}>
              <div className={`flex flex-col justify-center items-center text-center ${activeRoute === 'mediumrisk' ? 'text-yellow-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl pb-2"><FiMeh /></i>
                <p>Medium Risk</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/therapist/${tid}/lowrisk`}>
              <div className={`flex flex-col justify-center items-center text-center ${activeRoute === 'lowrisk' ? 'text-green-500' : 'hover:opacity-40'}`}>
                <i className="text-3xl pb-2"><FiSmile /></i>
                <p>Low Risk</p>
              </div>
            </Link>
          </li>
          <li>
            {/* <Link to="/invite"> */}
            <div className={`flex flex-col justify-center items-center text-center ${activeRoute === 'invite' ? 'text-blue-500' : 'hover:opacity-40'}`}>
              <i className="text-3xl pb-2"><SlUserFollow /></i>
              <p>Add Patient</p>
            </div>
            {/* </Link> */}
          </li>
          <li>
            <Link to={`/therapist/${tid}/patients`}>
              <div className={`flex flex-col justify-center items-center text-center ${activeRoute === 'paprofiles' ? 'text-dark-blue' : 'hover:opacity-40'}`}>
                <i className="text-3xl pb-2"><SlDocs /></i>
                <p>Patient Profiles</p>
              </div>
            </Link>
          </li>
          {/* <li><SearchBar /></li> */}
          <li>
            {/* <Link to="/TherapistProfile"> */}
            <div className={`flex flex-col justify-center items-center text-center`}>
              <i className="text-3xl pb-2"><SlSettings /></i>
              <p>Hello, Dr. {therapistProfile.last_name} </p>
            </div>
            {/* </Link> */}
          </li>
          {/* <li><AuthDetails /></li> */}
        </ul>
      </div>
    </nav>
  );
}

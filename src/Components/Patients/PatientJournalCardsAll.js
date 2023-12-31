
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PatientJournalCardAll from "./PatientJournalCardAll";

const API = process.env.REACT_APP_API_URL;


export default function PatientJournalCardsAll () {

    const { tid } = useParams();
    const [patientAll, setPatientAll] = useState([]);
    // console.log("here ",tid)
   
    useEffect(() => {
        axios
            .get(`${API}/therapist/${tid}/patients`)
            .then((response) => {

                setPatientAll(response.data);
              
            })
            .catch((e) => {

                console.warn("catch", e);
            });
    }, [tid]);




    return (
        <div className="font-sans">
            <div className="m-8 p-10 container mx-auto h-full  border-8 border-dark-blue bg-box-background rounded-2xl black justify-left items-center">
                <h1 className="font-bold text-3xl text-dark-purple ">All Patients </h1>
                <p className="italic">Click on card to view Patient's Journal Entries.</p>
                <div className="grid gap-6 pt-6 lg:grid-cols-5 xl:gap-x-12">
                    
                   {patientAll.map((patient) => {
                   
                       return <PatientJournalCardAll key={patient.p_id} patient={patient} />;
                    })}
                    
            
                </div>
            </div>
        </div>
    )
}
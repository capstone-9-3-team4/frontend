import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import PatientJournalCard from "./PatientJournalCard"

const API = process.env.REACT_APP_API_URL;


export default function PatientJournalCardsMR () {

    const { tid } = useParams();
    const [patientAtMiddleRisk, setPatientAtMiddleRisk] = useState([]);
   
    useEffect(() => {
        axios
            .get(`${API}/therapist/${tid}/dashboard/mediumrisk`)
            .then((response) => {

                setPatientAtMiddleRisk(response.data);

            })
            .catch((e) => {

                console.warn("catch", e);
            });
    }, [tid]);




    return (
        <div className="font-sans">
            <div className="m-8 p-10 container mx-auto h-full border-8 border-ppp rounded-2xl black justify-left items-center">
                <h1 className="font-bold text-3xl text-dark-purple ">Patients with Medium Risk Entries </h1>
                <p className="italic">Click on card to view Patient's Journal Entries.</p>
                <div className="grid gap-6 pt-6 lg:grid-cols-5 xl:gap-x-12">
                    
                   {patientAtMiddleRisk.map((patient) => {
                   
                       return <PatientJournalCard key={patient.p_id} patient={patient} />;
                    })}
                    
            
                </div>
            </div>
        </div>
    )
}
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import PatientJournalCard from "./PatientJournalCard"

const API = process.env.REACT_APP_API_URL;


export default function PatientJournalCardsLR () {

    const { tid } = useParams();
    const [patientAtLowRisk, setPatientAtLowRisk] = useState([]);
   
    useEffect(() => {
        axios
            .get(`${API}/therapist/${tid}/dashboard/lowrisk`)
            .then((response) => {

                setPatientAtLowRisk(response.data);

            })
            .catch((e) => {

                console.warn("catch", e);
            });
    }, [tid]);




    return (
        <div className="font-sans">
            <div className="m-8 p-10 container mx-auto h-full border-8 border-dark-green rounded-2xl black justify-left items-center">
                <h1 className="uppercase font-bold text-3xl text-dark-purple ">Patients Journals </h1>
                <p className="italic">Click on card to view Patient's Journal Entries.</p>
                <div className="grid gap-6 pt-6 lg:grid-cols-5 xl:gap-x-12">
                    
                   {patientAtLowRisk.map((patient) => {
                   
                       return <PatientJournalCard key={patient.p_id} patient={patient} />;
                    })}
                    
            
                </div>
            </div>
        </div>
    )
}
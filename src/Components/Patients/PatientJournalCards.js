import PatientJournalCard from "./PatientJournalCard"
export default function PatientJournalCards () {
    return (
        <div className="font-sans">
            <div className="m-8 p-10 container mx-auto h-full rounded-md  bg-light-green bg-cove black justify-left items-center">
                <h1 className="uppercase font-bold text-3xl text-dark-purple ">Patients Journals </h1>
                <p className="italic">Click on card to view Patient's Journal Entries.</p>
                <div className="grid gap-6 pt-6 lg:grid-cols-5 xl:gap-x-12">
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                    <PatientJournalCard />
                </div>
            </div>
        </div>
    )
}
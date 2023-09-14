
export default function PatientJournalListing () {
    
    return (
        <div className="font-sans h-screen">
            <div className="m-8 p-10 container text-center mx-auto h-full rounded-md  bg-light-green bg-cove black justify-left items-center">
            <h1 className="uppercase font-bold text-3xl text-dark-purple ">Patient Journal Listing </h1>   
            <table className="table-fixed">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Analysis Score</th>
                    <th>Read</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>08/23/2023
                    </td>
                    <td>3</td>
                    <td><input type="checkbox" class="rounded text-dark-blue" /></td>
                    </tr>
                    <tr>
                    <td>08/24/2023
                    </td>
                    <td>2</td>
                    <td><input type="checkbox" class="rounded text-dark-blue" /></td>
                    </tr>
                    <tr>
                    <td>08/25/2023
                    </td>
                    <td>1</td>
                    <td><input type="checkbox" class="rounded text-dark-blue" /></td>
                    </tr>
                </tbody>
            </table>
            </div>     
        </div>
    )
}
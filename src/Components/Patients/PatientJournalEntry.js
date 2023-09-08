export default function PatientJournalEntry () {
    return (
        <div className="font-sans text-dark-blue h-screen">
            <div className="m-8 p-10 container mx-auto h-full rounded-md  bg-light-green bg-cove black justify-left items-center">
                <div className="grid grid-cols-2">
                    <div>
                        <span className="flex gap-3">
                            <p>Checkbox - Read</p>
                            <h2 className="font-semibold text-center">Patient Journal Entry with Date</h2>
                        </span>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                <p className="mx-5">Today was a difficult day. Lorem ipsum is made up of random Latin words and phrases that don't have a coherent meaning. It usually begins with "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua". </p>
                            </div>
                    </div>
                    <div>
                    <h2>AI Analysis</h2>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <p>Lorem ipsum is used to help designers plan out where the content will sit, without needing to wait for the content to be written and approved. It's also used to create a natural looking block of text that doesn't distract from the layout. </p>
                    </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <h2>Therapist Notes</h2>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <p>Lorem ipsum is used to help designers plan out where the content will sit, without needing to wait for the content to be written and approved. It's also used to create a natural looking block of text that doesn't distract from the layout. </p>
                        </div>
                    </div>
                    
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                            type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}
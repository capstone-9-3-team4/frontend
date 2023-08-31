export default function Template () {
    return (
        <div className="font-sans h-screen">
            <div className="m-8 p-10 container mx-auto h-full rounded-md  bg-light-green bg-cove black justify-left items-center">
                
                <h1 className="uppercase font-bold text-3xl text-dark-purple ">Title of Page </h1>
               
                <br />
                <p className="text-dark-blue">Explain the purpose of this page or add functionality like a table, etc.</p>
                <br />
                <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                          type="submit">Submit</button>
                

            </div>
            
        </div>
    )
}
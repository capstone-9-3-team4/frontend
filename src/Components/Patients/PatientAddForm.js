export default function PatientAddForm() {
    return (
             
      <div className="flex items-center justify-center m-8 p-10 container mx-auto h-full rounded-md min-h-screen bg-dark-blue">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <h3 className="text-dark-purple uppercase font-bold text-3xl text-center">Add Patient</h3>
            <form action="">
                <div className="mt-4">
                    <div className="flex">
                        <label className="block" for="Name">First Name</label>
                                <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                                <label className="block" for="Name">Last Name</label>
                                <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    
                    </div>
                    <div className="mt-4">
                        <label className="block" for="DOB">Date of Birth</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Gender</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Email</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Telephone</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="flex mt-4">
                        <label className="block">Address</label>
                        <input type="text" placeholder="Street"
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                        <input type="text" placeholder="City"
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                        <input type="text" placeholder="State"
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                        <input type="text" placeholder="Zip"
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    
                    </div>

       
                    <div className="flex">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded"
                            type="submit">Create
                            Account</button>
                    </div>
                    {/* <div className="flex mt-6 gap-2 text-grey-dark">
                        <p>Already have an account?</p>
                        <Link className="text-blue-600 underline hover:underline" to="/login">
                            Log in
                        </Link>
                    </div> */}
                </div>
            </form>
        </div>
      </div>
    );
  }
  
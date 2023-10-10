import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function SignUpForm() {
    return (
      <div>       
      <div className="flex items-center justify-center m-8 p-10 container mx-auto h-full rounded-md min-h-screen bg-dark-blue">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-xl rounded md:w-1/3 lg:w-1/3 sm:w-1/3">
            <h3 className="text-dark-purple uppercase font-bold text-3xl text-center">Sign Up</h3>
            <form action="">
                <div className="mt-4">
                    <div>
                        <label className="block" for="Name">Name</label>
                                <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="mt-4">
                        <label className="block" for="email">Email</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Password</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Confirm Password</label>
                        <input type="text" placeholder=""
                                    className="w-full px-4 py-2 mt-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-dark-green" />
                    </div>
                    <span className="text-xs  font-medium">Password must be same!</span>
                    <div className="flex">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded"
                            type="submit">Create
                            Account</button>
                    </div>
                    <div className="flex mt-6 gap-2 text-grey-dark">
                        <p>Already have an account?</p>
                        <Link className="text-blue-600 underline hover:underline" to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
            </form>
        </div>
       
      </div> 
      <Footer />
      </div>
    );
  }
  
  
  
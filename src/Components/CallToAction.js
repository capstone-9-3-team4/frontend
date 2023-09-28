import { Link } from "react-router-dom";


export default function CallToAction() {
    return (
        <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-5xl md:leading-none">
            <span className="block">Creating Better Connections</span>
        </h1>
        <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6">
            <div className="rounded-full shadow">
               <Link to="/signup" ><button type="button" className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Get Started</button></Link>
            </div>
        </div>
    </div>
    )
}
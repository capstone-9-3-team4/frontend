import { Link } from "react-router-dom";
import Logo from "../../src/images/logo.png"


export default function Navbar() {
  return (
    <nav className="bg-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-dark-blue font-bold text-xl"><img src={Logo} alt="" width="100" /></div>
        <ul className="flex space-x-4 text-dark-blue">
          <li>
            <Link to={"/"} className="hover:text-dark-purple">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="hover:text-dark-purple">About</Link>
          </li>
          
          <li>
          <Link to={"/login"} className="px-4 py-1 text-white  bg-dark-blue hover:bg-dark-purple rounded">
                            Log In</Link>
          </li>
          <li>
          <Link to={"/signup"} className="px-4 py-1 text-white bg-dark-blue hover:bg-dark-purple rounded"> Sign Up</Link>
          </li>
          <li>
          </li>
        </ul>
       
      
      </div>
      <div><hr className="h-px my-1 bg-dark-blue border-0 dark:bg-gray-700"></hr></div>
    </nav>
  );
}



import { Link } from "react-router-dom";

export default function  Footer() {
  return (
   
    <footer className="shadow m-4 dark:bg-gray-800">
       <div><hr className="h-px my-1 bg-dark-blue border-0 dark:bg-gray-700"></hr></div>
    
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-dark-blue sm:text-center dark:text-gray-400">© 2023 <Link to={`/`} className="hover:underline">Therapist Connect™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-dark-blue dark:text-gray-400 sm:mt-0">
            <li>
              <Link to={`/`}>
                 <p className="mr-4 hover:underline md:mr-6 ">About</p>
              </Link>   
            </li>
            <li>
              <Link to={`/`}>
                 <p className="mr-4 hover:underline md:mr-6 ">Privacy Policy</p>
              </Link> 
                
            </li>
            <li>
               <Link to={`/`}>
                 <p className="mr-4 hover:underline md:mr-6 ">Licensing</p>
               </Link> 
              
            </li>
            <li>
                <Link to={`/`}>
                  <p className="mr-4 hover:underline md:mr-6 ">Contact</p>
                </Link> 
               
            </li>
        </ul>
        </div>
    </footer>

  );
}



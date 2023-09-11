import Logo from "../../src/images/logo.png"


export default function  Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><img src={Logo} width="100" /></div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-dark-green hover:text-light-green">Home</a>
          </li>
          <li>
            <a href="#" className="text-dark-green hover:text-light-green">About</a>
          </li>
          <li>
            <a href="#" className="text-dark-green hover:text-light-green">Services</a>
          </li>
          <li>
            <a href="#" className="text-dark-green hover:text-light-green">Contact</a>
          </li>
          <li>
          </li>
        </ul>
       
      
      </div>
      <div><hr class="h-px my-3 bg-dark-green border-0 dark:bg-gray-700"></hr></div>
    </nav>
  );
}



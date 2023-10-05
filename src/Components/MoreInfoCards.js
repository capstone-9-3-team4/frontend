import { Link } from "react-router-dom"
export default function MoreInfoCards() {
    return (
   
<div className=" flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1637245048732-adf1a547835e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Colors" />
       </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">How It Works</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <p className="box-border h-32">TherapistConnect makes gaining real-time insights about your patients’ emotional health between sessions more accessible.
</p>

        </div>
        <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Learn More</button>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1512138664757-360e0aad5132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="Colors" />
       </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Technologies</h1>
      <div className="my-4">
       
        <div className="flex space-x- items-center">
        
          <p className="box-border h-32">TherapistConnect utilizes AI-driven sentiment analysis and keyword extraction via LangChain, enhancing therapists' understanding of patients’ well-being and enabling more effective care.  </p>
        </div>
        <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Learn More</button>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Colors" />
        {/* <p className="absolute top-0 bg-dark-green text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$50/year</p> */}
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">About Us </h1>
      <div className="my-4">
       
        <div className="flex space-x-1 items-center">
          
          <p className="box-border h-32">We are a team of Full-Stack Software Engineer with a focus in Web Development utilizing PERN Stack.</p>
        </div>
        <Link to={"/about"}><button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Learn More</button></Link>
      </div>
    </div>
  </div>
</div>
    )
}
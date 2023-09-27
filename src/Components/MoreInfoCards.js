
export default function MoreInfoCards() {
    return (
   
<div className="min-h-screen flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
       </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">How It Works</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <p>Vanilla JS</p>
        </div>
        <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded">Learn More</button>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
       </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">About Us</h1>
      <div className="my-4">
       
        <div className="flex space-x-1 items-center">
        
          <p>TherapistConnect is ....</p>
        </div>
        <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded">Learn More</button>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
        <p className="absolute top-0 bg-dark-green text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$50/year</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Cost </h1>
      <div className="my-4">
       
        <div className="flex space-x-1 items-center">
          
          <p>Interested in ...</p>
        </div>
        <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded">Learn More</button>
      </div>
    </div>
  </div>
</div>
    )
}
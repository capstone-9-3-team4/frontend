export default function LogIn() {
    return (
    
        <div className="font-sans login bg-cover">
        <div className="container mx-auto flex flex-1 black justify-center items-center">
            <div className="w-full max-w-lg">
              <div className="leading-loose">
                <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                    <p className="text-center text-dark-purple text-lg font-bold">LOGIN</p>
                      <div className="">
                        <label className="block text-sm text-white" for="email">E-mail</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-light-green rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Email" aria-label="email" required />
                      </div>
                      <div className="mt-2">
                        <label className="block  text-sm text-white">Password</label>
                         <input className="w-full px-5 py-1 text-gray-700 bg-light-green rounded focus:outline-none focus:bg-white"
                          type="password" id="password" placeholder="Password" arial-label="password" required />
                      </div>
        
                      <div className="mt-4 items-center flex justify-between">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-dark-green hover:bg-dark-purple rounded"
                          type="submit">Sign In</button>
                        <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-dark-blue hover:text-blue"
                          href="#">Forgot Password?</a>
                      </div>
                    
        
                </form>
        
              </div>
            </div>
          </div>
        </div>
       
    );
  }

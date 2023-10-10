import { SiGithub, SiLinkedin } from "react-icons/si";

import ProfilePic from "../images/profilepic.png";
import Wilton from "../images/Wilton.png"
import Chris from "../images/Chris.jpeg"
import Florance from "../images/Florance.jpeg"
import Ryan from "../images/Ryan.jpeg"
import Elizabeth from "../images/Elizabeth.jpeg"
import Footer from "./Footer";


export default function About() {


  return (
    <>
    <div className="mt-5"></div>
    <h1 className=" text-center text-dark-blue text-4xl font-bold">About the Team</h1>
    <p className="justify-center py-5 px-20">We are Full Stack Web Development Fellows from Pursuit - a 12-month software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify. 
The Project-based curriculum provides hands-on experience with JavaScript, HTML, CSS, Node, Express, React, PostgreSQL, APIs, Git, Data Structures, Algorithms, Sprints, Agile, Code Reviews, and Pair Programming. 
</p>
    <div className=" flex justify-center items-center py-20">
    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        
        <div className="relative">
          <img className="w-full rounded-3xl h-56 shadow-md shadow-dark-blue" src={Elizabeth} alt="Elizabeth"/>
         </div>
        <div className="flex space-x-5 items-baseline"> 
          <h1 className="mt-4 text-dark-blue text-2xl font-bold cursor-pointer">Elizabeth Bright</h1>
          <a href="https://www.linkedin.com/in/elizabethbright721/" target="_blank" ><SiLinkedin /></a>
          <a href="https://github.com/elizabethbright721" target="_blank"><SiGithub /></a>
        </div>
        <div className="my-4">
          <div className=" space-x-1 items-center">
            <p className="">I decided to  jump and build my wings on the way down on this new career path after 24 years in municipal government specializing in technology and administration. Also, as a certified speaker, trainer and life coach with the Maxwell Leadership Team because personal growth and development is also a passion of mine, I want to utilize my professional experience, certifications, and education through Pursuit, to excel as a distinguished Hispanic leader in the technology sector as a Full Stack Web Developer. I also want  to drive innovation and foster growth among fellow Hispanic women and elevate the representation and success of underrepresented individuals in the technology field.</p>
            
  
          </div>
          {/* <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Learn More</button> */}
        </div>
      </div>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <div className="relative">
        <img className="w-full rounded-3xl h-56 shadow-md shadow-dark-blue" src={Ryan} alt="Ryan" /></div>
         <div className="flex space-x-5 items-baseline"> 
          <h1 className="mt-4 text-dark-blue text-2xl font-bold cursor-pointer">Ryan Lundy</h1>
          <a href="https://www.linkedin.com/in/1ryanlundy/" target="_blank"><SiLinkedin /></a>
          <a href="https://github.com/1ryanlundy" target="_blank"><SiGithub /></a>
        </div>
        <div className="my-4">
          <div className="flex space-x- items-center">
            <p className="">In the past year I’ve embarked on a journey of personal and professional growth.  My previous work experiences include manual labor, music retail, and audio engineering.
            My background in audio engineering has equipped me with a keen understanding of the organization and intricacies of signal flow, which I’ve found to be highly relevant in software development. When I am not coding my interests and passions include physical fitness and music production, and my long-term goal is to be able to utilize my newly developed programming skills and apply them to my interests and passions.
            </p>
          </div>
        
        </div>
      </div>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      
        <div className="relative">
        <img className="w-full rounded-3xl h-56 shadow-md shadow-dark-blue" src={Florance} alt="Florance" />
       
        </div>
        <div className="flex space-x-5 items-baseline"> 
          <h1 className="mt-4 text-dark-blue text-2xl font-bold cursor-pointer">Florence Osei</h1>
          <a href="https://www.linkedin.com/in/florence-ernestina-osei/" target="_blank"><SiLinkedin /></a>
          <a href="https://github.com/pursuit-florence" target="_blank"><SiGithub /></a>
        </div>
        <div className="my-4">
         
          <div className="flex space-x-1 items-center">
            
            <p className="">I'm currently immersed in a transformative journey of personal and professional development. My background in IT primarily revolved around computer networking and providing help desk support. However, a pivotal moment occurred when I discovered coding, sparking a profound passion and leading me toward a new path. As I embark on the exciting journey of becoming a full-stack web developer, my future goals are intertwined with leveraging technology to address pressing challenges, However, one of such challenge that deeply resonates with me is the need for innovation in the mental health industry. Join me in this exciting endeavor as I aim to harness the potential of technology to make a meaningful impact
</p>
          </div>
    
        </div>
        
      </div>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        
        <div className="relative">
        <img className="w-full rounded-3xl h-56 shadow-md shadow-dark-blue" src={Chris} alt="Chris" /> </div>
        <div className="flex space-x-5 items-baseline"> 
          <h1 className="mt-4 text-dark-blue text-2xl font-bold cursor-pointer">Christian Orlando</h1>
          <a href="https://www.linkedin.com/in/christian-orlando-it/" target="_blank"><SiLinkedin /></a>
          <a href="https://github.com/orlandochristian" target="_blank"><SiGithub /></a>
        </div>
        <div className="my-4">
          <div className=" space-x-1 items-center">
            <p className="">"Hello, I'm Orlando Christian, a tech professional from Buenos Aires, Argentina. I began my career at the Board of Education, where I pioneered payroll systems. But I soon found a new purpose - creating opportunities for my family. This drove me to explore front-end development. Now, I'm passionate about designing user-friendly interfaces, committed to using technology to make a positive impact. Let's connect and innovate together."</p>
            
  
          </div>
          {/* <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Learn More</button> */}
        </div>
      </div>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        
        <div className="relative">
        <img className="w-full rounded-3xl h-56 shadow-md shadow-dark-blue" src={Wilton} alt="Wilton" /> </div>
        <div className="flex space-x-5 items-baseline"> 
          <h1 className="mt-4 text-dark-blue text-2xl font-bold cursor-pointer">Wilton Camilo</h1>
          <a href="https://www.linkedin.com/in/wilton-l-camilo-339b78130/" target="_blank"><SiLinkedin /></a>
          <a href="https://github.com/WiltonCam" target="_blank"><SiGithub /></a>
        </div>
        <div className="my-4">
          <div className=" space-x-1 items-center">
            <p className="">Hello, I'm Wilton, and I'm on a mission to infuse the tech world with the vibrant spirit of the Dominican Republic. As a first-generation Dominican, I bring the energy, rhythm, and spice of our culture to the forefront. With a diverse background, including experience in mental health and sales at tech-friendly giants like Best Buy, I'm here to make a lasting impact.</p>
            
  
          </div>
          {/* <button className="px-4 py-1 w-full text-white font-light tracking-wider bg-dark-blue hover:bg-dark-purple rounded">Learn More</button> */}
        </div>
      </div>
    </div>
  </div>
    <Footer />
  </>
  );
}

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";



const Navbar = () => {
  return (
       <nav className="  mb-20 flex items-center justify-between py-6 px-8">
        <div className="flex flex-shrink-0 items-center">
            <h3 className="text-white text-2xl">AB</h3>
        </div>
        <div className="m-8 flex items-center space-x-4 text-white text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            </div>
        </nav>
    
    
  )
}

export default Navbar
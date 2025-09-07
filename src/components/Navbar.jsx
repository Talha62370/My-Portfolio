import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-12 bg-neutral-950 border-b border-neutral-800">
      {/* Resume Button */}
      <a href="/resume.pdf" download>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md ml-4">
          Download Resume
        </button>
      </a>

      {/* Social Icons */}
      <div className="flex items-center space-x-6 text-white text-3xl mr-4">
        <a
          href="https://www.linkedin.com/in/malickabutalaha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Talha62370/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

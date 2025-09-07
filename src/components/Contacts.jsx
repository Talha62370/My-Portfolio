import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const CONTACT = {
  city: "Jaipur",
  state: "Rajasthan",
  phoneNo: "+91-6201948479",
  email: "malickabutalaha@gmail.com",
  whatsappNo: "+916201948479",
};

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 py-16">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-3xl font-bold text-white"
      >
        Let’s Work Together
      </motion.h1>

      {/* Sub Heading */}
      <p className="text-center text-neutral-400 mb-10 px-4 max-w-2xl mx-auto">
        I’m open to new opportunities, collaborations, and exciting projects.  
        Reach out and let’s build something great together.
      </p>

      {/* Contact Grid */}
      <div className="grid gap-4 md:grid-cols-3 text-center max-w-4xl mx-auto px-4">
        {/* Location */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128, 90, 213, 0.6)" }}
          className="flex flex-col items-center bg-neutral-950 border-t-4 border-l-4 border-purple-500 rounded-xl p-4 cursor-pointer transition-all"
        >
          <FiMapPin className="text-purple-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
          <p className="text-neutral-400">{CONTACT.city}, {CONTACT.state}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128, 90, 213, 0.6)" }}
          className="flex flex-col items-center bg-neutral-950 border-t-4 border-l-4 border-purple-500 rounded-xl p-4 cursor-pointer transition-all"
        >
          <FiPhone className="text-purple-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-neutral-400 hover:text-purple-400 transition"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128, 90, 213, 0.6)" }}
          className="flex flex-col items-center bg-neutral-950 border-t-4 border-l-4 border-purple-500 rounded-xl p-4 cursor-pointer transition-all"
        >
          <FiMail className="text-purple-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-neutral-400 hover:text-purple-400 transition"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>

      {/* Social & WhatsApp */}
      <div className="mt-6 flex justify-center gap-6 text-xl">
        <a
          href="https://github.com/Talha62370/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/malickabutalaha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-purple-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href={CONTACT.whatsappNo ? `https://wa.me/${CONTACT.whatsappNo.replace(/[^0-9]/g, "")}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* CTA Button */}
      <div className="mt-6 flex justify-center">
        <a
          href={`mailto:${CONTACT.email}`}
          className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition shadow-md"
        >
          📩 Send Me a Message
        </a>
      </div>
    </div>
  );
};

export default Contacts;

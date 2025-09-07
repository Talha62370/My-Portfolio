import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pt-4 pb-8 px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center text-2xl font-semibold text-white mb-4"
      >
        About <span className="text-purple-400">Me</span>
      </motion.h2>

      {/* Content */}
      <div className="max-w-3xl mx-auto flex flex-col lg:flex-col items-center gap-4">
        
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-shrink-0"
        >
          <img
            src="/avtar.png"
            alt="avatar"
            className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-full border border-purple-400 shadow-sm"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center lg:text-left"
        >
          <p className="text-white text-sm lg:text-base font-light leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

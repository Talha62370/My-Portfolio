import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiMysql, SiJavascript, SiSocketdotio, SiPostman, SiGit } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6"; // AI
import { VscVscode } from "react-icons/vsc"; // VS Code
import { FaAws } from "react-icons/fa"; 

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechCard = ({ icon: Icon, label, color, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 w-28 h-28"
  >
    <Icon className={`text-5xl ${color}`} />
    <p className="mt-2 text-sm text-white text-center">{label}</p>
  </motion.div>
);

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-10 text-center text-4xl text-white"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <TechCard icon={RiReactjsLine} label="React" color="text-cyan-400" duration={2.5} />
        <TechCard icon={SiJavascript} label="JavaScript" color="text-yellow-400" duration={3} />
        <TechCard icon={FaNodeJs} label="Node.js" color="text-green-500" duration={3.5} />
        <TechCard icon={SiExpress} label="Express" color="text-white" duration={4} />
        <TechCard icon={SiMongodb} label="MongoDB" color="text-green-500" duration={2} />
        <TechCard icon={SiMysql} label="MySQL" color="text-blue-500" duration={4.5} />
        <TechCard icon={SiSocketdotio} label="Socket.io" color="text-white" duration={5} />
        <TechCard icon={FaRobot} label="AI / OpenRouter" color="text-purple-400" duration={2.2} />
        <TechCard icon={SiPostman} label="Postman" color="text-orange-500" duration={3.8} />
        <TechCard icon={SiGit} label="Git" color="text-red-500" duration={2.8} />
        <TechCard icon={FaAws} label="AWS" color="text-orange-400" duration={3.2} />
        <TechCard icon={VscVscode} label="VS Code" color="text-blue-400" duration={3} />
      </motion.div>
    </div>
  );
};

export default Technologies;

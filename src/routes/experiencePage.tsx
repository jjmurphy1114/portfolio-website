import ExperienceCard from "../components/experienceCard";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const experience = [
    {
      role: "Full Stack Developer Intern",
      company: "SymTrain",
      location: "Remote",
      date: "June 2025 - August 2025",
      description:
        "Developed a React web client using TypeScript to create customer service call simulations",
      imageUrl: "/symtrainLogo.jpeg",
      link: "https://symtrain.ai/",
    },
    {
      role: "Software Engineer Intern",
      company: "Calld",
      location: "Remote",
      date: "June 2023 - August 2023",
      description:
        "Developed a full-stack web application using Node.js, TypeScript, and PostgreSQL",
      imageUrl: "/calldLogo.png",
      link: "http://getcalld.com/",
    },
  ];

  return (
    <div className="flex w-full h-full min-h-screen flex-col items-center bg-lightGray">
      <h1 className="text-6xl font-bold m-4 mt-12">Experience</h1>
      {experience.map((experience, i) => (
        <motion.div
          key={experience.role}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex w-full"
        >
          <ExperienceCard {...experience} />
        </motion.div>
      ))}
    </div>
  );
};
export default ExperiencePage;

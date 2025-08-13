import AnimatedDiv from "../components/AnimatedDiv";
import ExperienceCard from "../components/experienceCard";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const experience = [
    {
      role: "Front-End Developer Intern",
      company: "SymTrain",
      location: "Remote",
      date: "June 2025 - August 2025",
      description:
        "Developed a React web client using TypeScript to create customer service call simulations.",
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-6xl font-bold m-4 mt-12">Experience</h1>
      </motion.div>

      {/* Experience Cards */}
      {experience.map((experience) => (
        <AnimatedDiv key={experience.role} staggerChildren className="md:w-1/2">
          <ExperienceCard {...experience} />
        </AnimatedDiv>
      ))}
    </div>
  );
};
export default ExperiencePage;

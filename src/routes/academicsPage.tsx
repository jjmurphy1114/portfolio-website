import CourseCard from "../components/courseCard";
import ExperienceCard from "../components/experienceCard";
import { motion } from "framer-motion";

const AcademicsPage = () => {
  const courses = [
    {
      course: "CS 3733 - Software Engineering",
      description:
        "Introduction to Software Engineering and the development process. This was a project based class where I worked in a team of 11 using the Agile methodology to develop a web application prototype for Mass General Brigham Hospital.",
    },
    {
      course: "CS 4342 - Machine Learning",
      description:
        "Principles of Machine Learning such as classification, regression, and neural networks.",
    },
    {
      course: "DS 2010 - Data Science II: Modeling And Data Analysis",
      description:
        "Introduction to data science concepts, including data exploration, visualization, and modeling techniques.",
    },
    {
      course: "CS 3013 - Operating Systems",
      description:
        "Study of operating system design and implementation, including process management, concurrency, system calls, virtual memory management, and file systems.",
    },
    {
      course: "CS 4341 - Introduction To Artificial Intelligence",
      description:
        "Fundamentals of AI, including search algorithms, knowledge representation, and machine learning.",
    },
    {
      course: "CS 3431 - Database Systems I",
      description:
        "Introduction to database systems, including database design, relational models, and SQL.",
    },
    {
      course: "CS 3041 - Human Computer Interaction",
      description:
        "Study of user interface design and evaluation, focusing on user-centered design principles.",
    },
    {
      course: "CS 2223 - Algorithms",
      description:
        "Study of algorithms including searching, sorting, and graph algorithms.",
    },
    {
      course: "CS 2303 - Systems Programming Concepts",
      description:
        "Introduction to systems programming, including memory management, file systems, and using C/C++.",
    },
    {
      course: "CS 2103 - Accelerated Object-Oriented Design Concepts",
      description:
        "Study of object-oriented design principles, patterns, and data structures using Java.",
    },
  ];

  return (
    <div className="flex w-full h-full min-h-screen flex-col items-center bg-lightGray">
      <h1 className="text-6xl font-bold m-4 mt-12">Academics</h1>
      <motion.div
        className="flex items-center w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <ExperienceCard
          role="BS in Computer Science and Data Science"
          company="WPI"
          location="Worcester, MA"
          date="Graduation: May 2026"
          description=""
          imageUrl="/wpiLogo2.png"
          link="https://www.wpi.edu/"
        />
      </motion.div>
      <h1 className="text-4xl font-bold m-4 mt-12">Relevant Courses</h1>
      {courses.map((course, i) => (
        <motion.div
          className="flex items-center w-full"
          key={course.course}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.1 + 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <CourseCard {...course} />
        </motion.div>
      ))}
    </div>
  );
};
export default AcademicsPage;

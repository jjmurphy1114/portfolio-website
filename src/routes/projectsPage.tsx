import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Hotel Cerrito Mobile App",
      description:
        "A self-guided tour application developed using React Native in order to enhance the experience of visitors at the self-sustaining Cerrito Agricultural School and Hotel. The app is deployed to the App Store and Google Play Store in collaboration with sponsor Fundación Paraguaya, a non-profit which is dedicated to reducing poverty for Paraguayan families.",
      imageUrl: "/hotelCerritoAppPreview.png",
      link: "https://github.com/jjmurphy1114/HotelCerrito2.0",
    },
    {
      title: "Brigham and Women's Hospital Web App",
      description:
        "Applied Agile development methodologies in the creation of a web application prototype running in the cloud for Mass General Brigham Hospital. The web application was developed using React.js, Typescript, Material UI, Express, Prisma ORM, and PostgreSQL. The cloud application prototype that was created informed hospital representatives about potential features, user interfaces, and design approaches with respect to the application being written by the hospital software development team.",
      imageUrl: "/softEngHomePage.png",
      link: "https://github.com/jjmurphy1114/team-F-production",
    },
    {
      title: "Event Management System",
      description:
        "React web app for creating and managing events with private guest lists. Uses firebase for authentication and database management, as well as for deployment.",
      imageUrl: "/eventManagementSystem.png",
      link: "https://github.com/jjmurphy1114/Event-Management-System",
    },
    {
      title: "Movie Production Data Analysis",
      description:
        "Data Analysis project using Python and Pandas to analyze movie production data. The project aims to analyze a dataset of movies and their associated attributes to identify key predictors of revenue.",
      imageUrl: "/dataScienceProject.png",
      link: "https://github.com/jjmurphy1114/DS2010-Final-Project",
    },
    {
      title: "Diabetes Classifier",
      description:
        "Machine learning project using Python and Scikit-learn to classify diabetes based on patient data. The project aims to predict whether a patient has diabetes based on various health metrics. The models used include Logistic Regression, Random Forests, and Deep Neural Networks.",
      imageUrl: "/machineLearningProject.png",
      link: "https://github.com/jjmurphy1114/Diabetes-Classifier",
    },
  ];

  return (
    <div className="flex w-full h-full min-h-screen flex-col items-center bg-lightGray px-4">
      <h1 className="text-6xl font-bold m-4 mt-12">Projects</h1>
      <div className="flex flex-col gap-8 w-full max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex w-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

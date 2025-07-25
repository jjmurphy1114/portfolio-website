import ProjectCard from "../components/projectCard";

const ProjectsPage = () => {
  return (
    <div className="flex w-full h-full min-h-screen flex-col items-center bg-lightGray">
      <h1 className="text-6xl font-bold m-4 mt-12">Projects</h1>
      <ProjectCard
        title="Hotel Cerrito Mobile App"
        description="A self-guided tour application developed using React Native in order to enhance the experience of visitors at the self-sustaining Cerrito Agricultural School and Hotel. The app is deployed to the App Store and Google Play Store in collaboration with sponsor Fundación Paraguaya, a non-profit which is dedicated to reducing poverty for Paraguayan families."
        imageUrl="src/assets/hotelCerritoAppPreview.png"
        link="https://github.com/jjmurphy1114/HotelCerrito2.0"
      />
      <ProjectCard
        title="Brigham and Women's Hospital Web App"
        description="Applied Agile development methodologies in the creation of a web application prototype running in the cloud for Mass General Brigham Hospital. The web application was developed using React.js, Typescript, Material UI, Express, Prisma ORM, and PostgreSQL. The cloud application prototype that was created informed hospital representatives about potential features, user interfaces, and design approaches with respect to the application being written by the hospital software development team."
        imageUrl="src/assets/softEngHomePage.png"
        link="https://github.com/jjmurphy1114/team-F-production"
      />
      <ProjectCard
        title="Event Management System"
        description="React web app for creating and managing events with private guest lists. Uses firebase for authentication and database management, as well as for deployment."
        imageUrl="src/assets/eventManagementSystem.png"
        link="https://github.com/jjmurphy1114/Event-Management-System"
      />
      <ProjectCard
        title="Movie Production Data Analysis"
        description="Data Analysis project using Python and Pandas to analyze movie production data. The project aims to analyze a dataset of movies and their associated attributes to identify key predictors of revenue."
        imageUrl="src/assets/dataScienceProject.png"
        link="https://github.com/jjmurphy1114/DS2010-Final-Project"
      />
      <ProjectCard
        title="Diabetes Classifier"
        description="Machine learning project using Python and Scikit-learn to classify diabetes based on patient data. The project aims to predict whether a patient has diabetes based on various health metrics. The models used include Logistic Regression, Random Forests, and Deep Neural Networks."
        imageUrl="src/assets/machineLearningProject.png"
        link="https://github.com/jjmurphy1114/Diabetes-Classifier"
      />
    </div>
  );
};
export default ProjectsPage;

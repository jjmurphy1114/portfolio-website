import HomePageButton from "../components/homePageButton";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full min-h-screen flex-col bg-lightGray">
      <div className="flex items-center justify-center flex-col pt-8 mb-4 md:mb-10">
        <h1 className="text-6xl mb-8 font-bold text-black text-center">
          Jacob Murphy
        </h1>
        <img src="/headshot.png" alt="" />
        <h1 className="text-2xl mt-8 font-bold text-black">
          Software Engineer
        </h1>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-center space-y-4">
        <HomePageButton
          onClick={() => {
            navigate("projects");
          }}
          text="Projects📝"
        />
        <HomePageButton
          onClick={() => {
            navigate("experience");
          }}
          text="Experience💼"
        />
        <HomePageButton
          onClick={() => {
            navigate("academics");
          }}
          text="Academics📚"
        />
      </div>
    </div>
  );
}

export default HomePage;

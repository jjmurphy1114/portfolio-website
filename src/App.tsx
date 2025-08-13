import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./routes/homePage";
import ProjectsPage from "./routes/projectsPage";
import ExperiencePage from "./routes/experiencePage";
import AcademicsPage from "./routes/academicsPage";
import Banner from "./components/banner/banner";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

function Root() {
  return (
    <div className="h-full w-full bg-lightGray">
      <ScrollToTop />
      <Banner />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Error!</div>,
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "projects",
          element: <ProjectsPage />,
        },
        {
          path: "experience",
          element: <ExperiencePage />,
        },
        {
          path: "academics",
          element: <AcademicsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

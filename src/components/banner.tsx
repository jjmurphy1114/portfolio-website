import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Snackbar from "./snackbar";
import emailjs from "@emailjs/browser";

const Banner = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [successfully, setSuccessfully] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7izks66",
        "template_seo4y48",
        e.currentTarget,
        "q7T1sBPp4MF04q06K"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setSuccessfully(true);
          setMessage("Message sent successfully!");
          setIsModalOpen(false);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setSuccessfully(false);
          setMessage("Failed to send message. Please try again.");
        }
      );
  };

  const ContactModal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="w-full flex justify-end">
            <button className="text-black text-2xl" onClick={toggleModal}>
              &times;
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-bold py-2 rounded-lg hover:bg-darkGray transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      <nav className="flex fixed top-0 left-0 w-full h-20 border-b-4 items-center justify-between border-darkGray bg-primary shadow-md p-4 z-50">
        <img
          src="public/JMlogo.png"
          alt="JMLogo"
          className="h-12 w-12 mr-4 left-0 flex items-center rounded-lg"
        />
        <div className="flex items-center justify-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <button
            className="text-black font-bold text-lg ml-4"
            onClick={() => navigate("")}
          >
            Home
          </button>
          <button
            className="text-black font-bold text-lg ml-4"
            onClick={() => navigate("projects")}
          >
            Projects
          </button>
          <button
            className="text-black font-bold text-lg ml-4"
            onClick={() => navigate("experience")}
          >
            Experience
          </button>
          <button
            className="text-black font-bold text-lg ml-4"
            onClick={() => navigate("academics")}
          >
            Academics
          </button>
        </div>
        <button
          className="text-black font-bold text-lg ml-4"
          onClick={toggleModal}
        >
          Contact Me
        </button>
        {message && (
          <Snackbar
            message={message}
            onClose={() => setMessage("")}
            successfully={successfully}
          />
        )}
      </nav>
      {isModalOpen && <ContactModal />}
    </>
  );
};
export default Banner;

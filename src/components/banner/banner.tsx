import React, { useEffect, useState } from "react";
import Snackbar from "../snackbar";
import emailjs from "@emailjs/browser";
import DesktopNavButton from "./desktopNavButton";
import MobileNavButton from "./mobileNavButton";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [successfully, setSuccessfully] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                name="from_name"
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
                name="from_email"
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
                name="message"
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

  // Timer for Snackbar
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
          src="/JMlogo.png"
          alt="JMLogo"
          className="h-12 w-12 mr-4 left-0 flex items-center rounded-lg"
        />
        {/* Mobile Menu */}
        <div className="md:hidden flex items-end justify-end w-full">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <DesktopNavButton text="Home" link="" />
          <DesktopNavButton text="Projects" link="/projects" />
          <DesktopNavButton text="Experience" link="/experience" />
          <DesktopNavButton text="Academics" link="/academics" />
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div>
            <div className="absolute top-20 left-0 w-full bg-primary shadow-lg p-4">
              <MobileNavButton
                text="Home"
                link=""
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavButton
                text="Projects"
                link="/projects"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavButton
                text="Experience"
                link="/experience"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavButton
                text="Academics"
                link="/academics"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <button
                className="text-black font-bold text-lg block"
                onClick={toggleModal}
              >
                Contact Me
              </button>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        <button
          className="hidden md:flex text-black font-bold text-lg ml-4"
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

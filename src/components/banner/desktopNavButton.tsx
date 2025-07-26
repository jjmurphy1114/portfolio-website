import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type DesktopNavButtonProps = {
  text: string;
  link: string;
};

const DesktopNavButton: React.FC<DesktopNavButtonProps> = ({ text, link }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path || (path === "" && location.pathname === "/");

  return (
    <button
      className={`text-black background-primary font-bold text-lg ml-4 ${
        isActive(link) ? "text-black underline" : ""
      }`}
      onClick={() => navigate(link)}
    >
      {text}
    </button>
  );
};

export default DesktopNavButton;

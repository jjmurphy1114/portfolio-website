import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type MobileNavButtonProps = {
  text: string;
  link: string;
  setMobileMenuOpen: (open: boolean) => void;
};

const MobileNavButton: React.FC<MobileNavButtonProps> = ({
  text,
  link,
  setMobileMenuOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path || (path === "" && location.pathname === "/");
  return (
    <button
      className={`text-black font-bold text-lg block mb-2${
        isActive(link) ? "text-black underline" : ""
      }`}
      onClick={() => {
        navigate(link);
        setMobileMenuOpen(false);
      }}
    >
      {text}
    </button>
  );
};

export default MobileNavButton;

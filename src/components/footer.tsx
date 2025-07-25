import FooterButton from "./footerButton";

export const Footer = () => {
  return (
    <footer className="bg-lightGray text-black p-4 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <FooterButton
          imgSrc="src/assets/github.svg"
          text="GitHub"
          link="https://github.com/jjmurphy1114?tab=repositories"
        />
        <FooterButton
          imgSrc="src/assets/linkedin.svg"
          text="LinkedIn"
          link="https://www.linkedin.com/in/jacobmurphy14"
        />
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Jacob Murphy. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;

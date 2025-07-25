type FooterButtonProps = {
  link: string;
  text: string;
  imgSrc: string;
};

const FooterButton = ({ link, text, imgSrc }: FooterButtonProps) => {
  return (
    <button
      className="flex items-center space-x-2 hover:bg-darkGray transition-colors rounded-md"
      onClick={() => window.open(link)}
    >
      <img src={imgSrc} alt={text} className="h-6 w-6 mr-2" />
      {"  " + text}
    </button>
  );
};
export default FooterButton;

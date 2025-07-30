type HomePageButtonProps = {
  onClick?: () => void;
  text: string;
};

const HomePageButton = ({ onClick, text }: HomePageButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative bg-primary text-black font-bold text-xl md:text-3xl w-full md:w-1/4 min-h-[56px] md:min-h-[100px] border border-darkGray px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-[24px] overflow-hidden group shadow-lg"
    >
      <span className="absolute inset-0 w-full h-full bg-darkGray transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 z-0" />
      <span className="relative z-10">{text}</span>
    </button>
  );
};
export default HomePageButton;

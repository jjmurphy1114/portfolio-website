type HomePageButtonProps = {
  onClick?: () => void;
  text: string;
};

const HomePageButton = ({ onClick, text }: HomePageButtonProps) => {
  return (
    <button
      className="text-black font-bold text-xl md:text-3xl w-full md:w-1/4 min-h-[56px] md:min-h-[100px] bg-primary border border-darkGray px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-[24px] hover:bg-darkGray transition-colors shadow-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default HomePageButton;

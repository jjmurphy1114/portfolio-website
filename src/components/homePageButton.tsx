type HomePageButtonProps = {
  onClick?: () => void;
  text: string;
};

const HomePageButton = ({ onClick, text }: HomePageButtonProps) => {
  return (
    <button
      className="text-black font-bold text-3xl ml-4 w-full md:w-1/3 min-h-[80px] md:min-h-[100px] bg-primary border border-darkGray p-2 rounded-lg hover:bg-darkGray transition-colors shadow-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default HomePageButton;

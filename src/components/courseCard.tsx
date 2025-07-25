type CourseCardProps = {
  course: string;
  description: string;
  link?: string;
};

const CourseCard = ({ course, description, link = "" }: CourseCardProps) => {
  return (
    <button
      onClick={link ? () => window.open(link, "_blank") : undefined}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-5xl mx-auto my-4"
    >
      <div className="flex flex-col justify-between md:flex-row">
        <div className="p-6 flex flex-col justify-center text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{course}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default CourseCard;

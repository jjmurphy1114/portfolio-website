type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  link = "",
}: ProjectCardProps) => {
  return (
    <button
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-5xl mx-auto my-6"
      onClick={link ? () => window.open(link, "_blank") : undefined}
    >
      <div className="flex flex-col md:flex-row">
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:w-1/3 h-60 object-cover"
        />
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;

type ExperienceCardProps = {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  link?: string;
};

const ExperienceCard = ({
  role,
  company,
  location,
  date,
  description,
  imageUrl,
  link = "",
}: ExperienceCardProps) => {
  return (
    <button
      onClick={link ? () => window.open(link, "_blank") : undefined}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-5xl mx-auto my-6"
    >
      <div className="flex flex-col justify-between md:flex-row">
        <div className="p-6 flex flex-col justify-center text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {role} @{company}
          </h2>
          <h3 className="text-gray-600 mb-1">
            {location} | {date}
          </h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        <img
          src={imageUrl}
          alt={role}
          className="w-full md:w-1/5 md:h-30 object-cover"
        />
      </div>
    </button>
  );
};

export default ExperienceCard;

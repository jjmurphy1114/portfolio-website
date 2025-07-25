const Snackbar = ({
  message,
  onClose,
  successfully,
}: {
  message: string;
  onClose: () => void;
  successfully: boolean;
}) => {
  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        successfully ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-white">{message}</span>
        <button className="text-white text-xl" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};
export default Snackbar;

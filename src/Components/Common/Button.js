// import star from "../images/star.svg";

function Button({ children, width }) {
  return (
    <div>
      <button
        className="flex items-center px-4 border border-gray-400 py-2 rounded-md text-black gap-1"
        style={{ width: `${width}%` }}
      >
        <span>{children}</span>
      </button>
    </div>
  );
}

export default Button;

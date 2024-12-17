function Button({ children, width, padding = 4 }) {
  return (
    <div>
      <button
        className={`flex items-center border border-gray-400 py-2 px-${padding} rounded-md text-black gap-1`}
        style={{ width: `${width}%` }}
      >
        <span>{children}</span>
      </button>
    </div>
  );
}

export default Button;

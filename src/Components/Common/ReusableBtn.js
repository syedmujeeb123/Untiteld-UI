function ReusableBtn({ children }) {
  return (
    <div>
      <button className="flex items-center bg-purple-700 px-4 py-2 rounded-md text-white gap-1">
        {children}
      </button>
    </div>
  );
}

export default ReusableBtn;

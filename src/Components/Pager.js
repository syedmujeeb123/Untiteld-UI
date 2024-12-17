// import ReusableBtn from "./Common/ReusableBtn";
import LeftArrow from "./images/leftArrow.svg";
import RightArrow from "./images/rightArrow.svg";

function Pager() {
  return (
    <div className="mt-8 flex items-center justify-between mb-20 px-3">
      <button className="md:border-none flex gap-2 border border-gray-300 rounded-md p-1">
        <img src={LeftArrow} alt={LeftArrow} className="w-6 h-6" />
        <span className="md:block hidden">Previous</span>
      </button>
      <div
        className="md:block  text-center flex justify-center flex-grow hidden"
        style={{ wordSpacing: " 14px" }}
      >
        1 2 3 4 ...... 7 8 9 10
      </div>
      <div
        className="md:hidden block  text-center flex justify-center flex-grow"
        style={{ wordSpacing: " 14px" }}
      >
        Page 1 of 10
      </div>
      <button className="md:border-none flex gap-2 ml-auto items-center border border-gray-300 rounded-md p-1">
        <span className="md:block hidden">Next</span>
        <img src={RightArrow} alt={RightArrow} className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Pager;

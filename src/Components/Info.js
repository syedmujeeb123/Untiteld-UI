// import stars from "../images/stars.jpeg";
import ReusableBtn from "../Components/Common/ReusableBtn";
import Button from "./Common/Button";
import star from "../Components/images/star.svg";

function Info() {
  return (
    <div className="mt-12 px-6 flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-12 gap-4">
      {/* Text Section */}
      <div>
        <div className="font-bold text-xl">232 Stays in Melbourne</div>
        <p className="text-gray-600 text-sm">
          Book your next stay at one of our properties.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex md:flex-row items-center gap-3 md:ml-auto">
        <Button className="w-full md:w-auto">Share</Button>
        <ReusableBtn className="w-full md:w-auto">
          <img src={star} alt="star" className="w-5" />
          Save Search
        </ReusableBtn>
      </div>
    </div>
  );
}

export default Info;

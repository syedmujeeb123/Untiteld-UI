import Button from "./Common/Button";
import ReusableBtn from "./Common/ReusableBtn";
import SearchInput from "./Common/SearchInput";
import filterIcon from "../Components/images/filterIcon.svg";

function SearchBar() {
  return (
    <div>
      {/* Search Bar Container */}
      <div className="flex items-center gap-2 w-full">
        <SearchInput className="flex-1" />
        {/* Medium and above screens: Show Clear and Search buttons in one line */}
        <div className="hidden md:flex gap-2">
          <Button>Clear</Button>
          <ReusableBtn>Search</ReusableBtn>
        </div>
      </div>

      {/* More Filters Button - Mobile View */}
      <div className="md:hidden block mt-2 w-screen">
        <Button width={100}>
          <span className="flex gap-2 items-center justify-center w-full">
            <img src={filterIcon} alt="filterIcon" />
            More filters
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;

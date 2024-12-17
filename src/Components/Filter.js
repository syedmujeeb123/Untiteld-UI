import CalendarDropdown from "./Calenderdropdown";
import Button from "./Common/Button";
import CountryDropdown from "./Countrydropdown";
import PriceDropdown from "./Pricedropdown";
import filterIcon from "../Components/images/filterIcon.svg";

function Filter() {
  return (
    <div className="md:block hidden">
      <div className="flex justify-between py-8">
        <div className="flex items-center gap-2">
          <CountryDropdown />
          <CalendarDropdown />
          <PriceDropdown />
        </div>

        <Button>
          <span className="flex gap-2">
            <img src={filterIcon} alt={filterIcon} />
            More filters
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Filter;

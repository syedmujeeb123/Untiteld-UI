import { useEffect, useState } from "react";
import Button from "./Common/Button";
import iconLocation from "./images/location.svg";
import iconBed from "./images/iconBed.svg";
import iconWifi from "./images/iconWifi.svg";
import RadioBtn from "./Common/RadioBtn";
import topLocation from "./images/topLocation.svg";
import hanmBurger from "./images/hamburger.svg";
import StarRating from "./StarRating";

const info = [
  {
    image: "/room1.svg",
    title: "Entire apartment rental in Collingwood",
    description: "A Stylish Apt, 5 min walk to Queen Victoria Market",
    rating: {
      value: 4.9,
      reviews: 202,
    },
    location: "Collingwood VIC",
    descriptionBed: "1 bed",
    descriptionWifi: "Wifi",
    descriptionLocation: "location",
    price: "540",
  },
  {
    image: "/room2.svg",
    title: "Entire loft in central business district",
    description: "Designer NY style loft",
    rating: {
      value: 4.8,
      reviews: 44,
    },
    location: "Melbourne VIC",
    descriptionBed: "1 bed",
    descriptionWifi: "Wifi",
    descriptionLocation: "location",
    price: "620",
  },
  {
    image: "/room3.svg",
    title: "Entire rental unit in Carlton",
    description: "5 minute walk from University of Melbourne",
    rating: {
      value: 4.7,
      reviews: 82,
    },
    location: "Carlton VIC",
    descriptionBed: "1 bed",
    descriptionWifi: "Wifi",
    descriptionLocation: "location",
    price: "490",
  },
  {
    image: "/room4.svg",
    title: "Entire apartment rental in Collingwood",
    description: "Magnificent apartment next to public transport",
    rating: {
      value: 4.8,
      reviews: 12,
    },
    location: "Collingwood VIC",
    descriptionBed: "1 bed",
    descriptionWifi: "Wifi",
    descriptionLocation: "location",
    price: "600",
  },
];

function SearchResults() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8">
      <div className="flex">
        <div className="flex gap-2 px-2 text-sm">
          <Button>Sort by date</Button>
          <Button>Sort by price</Button>
        </div>
        <div className="flex ml-auto">
          <img
            src={hanmBurger}
            alt="Hamburger Icon"
            className="border rounded-md"
          />
          <img
            src={topLocation}
            alt="Top Location Icon"
            className="border rounded-md"
          />
        </div>
      </div>

      {info.map((result, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mt-8 justify-between gap-6 border-2 border-gray-100 md:p-3 rounded-md"
        >
          <div>
            <img
              src={result.image}
              alt={result.title}
              className="md:h-32 md:w-auto h-64 w-screen object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 p-3">
            <div className="mt-auto gap-2 md:hidden flex text-xl">
              <strong>${result.price}</strong>
              <span>AUD Total</span>
            </div>
            <h3 className="text-purple-700 font-semibold">{result.title}</h3>
            <h3 className="font-semibold">{result.description}</h3>
            <div className="flex gap-2">
              <StarRating size={20} value={result.rating.value} />
              <h3 className="font-semibold">{result.rating.value}</h3>
              <h3>{`${result.rating.reviews} reviews`}</h3>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <img src={iconLocation} alt="Location Icon" />
              <div>{result.location}</div>
              <img src={iconBed} alt="Bed Icon" />
              <div>{result.descriptionBed}</div>
              <img src={iconWifi} alt="Wi-Fi Icon" />
              <div>{result.descriptionWifi}</div>
            </div>
          </div>
          <div className="ml-auto flex-col md:flex hidden">
            <div className="ml-auto ">
              <RadioBtn />
            </div>
            <div className="mt-auto gap-2 flex">
              <strong>${result.price}</strong>
              <span>AUD Total</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div className="mt-8">
  //     <div className="flex">
  //       <div className="flex gap-2 px-2 text-sm">
  //         <Button>Sort by date</Button>
  //         <Button>Sort by price</Button>
  //       </div>
  //       <div className="flex ml-auto">
  //         <img
  //           src={hanmBurger}
  //           alt="Hamburger Icon"
  //           className="border rounded-md"
  //         />
  //         <img
  //           src={topLocation}
  //           alt="Top Location Icon"
  //           className="border rounded-md"
  //         />
  //       </div>
  //     </div>

  //     {data.map((result, index) => (
  //       <div
  //         key={index}
  //         className="flex flex-col md:flex-row mt-8 justify-between gap-6 border-2 border-gray-100 md:p-3 rounded-md"
  //       >
  //         <div>
  //           <img
  //             src={result.image}
  //             alt={result.title}
  //             className="md:h-32 md:w-auto h-64 w-screen object-cover"
  //           />
  //         </div>

  //         <div className="flex flex-col gap-2 p-3">
  //           <div className="mt-auto gap-2 md:hidden flex text-xl">
  //             <strong>${result.price}</strong>
  //             <span>AUD Total</span>
  //           </div>
  //           <h3 className="text-purple-700 font-semibold">{result.title}</h3>
  //           <h3 className="font-semibold">{result.description}</h3>
  //           <div className="flex gap-2">
  //             <StarRating size={20} value={result.rating.value} />
  //             <h3 className="font-semibold">{result.rating.value}</h3>
  //             <h3>{`${result.rating.reviews} reviews`}</h3>
  //           </div>
  //           <div className="flex items-center gap-2 text-gray-600">
  //             <img src={iconLocation} alt="Location Icon" />
  //             <div>{result.location}</div>
  //             <img src={iconBed} alt="Bed Icon" />
  //             <div>{result.descriptionBed}</div>
  //             <img src={iconWifi} alt="Wi-Fi Icon" />
  //             <div>{result.descriptionWifi}</div>
  //           </div>
  //         </div>
  //         <div className="ml-auto flex-col md:flex hidden">
  //           <div className="ml-auto ">
  //             <RadioBtn />
  //           </div>
  //           <div className="mt-auto gap-2 flex">
  //             <strong>${result.price}</strong>
  //             <span>AUD Total</span>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default SearchResults;

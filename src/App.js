import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import Filter from "./Components/Filter";
import SearchBar from "./Components/SearchBar";
import Map from "./Components/Map";
import SearchResults from "./Components/SearchResults";
import Pager from "./Components/Pager";

export default function App() {
  return (
    <div className="md:px-20 p-4 md:py-4">
      <Navbar />
      <Info />
      <Filter />
      <div className="md:hidden block -mt-8 mb-8">
        <Map />
      </div>
      <SearchBar />
      <div className="md:block hidden">
        <Map />
      </div>
      <SearchResults />
      <Pager />
    </div>
  );
}

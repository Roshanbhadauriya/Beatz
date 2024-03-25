import React from "react";
import homeIcon from "../assets/icons/home.svg";
import pin from "../assets/icons/pin.svg";
import searchIcon from "../assets/icons/search.svg";
const HomeAndSearch = () => {
  return (
    <div className="p-5 h-40  text-white bg-[#121212] rounded-lg flex flex-col gap-y-4 cursor-pointer">
      <div className="flex  gap-4 items-center ">
        <img src={homeIcon} alt="homeIcon" className="w-9 invert " />
        <h1 className="text-lg font-semibold mt-1">Home</h1>
      </div>
      {/* on Hover put opacity to 100 for icon to be fully white in color */}
      <div className="flex gap-4 items-center opacity-55 
       cursor-pointer">
        <img
          src={searchIcon}
          alt="searchIcon"
          className="w-9 invert fill-neutral-200 "
        />

        <h1 className="text-lg font-semibold mb-1 ">Search</h1>
      </div>
    </div>
  );
};

export default HomeAndSearch;

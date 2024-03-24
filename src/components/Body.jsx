import React from "react";
import HomeAndSearch from "./HomeAndSearch";
import Library from "./Library";
import MainPage from "./MainPage";
import Playbar from "./Playbar";
const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full h-screen flex  gap-1 p-1">
        <div className="left-screen w-1/3 h-full flex flex-col gap-y-1 sticky">
          <HomeAndSearch />
          <Library />
        </div>
        <div className=" w-3/4 h-full right-screen">
          <MainPage />
        </div>
      </div>
      <Playbar />
    </div>
  );
};

export default Body;

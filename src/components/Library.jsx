import React from "react";
import libraryIcon from "../assets/icons/library.svg";
import searchIcon from "../assets/icons/search.svg";
import Playbar from "./Playbar";
import Playlist from "./Playlist";
const Library = () => {
  return (
    <div className="p-3 h-full bg-[#121212] rounded-lg">
      {/* add playlist button */}
      <div className="flex  p-3 -mb-3 gap-1 justify-between opacity-90 ">
        {/* Library Text */}
        <div className="flex items-center gap-2">
          <img src={libraryIcon} alt="Library Icon" className="invert w-9" />
          <h1 className="text-lg font-semibold">Your Library</h1>
        </div>
        {/* Create Playlist */}
        <div className="flex items-center p-1 gap-1 justify-end opacity-55 hover:opacity-100">
          <span class="font-light text-4xl mb-2">+</span>
          <h1 class="text-md">Create Playlist</h1>
        </div>
      </div>
      <div className="px-3 mb-2 rounded-2xl hover:bg-slate-500">
        <img
          src={searchIcon}
          alt="searchIcon"
          className="w-8  invert fill-neutral-200 "
        />
      </div>

      <Playlist />
    </div>
  );
};

export default Library;

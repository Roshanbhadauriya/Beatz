import React from "react";
import favIcon from "../assets/icons/fav.svg";
import pin from "../assets/icons/pin.svg";
import libraryIcon from "../assets/icons/library.svg";
import searchIcon from "../assets/icons/search.svg";
const Playlist = () => {
  const likedSongs = 0;
  return (
    <div className="cursor-pointer select-none">

      {/* PLaylist */}
      <div className="p-3 rounded-lg w-full flex gap-x-3 leading-none text-white text-lg font-semibold cursor-pointer hover:bg-slate-400 select-none">
        {/* // Icon Section */}
        <div className="w-11 ">
          <img
            src={favIcon}
            alt="Favorites Icon"
            className=" p-3 rounded-md w-full bg-gradient-to-r from-purple-600 to-blue-600 "
          />
        </div>
        {/* // Text Section */}
        <div className="p-1">
          <h1>Liked Songs</h1>
          <div className="flex gap-2 font-normal text-sm text-gray-300">
            <img src={pin} alt="Pin Icon" className=" w-4" />
            <h2>Playlist • {likedSongs} songs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;

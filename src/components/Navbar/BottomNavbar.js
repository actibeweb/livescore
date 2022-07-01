import React from "react";

const BottomNavbar = () => {
  return (
    <div className="px-4 py-2 border-n-bg-gray border-t border-b text-n-white flex justify-between items-center">
      <div className="text-n-orange flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-cog"></i>
        <p className="text-xxs">Scores</p>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-star-o"></i>
        <p className="text-xxs">Favourites</p>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">News</p>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-cog"></i>
        <p className="text-xxs">Bet</p>
      </div>
    </div>
  );
};

export default BottomNavbar;

import React from "react";
import {Link} from "react-router-dom";
const BottomNavbar = () => {
  return (
    <div className="px-4 py-2 border-n-bg-gray border-t border-b text-n-white flex justify-between items-center">
      <div className="text-n-orange flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-cog"></i>
        <p className="text-xxs">FAQ</p>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-star-o"></i>
        <p className="text-xxs">Contact Us</p>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">Advertisement</p>
      </div>
      <div className="flex flex-col gap-1 justify-center" style={{cursor:"pointer"}} >
        <Link to="/about" >
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">About Us</p>
        </Link>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">News</p>
      </div>
    
    </div>
  );
};

export default BottomNavbar;

import React from "react";
import {Link} from "react-router-dom";
const BottomNavbar = () => {
  return (
    <div className="px-4 py-2 border-n-bg-gray border-t border-b text-n-white flex justify-between items-center">
     
      <div className="flex flex-col gap-1 justify-center" style={{cursor:"pointer"}} >
        <Link to="/about" >
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">About Us</p>
        </Link>
      </div>
      <div className="flex flex-col gap-1 justify-center" style={{cursor:"pointer"}} >
        <Link to="/contact" >
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">Contact Us</p>
        </Link>
      </div>
      <div className="flex flex-col gap-1 justify-center" style={{cursor:"pointer"}} >
        <Link to="/blog" >
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">Blog</p>
        </Link>
      </div>
      <div className="flex flex-col gap-1 justify-center" style={{cursor:"pointer"}} >
        <Link to="/terms" >
        <i className="flex justify-center fa fa-file"></i>
        <p className="text-xxs">Terms and Conditions</p>
        </Link>
      </div>
     
    
    </div>
  );
};

export default BottomNavbar;

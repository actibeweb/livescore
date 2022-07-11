import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";



const tabs = [
  { name: "Football", link: "/", linkName: "Home" },
  { name: "Hockey", link: "/", linkName: "Home" },
  { name: "Basketball", link: "/", linkName: "basketball" },
  { name: "Tennis", link: "/", linkName: "tennis" },
  { name: "Cricket", link: "/", linkName: "cricket" },
];

const TopNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <nav className="px-2.5 text-n-white flex justify-between items-center ">
        <div className="p-2 z-20 md:hidden" onClick={toggleMenu}>
          <button className={isToggled ? "hamburger active" : "hamburger"}>
            <span className="line"> </span> <span className="line"> </span>
            <span className="line"> </span>
          </button>
        </div>
        <div>
          <p className="text-xl font-bold">LiveScore</p>
        </div>
        <div>
          <i className="fa fa-search"></i>
        </div>
      </nav>

      <div className="hide-scrollbar md:mt-4 px-2.5 flex items-center overflow-auto">
        {tabs.map((tab, index) => {
          return (
            <Link key={index} to={`/${tab.linkName}`}>
              <p
                className={
                  activeTab.name === tab.name
                    ? "px-3 py-[3px] mr-3 mb-5 rounded-xl text-sm font-bold flex justify-center items-center bg-n-white text-n-black"
                    : "px-3 py-[3px] mr-3 mb-5 rounded-xl text-sm font-bold flex justify-center items-center bg-n-bg-gray text-pry hover:bg-n-white hover:text-n-black "
                }
              >
                {tab.name}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default TopNavbar;

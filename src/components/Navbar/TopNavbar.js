import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getCategories, getLogo } from "../../api/common";
import Loader from "../Common/Loader";
const tabs = [
  { name: "Soccer", link: "/", linkName: "" },
  // { name: "Cricket", link: "/", linkName: "cricket" },
  // { name: "Hockey", link: "/", linkName: "hockey" },
  { name: "Basketball", link: "/", linkName: "basketball" },
  { name: "Tennis", link: "/", linkName: "tennis" },
  { name: "Rugby", link: "/", linkName: "rugby" },
  // { name: "Baseball", link: "/", linkName: "baseball" },
  // { name: "Motosports", link: "/", linkName: "/motosports" },
  // { name: "MMA Fight", link: "/", linkName: "mma" },
];

const TopNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [logo, setLogo] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const getLogoHandler = async () => {
    try {
      setLoading(true);
      const data = await getLogo();
      console.log(data);
      setLogo(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const getCategoriesHandler = async () => {
    try {
      setLoading(true);
      const data = await getCategories();
      console.log(data);

      let categoryData = [];
      for (let i = 0; i < data.categories.length; i++) {
        categoryData.push({
          name: data.categories[i].toUpperCase(),
          link: `/`,
          linkName: data.categories[i],
        });
      }
      console.log(categoryData);
      setCategories(categoryData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getLogoHandler();
    getCategoriesHandler();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <nav className="px-2.5 text-n-white flex justify-between items-center mt-4  "  >
            {/* <div className="p-2 z-20 md:hidden" onClick={toggleMenu}>
          <button className={isToggled ? "hamburger active" : "hamburger"}>
            <span className="line"> </span> <span className="line"> </span>
            <span className="line"> </span>
          </button>
        </div> */}
            <div className="mt-2" style={{margin:"0.8rem"}}  >
              {logo && <img src={logo.url} alt="" width={150} height={75}  className="mt-2" />}
            </div>
            <div>
              <i className="fa fa-search"></i>
            </div>
          </nav>

          <div className="hide-scrollbar md:mt-4 px-2.5 flex items-center overflow-auto">
            {categories?.map((tab, index) => {
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
      )}
    </>
  );
};

export default TopNavbar;

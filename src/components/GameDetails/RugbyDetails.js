import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getRandomScore } from "../../utils/randomScore";
import { getFixtureById } from "../../api/rugby";
import Loader from "../Common/Loader";
import Adsense from "../Common/Adsense";
const RugbyDetails = () => {
  const [markAsFavourite, setMarkAsFavourite] = useState(false);
  const [homeScore, setHomeScore] = useState(3);
  const [awayScore, setAwayScore] = useState(2);
  const [gameStatus, setGameStatus] = useState("NotStarted");
  const [activeTab, setActiveTab] = useState("Scorecard");
  const [activeSubTab, setActiveSubTab] = useState("Events");
  const [activeTableSubTab, setActiveTableSubTab] = useState("All");
  const [activeH2HSubTab, setActiveH2HSubTab] = useState("H2H");
  const [game, setGame] = useState(undefined);
  const tabs = ["Info", "Scorecard"];
  const subTabs = ["Events", "Commentary"];
  const tableTabs = ["All", "Home", "Away"];
  const H2HTabs = ["H2H", "Team A", "Team B"];
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFixtureHandler(id);
  }, []);
  const getFixtureHandler = async (id) => {
    try {
      setLoading(true);
      const data = await getFixtureById(id);
      console.log(data);
      console.log(data.response[0]);
      setGame(data.response[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  function formatTime(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ":" + m.substr(-2);
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {game && (
            <div className="text-n-white py-1 lg:w-[50%] lg:mx-auto">
              <div className="px-2.5 mb-2 flex justify-between items-center">
                <div className="flex items-center gap-2 mb-2">
                  <img src={game.league.logo} alt="" className="w-5 h-3" />

                  <div className="grid">
                    <p className="capitalize text-sm font-bold">
                      {game.league.name}
                    </p>
                    <p className="capitalize text-11px text-pry">
                      {game.country.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fa fa-gamepad"></i>
                  <div
                    onClick={() => {
                      setMarkAsFavourite(!markAsFavourite);
                    }}
                    className={
                      markAsFavourite
                        ? "text-n-orange cursor-pointer"
                        : "cursor-pointer text-n-white"
                    }
                  >
                    <i
                      className={`fa fa-${
                        markAsFavourite ? "star " : "star-o"
                      }`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="mx-2.5 h-20 py-3 relative flex justify-center items-center bg-n-bg-gray rounded-lg">
                {game.status.short !== "FT" ? (
                  <div className="grid gap-[6px] mr-10 w-10">
                    {game.status.short === "NS" ? (
                      <p className="text-14px text-center font-thin text-n-orange">
                        {formatTime(game.timestamp)}
                      </p>
                    ) : (
                      <p className="text-11px text-center font-thin text-n-orange">
                        {game.status.long}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="flex justify-center items-center w-10 mr-10">
                    <p className="absolute left-5 text-11px text-center font-thin ">
                      {game.status.long}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center gap-10 w-64">
                  <div className="flex flex-col justify-center gap-3">
                    <img
                      src={game.teams.home.logo}
                      alt=""
                      className="w-6 h-6 mx-auto"
                    />
                    <p className="text-11px text-center">
                      {game.teams.home.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[22px] flex items-center gap-1 font-bold">
                      <span> {game.scores.home}</span> -{" "}
                      <span> {game.scores.away}</span>
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <img
                      src={game.teams.away.logo}
                      alt=""
                      className="w-6 h-6 mx-auto"
                    />

                    <p className="text-11px text-center">
                      {game.teams.away.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-2.5">
            <Adsense />
          </div>
              <div className="pb-1 mb-2 border-n-bg-gray border-b">
                <div className="my-2 mx-2.5 flex gap-4 overflow-auto">
                  {tabs.map((tab, index) => {
                    return (
                      <p
                        onClick={() => setActiveTab(tab)}
                        key={index}
                        className={
                          tab === activeTab ? "text-n-orange" : "text-pry"
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {tab}
                      </p>
                    );
                  })}
                </div>
              </div>
              {activeTab === "Info" && (
                <div className="mx-2.5 text-pry">
                  <p className="uppercase text-11px">Match Info</p>
                  <div className="mt-2 border-n-bg-gray border rounded-md">
                    <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                      <i className="fa fa-calendar"></i>
                      <div>
                        <p className="capitalize text-11px">
                          {formatDate(game.date)}
                        </p>
                        <p className="capitalize text-9px">Date</p>
                      </div>
                    </div>
                    <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                      <i className="fa fa-whistle"></i>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Scorecard" && (
                <div className="mx-2.5 text-pry">
                  <div className="mt-3 border-n-bg-gray border rounded-xl">
                    <h4 className="m-2">Scorecard</h4>
                    <hr />
                    <table className="w-full">
                      <thead className="border-n-bg-gray border-b">
                        <tr>
                          <th className="h-7 text-left px-1 w-2/3 sm:w-[300px] text-xxs uppercase">
                            Team
                          </th>
                          <th className=" h-7 text-center px-1 text-xxs uppercase">
                            First
                          </th>
                          <th className=" h-7 text-center px-1 text-xxs uppercase">
                            Overtime
                          </th>
                          <th className=" h-7 text-center px-1 text-xxs uppercase">
                            Second
                          </th>
                          <th className=" h-7 text-center px-1 text-xxs uppercase">
                            Second Overtime
                          </th>
                          <th className=" h-7 text-center px-1 text-xxs uppercase">
                            Total
                          </th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="py-1 h-8 border-n-bg-gray border-b">
                          <td
                            className="text-left px-1 w-2/3 sm:w-[300px] text-xxs capitalize flex flex-col"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {game.teams.home.name}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.first.home}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.overtime.home}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.second.home}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.second_overtime.home}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.scores.home}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.scores.home.total}
                          </td>
                        </tr>
                        <tr className="py-1 h-8 border-n-bg-gray border-b">
                          <td
                            className="text-left px-1 w-2/3 sm:w-[300px] text-xxs capitalize flex flex-col"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {game.teams.away.name}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.first.away}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.overtime.away}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.second.away}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.periods.second_overtime.away}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.scores.away}
                          </td>
                          <td className=" text-center px-1 text-xxs">
                            {game.scores.home.total}
                          </td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
                <div className="my-2.5">
            <Adsense />
          </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RugbyDetails;

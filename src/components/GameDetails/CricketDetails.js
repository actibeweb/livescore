import React, { useState, useEffect } from "react";

import { getRandomScore } from "../../utils/randomScore";
import { getFixturesById } from "../../api/cricket";
import Loader from "../Common/Loader";
import { useParams } from "react-router";
import Adsense from "../Common/Adsense";
import Adsense1 from "../Common/Adsense1";
import { Helmet } from "react-helmet";
const CricketDetails = () => {
  const [markAsFavourite, setMarkAsFavourite] = useState(false);

  const [activeTab, setActiveTab] = useState("Scorecard");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [activeTableSubTab, setActiveTableSubTab] = useState("All");
  const [activeH2HSubTab, setActiveH2HSubTab] = useState("H2H");
  const [game, setGame] = useState(undefined);
  const [details, setDetails] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const tabs = ["Info", "Scorecard", "Teams"];
  const [subTabs, setSubTabs] = useState([]);
  //   const subTabs = ["Events", "Commentary"];
  const tableTabs = ["All", "Home", "Away"];
  const H2HTabs = ["H2H", "Team A", "Team B"];
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    getFixtureHandler(id);
  }, []);
  const getFixtureHandler = async (id) => {
    try {
      setLoading(true);
      const data = await getFixturesById(id);
      console.log(data);
      console.log(data.results);
      setGame(data.results.fixture);
      setDetails(data.results.live_details);
      let tabs = [];
      if (data.results.live_details !== null) {
        for (let i = 0; i < data.results.live_details.scorecard.length; i++) {
          tabs.push(data.results.live_details.scorecard[i].title);
        }
        setSubTabs(tabs);
        setActiveSubTab(data.results.live_details.scorecard[0].title);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

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
      {game && (
        <>
          <Helmet>
            <title>{`${game.home.name} vs ${game.away.name}`}</title>
          </Helmet>
          <div className="text-n-white py-1 lg:w-[50%] lg:mx-auto">
            <div className="px-2.5 mb-2 flex justify-between items-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="grid">
                  <p className="capitalize text-sm font-bold">
                    {game.match_title}
                  </p>
                  <p className="capitalize text-11px text-pry">
                    {game.series.series_name + " " + game.series.season}
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
                    className={`fa fa-${markAsFavourite ? "star " : "star-o"}`}
                  ></i>
                </div>
              </div>
            </div>
            <div className="mx-2.5 h-20 py-3 relative flex justify-center items-center bg-n-bg-gray rounded-lg">
              {details && details.match_summary.in_play !== "No" ? (
                <div className="flex justify-center items-center w-10 mr-10">
                  <div className="absolute top-[5px] bottom-[5px] left-0 rounded-tr-xl rounded-br-xl w-1 bg-n-orange"></div>
                  <p className="absolute left-5 text-11px text-center font-thin text-n-orange">
                    Live
                  </p>
                </div>
              ) : (
                <div className="mr-10 flex justify-center items-center ">
                  {/* <p className="text-11px text-center font-thin">FT</p> */}
                </div>
              )}
              <div className="flex justify-between items-center gap-10 w-64">
                <div className="flex flex-col justify-center gap-3">
                  <p className="text-18px text-center">{game.home.name}</p>
                  <p className="text-18px text-center">{game.away.name}</p>
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <p className="text-11px text-center">
                    {details && details.match_summary.home_scores}
                  </p>
                  <p className="text-11px text-center">
                    {details && details.match_summary.away_scores}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-2.5">
              <Adsense1 />
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
                        {formatDate(game.start_date)}
                      </p>
                      <p className="capitalize text-9px">Date</p>
                    </div>
                  </div>
                  <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                    <i className="fa fa-whistle"></i>
                    <div>
                      <p className="capitalize text-11px">
                        {details.officials.referee}
                      </p>
                      <p className="capitalize text-9px">Referee</p>
                    </div>
                  </div>
                  <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                    <i className="fa fa-whistle"></i>
                    <div>
                      <p className="capitalize text-11px">
                        {details.officials.umpire_1 +
                          "," +
                          details.officials.umpire_2}
                      </p>
                      <p className="capitalize text-9px">Umpires</p>
                    </div>
                  </div>
                  <div className="px-2 py-3 flex gap-3">
                    <i className="fa fa-stadium"></i>
                    <div>
                      <p className="capitalize text-11px">{game.venue}</p>
                      <p className="capitalize text-9px">venue</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Scorecard" && (
              <>
                {details === null ? (
                  <p>Match Starts Soon</p>
                ) : (
                  <div className="mx-2.5 text-pry">
                    <div className="px-1 pb-2 flex items-center gap-2">
                      {subTabs.map((tab, index) => {
                        return (
                          <p
                            onClick={() => {
                              setActiveSubTab(tab);
                            }}
                            key={index}
                            className={
                              activeSubTab === tab
                                ? "bg-n-white text-n-black uppercase text-11px py-1 px-2 rounded-2xl cursor-pointer"
                                : "bg-transparent border-pry border uppercase text-11px py-1 px-2 rounded-2xl cursor-pointer"
                            }
                          >
                            {tab}
                          </p>
                        );
                      })}
                    </div>

                    <div className="mt-3 border-n-bg-gray border rounded-xl">
                      <h4 className="m-2">Batting</h4>
                      <hr />
                      <table className="w-full">
                        <thead className="border-n-bg-gray border-b">
                          <tr>
                            <th className="h-7 text-left px-1 w-2/3 sm:w-[300px] text-xxs uppercase">
                              Name
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              R
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              B
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              4s
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              6s
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              S/R
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {details.scorecard.map((score, index) => {
                            // console.log(score);
                            return (
                              <>
                                {activeSubTab === score.title && (
                                  <>
                                    {score.batting.map((batsman, index) => {
                                      return (
                                        <tr
                                          key={index}
                                          className="py-1 h-8 border-n-bg-gray border-b"
                                        >
                                          <td className="text-left px-1 w-2/3 sm:w-[300px] text-xxs capitalize flex flex-col">
                                            <span
                                              className="text"
                                              style={{
                                                fontSize: "0.8rem",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {batsman.player_name}{" "}
                                            </span>
                                            <span> {batsman.how_out}</span>
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {batsman.runs}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {batsman.balls}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {batsman.fours}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {batsman.sixes}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {batsman.strike_rate}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </>
                                )}
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 border-n-bg-gray border rounded-xl">
                      <h4 className="m-2">Stats</h4>
                      <hr />
                      {details.scorecard.map((score, index) => {
                        return (
                          <>
                            {activeSubTab === score.title && (
                              <>
                                <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                                  <div>
                                    <p className="capitalize text-11px">
                                      Fall of Wickets
                                    </p>
                                    <p className="capitalize text-13px">
                                      {score.fow}
                                    </p>
                                  </div>
                                </div>
                                <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                                  <div>
                                    <p className="capitalize text-11px">
                                      Extras
                                    </p>
                                    <p className="capitalize text-13px">
                                      {score.extras + ":" + score.extras_detail}
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        );
                      })}
                    </div>
                    <div className="mt-3 border-n-bg-gray border rounded-xl">
                      <h4 className="m-2">Bowling</h4>
                      <hr />
                      <table className="w-full">
                        <thead className="border-n-bg-gray border-b">
                          <tr>
                            <th className="h-7 text-left px-1 w-2/3 sm:w-[300px] text-xxs uppercase">
                              Name
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              O
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              M
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              R
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              W
                            </th>
                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              E
                            </th>

                            <th className=" h-7 text-center px-1 text-xxs uppercase">
                              E/R
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {details.scorecard.map((score, index) => {
                            // console.log(score);
                            return (
                              <>
                                {activeSubTab === score.title && (
                                  <>
                                    {score.bowling.map((bowler, index) => {
                                      return (
                                        <tr
                                          key={index}
                                          className="py-1 h-8 border-n-bg-gray border-b"
                                        >
                                          <td className="text-left px-1 w-2/3 sm:w-[300px] text-xxs capitalize flex flex-col">
                                            <span
                                              className="text"
                                              style={{
                                                fontSize: "0.8rem",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {bowler.player_name}{" "}
                                            </span>
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {bowler.overs}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {bowler.maidens}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {bowler.runs_conceded}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {bowler.wickets}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {bowler.extras}
                                          </td>
                                          <td className=" text-center px-1 text-xxs">
                                            {bowler.economy}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </>
                                )}
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === "Teams" && (
              <>
                {details === null ? (
                  <p>Match Starts Soon</p>
                ) : (
                  <div className="px-2.5 text-pry">
                    <p className="uppercase text-11px">Playing</p>
                    <div className="mt-2 border-n-bg-gray border rounded-md">
                      <div className="px-2 py-3 flex flex-row justify-around gap-3 border-n-bg-gray border-b">
                        <div className="flex flex-col">
                          {details.teamsheets.home.map((player, index) => {
                            return <p key={index}>{player.player_name}</p>;
                          })}
                        </div>
                        <div className="flex flex-col">
                          {details.teamsheets.away.map((player, index) => {
                            return <p key={index}>{player.player_name}</p>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="my-2.5">
              <Adsense />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CricketDetails;

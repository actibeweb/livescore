import React, { useState, useEffect } from "react";

import { getRandomScore } from "../../utils/randomScore";
import { useParams } from "react-router";
import { getFixtureById } from "../../api/hockey";
import Loader from "../Common/Loader";
import Adsense from "../Common/Adsense";
import Adsense1 from "../Common/Adsense1";

const HockeyDetails = () => {
  const [markAsFavourite, setMarkAsFavourite] = useState(false);
  const [homeScore, setHomeScore] = useState(3);
  const [awayScore, setAwayScore] = useState(2);
  const [gameStatus, setGameStatus] = useState("NotStarted");
  const [activeTab, setActiveTab] = useState("Summary");
  const [activeSubTab, setActiveSubTab] = useState("Events");
  const [activeTableSubTab, setActiveTableSubTab] = useState("All");
  const [activeH2HSubTab, setActiveH2HSubTab] = useState("H2H");
  const [game, setGame] = useState(undefined);
  const tabs = ["Info", "Scorecard"];
  const subTabs = ["Events"];
  const tableTabs = ["All", "Home", "Away"];
  const H2HTabs = ["H2H", "Team A", "Team B"];
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log(id);
    getFixtureHandler(id);
  }, []);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const getFixtureHandler = async (id) => {
    try {
      setLoading(true);
      const data = await getFixtureById(id);
      console.log(data);
      
      setGame(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const leagueTable = [
    {
      team: "Manchester City",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: 70,
      points: 89,
    },
    {
      team: "Liverpool",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
      matchesPlayed: 36,
      matchesWon: 26,
      matchesDrawn: 8,
      matchesLost: 2,
      matchesF: 89,
      matchesA: 24,
      goalDifference: 65,
      points: 86,
    },
    {
      team: "Chelsea",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8455.png",
      matchesPlayed: 36,
      matchesWon: 20,
      matchesDrawn: 10,
      matchesLost: 6,
      matchesF: 73,
      matchesA: 31,
      goalDifference: 42,
      points: 70,
    },
    {
      team: "Tottenham Hotspur",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8586.png",
      matchesPlayed: 37,
      matchesWon: 21,
      matchesDrawn: 5,
      matchesLost: 11,
      matchesF: 64,
      matchesA: 40,
      goalDifference: 24,
      points: 68,
    },
    {
      team: "Arsenal",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
      matchesPlayed: 37,
      matchesWon: 21,
      matchesDrawn: 3,
      matchesLost: 12,
      matchesF: 56,
      matchesA: 45,
      goalDifference: 11,
      points: 66,
    },
    {
      team: "West Ham United",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: 13,
      points: 58,
    },
    {
      team: "Manchester United",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/10260.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: 1,
      points: 58,
    },
    {
      team: "Brighton & Hove Albion",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/10204.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 50,
    },
    {
      team: "Wolverhampton Wanderers",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8602.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -4,
      points: 50,
    },
    {
      team: "Leicester City",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8197.png",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Random Club",
      teamLogo: "https://picsum.photos/200",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Random Club",
      teamLogo: "https://picsum.photos/200",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Random Club",
      teamLogo: "https://picsum.photos/200",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Random Club",
      teamLogo: "https://picsum.photos/200",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Random Club",
      teamLogo: "https://picsum.photos/200",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Random Club",
      teamLogo: "https://picsum.photos/200",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -3,
      points: 48,
    },
    {
      team: "Burnley",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8191.png",
      matchesPlayed: 36,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -18,
      points: 34,
    },
    {
      team: "Leeds United",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/8463.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -39,
      points: 34,
    },
    {
      team: "Norwich City",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/9850.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -55,
      points: 24,
    },
    {
      team: "Watford",
      teamLogo: "https://lsm-static-prod.livescore.com/medium/enet/9817.png",
      matchesPlayed: 37,
      matchesWon: 28,
      matchesDrawn: 5,
      matchesLost: 4,
      matchesF: 94,
      matchesA: 24,
      goalDifference: -39,
      points: 23,
    },
  ];
  const h2hGames = [
    {
      homeTeam: "Liverpool",
      awayTeam: "Manchester City",
      homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
      awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
      game: "Premier League",
      leagueFlag: "https://static.livescore.com/i2/fh/england.jpg",
      year: 2021,
      homeScore: 1,
      awayScore: 2,
      venue: "England",
    },
    {
      homeTeam: "Liverpool",
      awayTeam: "Manchester City",
      homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
      awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
      game: "Premier League 20/21",
      leagueFlag: "https://static.livescore.com/i2/fh/england.jpg",
      year: 2021,
      homeScore: 3,
      awayScore: 2,
      venue: "England",
    },
    {
      homeTeam: "Liverpool",
      awayTeam: "Manchester City",
      homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
      awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
      game: "FA Cup",
      leagueFlag: "https://static.livescore.com/i2/fh/england.jpg",
      year: 2021,
      homeScore: 2,
      awayScore: 2,
      venue: "England",
    },
    {
      homeTeam: "Liverpool",
      awayTeam: "Manchester City",
      homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
      awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
      game: "Champions League",
      leagueFlag: "https://static.livescore.com/i2/fh/champions-league.jpg",
      year: 2020,
      homeScore: 1,
      awayScore: 3,
      venue: "Germany",
    },
    {
      homeTeam: "Liverpool",
      awayTeam: "Manchester City",
      homeFlag: "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
      awayFlag: "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
      game: "Premier League 19/19",
      leagueFlag: "https://static.livescore.com/i2/fh/england.jpg",
      year: 2019,
      homeScore: 0,
      awayScore: 0,
      venue: "England",
    },
  ];

  const footerText = [
    "Careers",
    "Mobile",
    "advertise",
    "faq",
    "contact",
    "news publishers",
    "modern slavery act",
    "privacy notice",
    "cookie policy",
    "terms of use",
    "corporate",
  ];

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
               
                <div className="grid">
                  <p className="capitalize text-sm font-bold">
                    {game.competition}
                  </p>
                  <p className="capitalize text-11px text-pry">
                    {game.season}
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
            <div className="grid gap-[6px] mr-10 w-10">
            <p className="text-11px text-center font-thin text-n-orange">
                      {game.time}
                    </p>
                </div>

              <div className="flex justify-between items-center gap-10 w-64">
                <div className="flex flex-col justify-center gap-3">
               
                  <p className="text-11px text-center">
                    {game.home}
                  </p>
                </div>
                <div>
                  <p className="text-[22px] flex items-center gap-1 font-bold">
                    <span> {"0"}</span> -{" "}
                    <span> {"0"}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3">
                

                  <p className="text-11px text-center">
                    {game.away}
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
                        {formatDate(game.date)}
                      </p>
                      <p className="capitalize text-9px">Date</p>
                    </div>
                  </div>
                  <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                    <i className="fa fa-calendar"></i>
                    <div>
                      <p className="capitalize text-11px">
                        {game.referee}
                      </p>
                      <p className="capitalize text-9px">Referee</p>
                    </div>
                  </div>
                  <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                    <i className="fa fa-calendar"></i>
                    <div>
                      <p className="capitalize text-11px">
                        {game.venue}
                      </p>
                      <p className="capitalize text-9px">Venue</p>
                    </div>
                  </div>
                  <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                    <i className="fa fa-whistle"></i>
                  </div>
                </div>
              </div>
            )}
            {/* {activeTab === "Scorecard" && (
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
                          1
                        </th>
                        <th className=" h-7 text-center px-1 text-xxs uppercase">
                          2
                        </th>
                        <th className=" h-7 text-center px-1 text-xxs uppercase">
                          3
                        </th>
                        <th className=" h-7 text-center px-1 text-xxs uppercase">
                          4
                        </th>
                        <th className=" h-7 text-center px-1 text-xxs uppercase">
                          O
                        </th>

                        <th className=" h-7 text-center px-1 text-xxs uppercase">
                          T
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
                          {game.scores.home.quarter_1}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.home.quarter_2}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.home.quarter_3}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.home.quarter_4}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.home.over_time}
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
                          {game.scores.away.quarter_1}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.away.quarter_2}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.away.quarter_3}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.away.quarter_4}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.away.over_time}
                        </td>
                        <td className=" text-center px-1 text-xxs">
                          {game.scores.away.total}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )} */}
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

export default HockeyDetails;

import React, { useState, useEffect } from "react";

import { getRandomScore } from "../../utils/randomScore";

const FootballDetails = () => {
  const [markAsFavourite, setMarkAsFavourite] = useState(false);
  const [homeScore, setHomeScore] = useState(3);
  const [awayScore, setAwayScore] = useState(2);
  const [gameStatus, setGameStatus] = useState("NotStarted");
  const [activeTab, setActiveTab] = useState("Summary");
  const [activeSubTab, setActiveSubTab] = useState("Events");
  const [activeTableSubTab, setActiveTableSubTab] = useState("All");
  const [activeH2HSubTab, setActiveH2HSubTab] = useState("H2H");

  const tabs = ["Info", "Summary", "Stats", "Line-ups", "Table", "H2H"];
  const subTabs = ["Events", "Commentary"];
  const tableTabs = ["All", "Home", "Away"];
  const H2HTabs = ["H2H", "Team A", "Team B"];

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
    <div className="text-n-white py-1 lg:w-[50%] lg:mx-auto">
      <div className="px-2.5 mb-2 flex justify-between items-center">
        <div className="flex items-center gap-2 mb-2">
          <img
            src="https://static.livescore.com/i2/fh/england.jpg"
            alt=""
            className="w-5 h-3"
          />

          <div className="grid">
            <p className="capitalize text-sm font-bold">Premier League</p>
            <p className="capitalize text-11px text-pry">England</p>
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
            <i className={`fa fa-${markAsFavourite ? "star " : "star-o"}`}></i>
          </div>
        </div>
      </div>
      <div className="mx-2.5 h-20 py-3 relative flex justify-center items-center bg-n-bg-gray rounded-lg">
        {gameStatus === "NotStarted" && (
          <div className="grid gap-[6px] mr-10 w-10">
            <div className="flex items-center">
              <i className="fa fa-play border border-n-white rounded"></i>
              <p className="ml-1 text-11px">Bet</p>
            </div>
            <p className="text-11px text-center font-thin">16:30</p>
          </div>
        )}
        {gameStatus === "Started" ? (
          <div className="flex justify-center items-center w-10 mr-10">
            <div className="absolute top-[5px] bottom-[5px] left-0 rounded-tr-xl rounded-br-xl w-1 bg-n-orange"></div>
            <p className="absolute left-5 text-11px text-center font-thin text-n-orange">
              80'
            </p>
          </div>
        ) : (
          <div className="mr-10 flex justify-center items-center w-10">
            <p className="text-11px text-center font-thin">FT</p>
          </div>
        )}
        <div className="flex justify-between items-center gap-10 w-64">
          <div className="flex flex-col justify-center gap-3">
            <img
              src="https://lsm-static-prod.livescore.com/medium/enet/8650.png"
              alt=""
              className="w-6 h-6 mx-auto"
            />
            <p className="text-11px text-center">Liverpool</p>
          </div>
          <div>
            <p className="text-[22px] flex items-center gap-1 font-bold">
              <span> {homeScore}</span> - <span> {awayScore}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <img
              src="https://lsm-static-prod.livescore.com/medium/enet/8456.png"
              alt=""
              className="w-6 h-6 mx-auto"
            />

            <p className="text-11px text-center">Manchester City</p>
          </div>
        </div>
      </div>
      <div className="pb-1 mb-2 border-n-bg-gray border-b">
        <div className="my-2 mx-2.5 flex gap-4 overflow-auto">
          {tabs.map((tab, index) => {
            return (
              <p
                onClick={() => setActiveTab(tab)}
                key={index}
                className={tab === activeTab ? "text-n-orange" : "text-pry"}
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
                <p className="capitalize text-11px">15 May 2022</p>
                <p className="capitalize text-9px">Date</p>
              </div>
            </div>
            <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
              <i className="fa fa-whistle"></i>
              <div>
                <p className="capitalize text-11px">Chris Kavanagh (England)</p>
                <p className="capitalize text-9px">referee</p>
              </div>
            </div>
            <div className="px-2 py-3 flex gap-3">
              <i className="fa fa-stadium"></i>
              <div>
                <p className="capitalize text-11px">Villa Park</p>
                <p className="capitalize text-9px">venue</p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-11px uppercase font-bold">who will win?</p>
        </div>
      )}
      {activeTab === "Summary" && (
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
          {activeSubTab === "Events" ? (
            <div className="mx-1 border border-n-bg-gray rounded-md">
              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">8'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Van Djick</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-between items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">15'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Phil Phoden</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">8'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Van Djick</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-between items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">15'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Phil Phoden</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">8'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Van Djick</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-between items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">15'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Phil Phoden</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">8'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Van Djick</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
              <div className="px-2 py-3 flex justify-between items-center border-n-bg-gray border-b">
                <p className="mr-2 text-py text-11px">15'</p>
                <div className="text-11px flex items-center">
                  <p className="text-n-white">Phil Phoden</p>
                  <div className="ml-2 h-3 w-2 bg-yellow-300 rounded-sm"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-1 border border-n-bg-gray rounded-md">
              <div className="px-2 py-3 flex items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">45+2'</p>
                <p className="text-pry text-11px">
                  Ball possession: Liverpool: 51%, Manchester City: 49%
                </p>
              </div>
              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">45+2'</p>
                <p className="text-pry text-11px">
                  It's over! The referee blows for halftime
                </p>
              </div>

              <div className="px-2 py-3 flex items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">40'</p>
                <p className="text-pry text-11px">
                  A brilliant clearancefrom Walker to give Manchester City a
                  sigh of relief
                </p>
              </div>

              <div className="px-2 py-3 flex items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">38'</p>
                <p className="text-pry text-11px">
                  Liverpool mounting pressure on City's defenders
                </p>
              </div>

              <div className="px-2 py-3 flex items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">34'</p>
                <p className="text-pry text-11px">
                  The goalkeeper plays a long ball to Gabriel Jesus
                </p>
              </div>

              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">23'</p>
                <p className="text-pry text-11px">
                  Sadio Mane hits the ball towards goal
                </p>
              </div>

              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">9'</p>
                <p className="text-pry text-11px">
                  Ferdinho completes a clean tackle to give Liverpool a throw in
                </p>
              </div>

              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">6'</p>
                <p className="text-pry text-11px">
                  Manchester City press on to win the ball
                </p>
              </div>

              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">3'</p>
                <p className="text-pry text-11px">
                  The ball is being played from the left to the right
                </p>
              </div>
              <div className="px-2 py-3 flex justify-start items-center border-n-bg-gray border-b">
                <p className="mr-2 text-pry text-11px">1'</p>
                <p className="text-pry text-11px">
                  Liverpool win the toss and will have the first kick
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      {activeTab === "Stats" && (
        <div className="px-2.5 text-pry">
          <div className="grid">
            <div className="flex justify-between items-center text-11px text-pry">
              <p>2</p>
              <p>Shots on target</p>
              <p className="text-n-white">3</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg">
                <div className="w-0 h-[10px] rounded-l-lg"></div>
              </div>

              <div className="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg">
                <div className="w-full h-[10px] bg-n-orange rounded-r-lg"></div>
              </div>
            </div>
          </div>
          <div className="grid my-2">
            <div className="flex justify-between items-center text-11px text-pry">
              <p className="text-n-white">4</p>
              <p>Shots off target</p>
              <p>2</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg">
                <div className="w-3/4 h-[10px] bg-n-orange"></div>
              </div>

              <div className="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg">
                <div className="w-1/3 h-[10px] bg-n-gray"></div>
              </div>
            </div>
          </div>
          <div className="grid mb-2">
            <div className="flex justify-between items-center text-11px text-pry">
              <p>0</p>
              <p>Blocked Shots</p>
              <p className="text-n-white">2</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg">
                <div className="w-0 h-[10px]"></div>
              </div>

              <div className="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg">
                <div className="w-full h-[10px] bg-n-orange rounded-r-lg"></div>
              </div>
            </div>
          </div>
          <div className="grid mb-2">
            <div className="flex justify-between items-center text-11px text-pry">
              <p>48</p>
              <p>Possession (%)</p>
              <p className="text-n-white">52</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-n-bg-gray flex justify-end w-1/2 h-[10px] rounded-l-lg">
                <div className="w-[48%] h-[10px] bg-n-gray"></div>
              </div>

              <div className="bg-n-bg-gray flex justify-start w-1/2 h-[10px] rounded-r-lg">
                <div className="w-[52%] h-[10px] bg-n-orange"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Line-ups" && (
        <div className="px-2.5 text-pry">
          <p className="uppercase text-11px">substitute players</p>
          <div className="mt-2 border-n-bg-gray border rounded-md">
            <div className="px-2 py-3 flex justify-around gap-3 border-n-bg-gray border-b">
              <p className="capitalize text-11px">Sub 1</p>
              <p className="capitalize text-11px">Sub 1</p>
            </div>
            <div className="px-2 py-3 flex justify-around gap-3 border-n-bg-gray border-b">
              <p className="capitalize text-11px">Sub 2</p>
              <p className="capitalize text-11px">Sub 2</p>
            </div>
            <div className="px-2 py-3 flex justify-around gap-3 border-n-bg-gray border-b">
              <p className="capitalize text-11px">Sub 3</p>
              <p className="capitalize text-11px">Sub 3</p>
            </div>

            <div className="px-2 py-3 flex justify-around gap-3 border-n-bg-gray border-b">
              <p className="capitalize text-11px">Sub 4</p>
              <p className="capitalize text-11px">Sub 4</p>
            </div>

            <div className="px-2 py-3 flex justify-around gap-3">
              <p className="capitalize text-11px">Sub 5</p>
              <p className="capitalize text-11px">Sub 5</p>
            </div>
          </div>
          <p className="mt-3 uppercase text-11px">Coaches</p>
          <div className="mt-2 border-n-bg-gray border rounded-md">
            <div className="px-2 py-3 flex justify-around gap-3">
              <p className="capitalize text-11px">Jurgen Klopp</p>
              <p className="capitalize text-11px">Pep Guadiola</p>
            </div>
          </div>
        </div>
      )}
      {activeTab==="Table" &&(
        <div className="px-2.5" >
            <div class="px-1 pb-2 flex items-center gap-2">
                
            </div>
        </div>
      )}
    </div>
  );
};

export default FootballDetails;

import React, { useState, useEffect } from "react";
import { getRandomScore } from "../../utils/randomScore";

import { useNavigate } from "react-router";
import { getFixtures } from "../../api/basketball";
import Loader from "../Common/Loader";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Basketball = () => {
  const navigate = useNavigate();
  const [homeScore, setHomeScore] = useState();
  const [awayScore, setAwayScore] = useState();
  const [gameStatus, setGameStatus] = useState("NotStarted");
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customDate, setCustomDate] = useState();
  const [gameDate, setGameDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [twoDaysAgo, setTwoDaysAgo] = useState(
    new Date().getTime() - 48 * 60 * 60 * 1000
  );
  const [yesterday, setYesterday] = useState(
    new Date().getTime() - 24 * 60 * 60 * 1000
  );
  const [today, setToday] = useState(new Date());
  const [tomorrow, setTomorrow] = useState(
    new Date().getTime() + 24 * 60 * 60 * 1000
  );
  const [twoDaysTime, setTwoDaysTime] = useState(
    new Date().getTime() + 48 * 60 * 60 * 1000
  );
  const dates = [twoDaysAgo, yesterday, today, tomorrow, twoDaysTime];
  const [activeDateIndex, setActiveDateIndex] = useState(2);

  const [gameDates, setGameDates] = useState([]);
  const formatDate = (date) => {
    const newDate = new Intl.DateTimeFormat("en-ng", {
      day: "2-digit",
      weekday: "short",
      month: "short",
    }).format(new Date(date));

    return newDate;
  };
  const [fixtures, setFixtures] = useState([]);
  const [gameFixtures, setGameFixtures] = useState([
    {
      league: "Premier League",
      country: "England",
      flagUrl: "https://static.livescore.com/i2/fh/england.jpg",
      fixtures: [
        {
          homeTeam: "Liverpool",
          awayTeam: "Manchester City",
          homeFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8650.png",
          awayFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8456.png",
          game: "Premier League",
          homeScore: 1,
          awayScore: 2,
          time: "16:30",
          hasStarted: false,
          hasEnded: false,
          markAsFavourite: false,
        },
        {
          homeTeam: "Chelsea",
          awayTeam: "Arsenal",
          homeFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8455.png",
          awayFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
          game: "FA Cup",
          homeScore: 1,
          awayScore: 2,
          time: 2,
          hasStarted: true,
          hasEnded: false,
          markAsFavourite: false,
        },
      ],
    },
    {
      league: "La Liga Santander",
      country: "Spain",
      flagUrl: "https://static.livescore.com/i2/fh/spain.jpg",
      fixtures: [
        {
          homeTeam: "Barcelona",
          awayTeam: "Real Madrid",
          homeFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8634.png",
          awayFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8633.png",
          game: "El Classico",
          homeScore: 2,
          awayScore: 2,
          time: "88'",
          hasStarted: false,
          hasEnded: true,
        },
        {
          homeTeam: "Athletico Madrid",
          awayTeam: "Villareal",
          homeFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/9906.png",
          awayFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/10205.png",
          game: "La Liga",
          homeScore: 1,
          awayScore: 2,
          time: "21:30",
          hasStarted: false,
          hasEnded: false,
          markAsFavourite: false,
        },
      ],
    },
    {
      league: "Seria A",
      country: "Italy",
      flagUrl: "https://static.livescore.com/i2/fh/italy.jpg",
      fixtures: [
        {
          homeTeam: "Juventus",
          awayTeam: "AC Milan",
          homeFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/9885.png",
          awayFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8564.png",
          game: "League",
          homeScore: 1,
          awayScore: 2,
          time: "16:30",
          hasStarted: false,
          hasEnded: false,
          markAsFavourite: false,
        },
        {
          homeTeam: "Inter Milan",
          awayTeam: "Napoli",
          homeFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/8636.png",
          awayFlag:
            "https://lsm-static-prod.livescore.com/medium/enet/9875.png",
          game: "Ligue Cup",
          homeScore: 0,
          awayScore: 0,
          time: 5,
          hasStarted: true,
          hasEnded: false,
          markAsFavourite: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    console.log(activeDateIndex);
    console.log(customDate);

    if (!showCalendar) {
      const date = new Date(dates[activeDateIndex]);
      const date1 = date.toISOString().split("T")[0];
      console.log(date1);
      getFixturesHandler(date1);
    } else {
      getFixturesHandler(customDate);
      setShowCalendar(false);
    }
  }, [activeDateIndex, customDate]);
  const getFixturesHandler = async (date) => {
    try {
      setLoading(true);
      const data = await getFixtures(date);
      console.log(data);
      setFixtures(data.response);
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
  const liveGame = () => {
    gameFixtures.forEach((fixture) => {
      fixture.fixtures.map((game) => {
        if (typeof game.time === "number" && game.time < 90) {
          game.time++;
        } else {
          return;
        }

        return { ...game };
      });
    });
  };

  useEffect(() => {
    liveGame();
  }, []);

  setInterval(() => {
    setHomeScore(getRandomScore(6));
  }, 7000);
  setInterval(() => {
    setAwayScore(getRandomScore(6));
  }, 7000);
  setInterval(() => {
    setGameStatus("Started");
  }, 7000);
  setInterval(() => {
    setGameStatus("Ended");
  }, 7000);
  setInterval(() => {
    setGameStatus("NotStarted");
  }, 7000);

  const setDates = () => {};

  const goToGame = (id) => {
    navigate(`/basketball/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="text-pry lg:w-[50%] lg:mx-auto">
          <div className="px-2.5 flex justify-between items-center">
            <p className="font-bold w-10 py-[2px] flex justify-center bg-n-white text-n-black text-11px uppercase rounded">
              Live
            </p>
            {dates.map((date, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setActiveDateIndex(index)}
                >
                  <p
                    className={
                      index === activeDateIndex
                        ? "text-n-orange font-bold flex justify-center text-11px uppercase"
                        : "font-bold flex justify-center text-11px uppercase"
                    }
                  >
                    {date === today ? "TODAY" : formatDate(date).slice(0, 3)}
                  </p>
                  <p
                    className={
                      index === activeDateIndex
                        ? "text-n-orange font-bold flex justify-center text-11px uppercase"
                        : "font-bold flex justify-center text-11px uppercase"
                    }
                  >
                    {formatDate(date).slice(4)}
                  </p>
                </div>
              );
            })}
            <div className="relative cursor-pointer">
              {/* <i className="fa-solid fa-calendar" style={{fontSize:"10px"}} ></i> */}
              <FontAwesomeIcon
                icon={faCalendar}
                size="lg"
                onClick={() => setShowCalendar(!showCalendar)}
              />
              <div className="absolute right-1">
                {showCalendar && (
                  <input
                    type="date"
                    name="calendar"
                    id="calendar"
                    onChange={(e) => setCustomDate(e.target.value)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="px-2.5">
            {fixtures &&
              fixtures.map((match, index) => {
                return (
                  <div key={index} className="grid mb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={match.league.logo}
                          alt={match.league.name}
                          className="w-5 h-3"
                        />
                        <div className="grid">
                          <p className="capitalize text-sm font-bold text-n-white">
                            {match.league.name}
                          </p>
                          <p className="capitalize text-11px text-pry">
                            {match.league.season}
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => goToGame(match.id)}
                        className="text-white cursor-pointer"
                      >
                        <i className="fa fa-chevron-right font-thin"></i>
                      </div>
                    </div>

                    <div className="mb-3 bg-n-bg-gray cursor-pointer rounded-lg p-3 flex justify-between items-center">
                      <div
                        onClick={() => goToGame(match.id)}
                        className="flex flex-grow items-center gap-2"
                      >
                        {/* {fixture.hasStarted === false &&
                        fixture.hasEnded === false && (
                          <div className="grid gap-[6px] w-10">
                            <div className="grid gap-[6px] w-10">
                              <div className="flex items-center">
                                <i className="fa fa-play border border-white rounded"></i>
                              </div>
                              <p className="text-11px text-center font-thin">
                                {fixture.time}
                              </p>
                            </div>
                          </div>
                        )} */}
                        {match.status.short !== "FT" ? (
                          <div className="flex justify-center items-center relative w-10">
                            <div className="absolute -left-[10px] rounded-tr-xl rounded-br-xl w-1 h-14 bg-n-orange"></div>
                            {match.status.short === "NS" ? (
                              <p className="text-13px text-center font-thin text-n-orange">
                                {formatTime(match.timestamp)}
                              </p>
                            ) : (
                              <p className="text-11px text-center font-thin text-n-orange">
                                {match.status.short}
                              </p>
                            )}
                          </div>
                        ) : (
                          <div className="flex justify-center items-center w-10">
                            <p className="text-11px text-center font-thin">
                              {match.status.short}
                            </p>
                          </div>
                        )}
                        <div className="grid gap-1">
                          <div
                            onClick={() => goToGame(match.id)}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <img
                              src={match.teams.home.logo}
                              alt={match.teams.home.name}
                              className="w-5 h-5"
                            />
                            <p className="text-sm">{match.teams.home.name}</p>
                          </div>
                          <div
                            onClick={() => goToGame(match.fixture.id)}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <img
                              src={match.teams.away.logo}
                              alt={match.teams.away.name}
                              className="w-5 h-5"
                            />
                            <p className="text-sm">{match.teams.away.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-1">
                          <p className="text-n-white text-sm">
                            {match.scores.home.total}
                          </p>
                          <p className="text-n-white text-sm">
                            {match.scores.away.total}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Basketball;

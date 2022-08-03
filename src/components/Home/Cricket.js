import React, { useState, useEffect } from "react";
import { getRandomScore } from "../../utils/randomScore";

import { useNavigate } from "react-router";
import { getCustomFixture, getFixturesByDate } from "../../api/cricket";
import Loader from "../Common/Loader";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Adsense from "../Common/Adsense";
import Adsense1 from "../Common/Adsense1";
import { Helmet } from 'react-helmet';
const Cricket = () => {
  const navigate = useNavigate();
  const [homeScore, setHomeScore] = useState();
  const [awayScore, setAwayScore] = useState();
  const [gameStatus, setGameStatus] = useState("NotStarted");
  const [showCalendar, setShowCalendar] = useState(false);
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
  const [loading, setLoading] = useState(false);
  const [gameDates, setGameDates] = useState([]);
  const [games, setGames] = useState([]);
  const [customDate, setCustomDate] = useState();
  const formatDate = (date) => {
    const newDate = new Intl.DateTimeFormat("en-ng", {
      day: "2-digit",
      weekday: "short",
      month: "short",
    }).format(new Date(date));
    return newDate;
  };
  const [customFixtures, setCustomFixtures] = useState([])
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

  const getFixtureHandler = async (date) => {
    try {
      setLoading(true);
      const data = await getFixturesByDate(date);
      console.log(data);
      // setGameFixtures(data);
      setLoading(false);
      setGames(data.results);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(activeDateIndex);
    console.log(customDate);

    if (!showCalendar) {
      const date = new Date(dates[activeDateIndex]);
      const date1 = date.toISOString().split("T")[0];
      console.log(date1);
      getCustomFixturesHandler(date1);
      getFixtureHandler(date1);
    } else {
      getCustomFixturesHandler(customDate);
      getFixtureHandler(customDate);
      setShowCalendar(false);
    }
  }, [activeDateIndex, customDate]);

  const getCustomFixturesHandler = async (date) => {
    const formData = {date:date}
    try {
      setLoading(true);
      const data = await getCustomFixture(formData);
      console.log(data);
      setCustomFixtures(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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

  const goToGame = (id,league,home,away) => {
    navigate(`/cricket/${league.split(" ").join("-")}/${home.split(" ").join("")}-vs-${away.split(" ").join("")}/${id}`);
  };
  const goToGame1 = (id,league,home,away) => {
    navigate(`/custom/${league.split(" ").join("-")}/${home.split(" ").join("")}-vs-${away.split(" ").join("")}/${id}`);
  };

  function formatTime(date) {
    let d = new Date(date);
    let hours = format_two_digits(d.getHours());
    let minutes = format_two_digits(d.getMinutes());
    let seconds = format_two_digits(d.getSeconds());
    return hours + ":" + minutes;
  }

  function format_two_digits(n) {
    return n < 10 ? "0" + n : n;
  }
  return (
    <>
      <Helmet>
        <title>Cricket Live Score</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <div className="text-pry lg:w-[50%] lg:mx-auto">
          <div className="px-2.5 flex justify-between items-center">
            {/* <p className="font-bold w-10 py-[2px] flex justify-center bg-n-white text-n-black text-11px uppercase rounded">
              Live
            </p> */}
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
          <div className="mx-2.5">
            <Adsense1 />
          </div>
          <div className="px-2.5">
            {customFixtures &&
              customFixtures.map((match, index) => {
                return (
                  <div key={index} className="grid mb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 mb-2">
                      
                        <div className="grid">
                          <p className="capitalize text-sm font-bold text-n-white">
                            {match.competition}
                          </p>
                          <p className="capitalize text-11px text-pry">
                            {match.season}
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => goToGame1(match._id,match.competition,match.home,match.away)}
                        className="text-white cursor-pointer"
                      >
                        <i className="fa fa-chevron-right font-thin"></i>
                      </div>
                    </div>

                    <div className="mb-3 bg-n-bg-gray cursor-pointer rounded-lg p-3 flex justify-between items-center">
                      <div
                        onClick={() => goToGame1(match._id,match.competition,match.home,match.away)}
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
                      <div className="flex justify-center items-center relative w-10">
                            <div className="absolute -left-[10px] rounded-tr-xl rounded-br-xl w-1 h-14 bg-n-orange"></div>
                            <p className="text-11px text-center font-thin text-n-orange">
                                {match.time}
                              </p>
                          </div>
                          <div className="grid gap-1">
                          <div
                            onClick={() => goToGame1(match._id,match.competition,match.home,match.away)}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                             <img
                              src={match?.homeLogo?.url}
                              alt=""
                              className="w-5 h-5"
                            />
                            <p className="text-sm">{match.home}</p>
                          </div>
                          <div
                            onClick={() => goToGame1(match._.id,match.competition,match.home,match.away)}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                             <img
                              src={match?.awayLogo?.url}
                              alt=""
                              className="w-5 h-5"
                            />
                            <p className="text-sm">{match.away}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-1">
                          <p className="text-n-white text-sm">
                            {""}
                          </p>
                          <p className="text-n-white text-sm">
                            {""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="px-2.5">
            {games?.map((game, index) => {
              return (
                <div key={index} className="grid mb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="grid">
                        <p className="capitalize text-sm font-bold text-n-white">
                          {game.match_title}
                        </p>
                        <p className="capitalize text-11px text-pry">
                          {game.match_subtitle}
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => goToGame(game.id,game.match_title,game.home.name,game.away.name)}
                      className="text-white cursor-pointer"
                    >
                      <i className="fa fa-chevron-right font-thin"></i>
                    </div>
                  </div>

                  <div className="mb-3 bg-n-bg-gray cursor-pointer rounded-lg p-3 flex justify-between items-center">
                    <div
                      onClick={() => goToGame(game.id,game.match_title,game.home.name,game.away.name)}
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
                      {game.status !== "Complete" ? (
                        <div className="flex justify-center items-center relative w-10">
                          <div className="absolute -left-[10px] rounded-tr-xl rounded-br-xl w-1 h-14 bg-n-orange"></div>
                          {game.status === "Fixture" ? (
                            <p className="text-14px text-center text-n-orange">
                              {formatTime(game.date,game.match_title,game.home.name,game.away.name)}
                            </p>
                          ) : (
                            <p className="text-11px text-center font-thin text-n-orange">
                              {game.status}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="flex justify-center items-center w-10">
                          <p className="text-11px text-center font-thin">
                            {game.status}
                          </p>
                        </div>
                      )}
                      <div className="grid gap-1">
                        <div
                          onClick={() => goToGame(game.id,game.match_title,game.home.name,game.away.name)}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <p className="text-sm">{game.home.name}</p>
                        </div>
                        <div
                          onClick={() => goToGame(game.id,game.match_title,game.home.name,game.away.name)}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <p className="text-sm">{game.away.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-1">
                        <p className="text-n-white text-sm">{game.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-2.5">
            <Adsense />
          </div>
        </div>
      )}
    </>
  );
};

export default Cricket;

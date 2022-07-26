import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getCustomFixture, getFixtures } from "../../api/tennis";
import Loader from "../Common/Loader";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Adsense from "../Common/Adsense";
import Adsense1 from "../Common/Adsense1";

const Tennis = () => {
  const navigate = useNavigate();
  const [gameDate, setGameDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [customDate, setCustomDate] = useState();
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
  const [showCalendar, setShowCalendar] = useState(false);
  const dates = [twoDaysAgo, yesterday, today, tomorrow, twoDaysTime];
  const [activeDateIndex, setActiveDateIndex] = useState(2);
  const [loading, setLoading] = useState(false);
  const [gameDates, setGameDates] = useState([]);
  const [games, setGames] = useState([]);
  const [customFixtures, setCustomFixtures] = useState([]);
  const formatDate = (date) => {
    const newDate = new Intl.DateTimeFormat("en-ng", {
      day: "2-digit",
      weekday: "short",
      month: "short",
    }).format(new Date(date));
    return newDate;
  };
  const goToGame = (id) => {
    navigate(`/tennis/${id}`);
  };
  const getFixturesHandler = async (date) => {
    try {
      setLoading(true);
      const data = await getFixtures(date);
      console.log(data.results);
      // setGameFixtures(data);
      setLoading(false);
      setGames(data.results);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const getCustomFixturesHandler = async (date) => {
    const formData = { date: date };
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

  useEffect(() => {
    console.log(activeDateIndex);
    console.log(customDate);

    if (!showCalendar) {
      const date = new Date(dates[activeDateIndex]);
      const date1 = date.toISOString().split("T")[0];
      console.log(date1);
      getCustomFixturesHandler(date1);
      getFixturesHandler(date1);
    } else {
      getCustomFixturesHandler(customDate);
      getFixturesHandler(customDate);
      setShowCalendar(false);
    }
  }, [activeDateIndex, customDate]);
  const goToGame1 = (id) => {
    navigate(`/custom/${id}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {games.length > 0 ? (
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
                        {date === today
                          ? "TODAY"
                          : formatDate(date).slice(0, 3)}
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
                            onClick={() => goToGame1(match._id)}
                            className="text-white cursor-pointer"
                          >
                            <i className="fa fa-chevron-right font-thin"></i>
                          </div>
                        </div>

                        <div className="mb-3 bg-n-bg-gray cursor-pointer rounded-lg p-3 flex justify-between items-center">
                          <div
                            onClick={() => goToGame1(match._id)}
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
                            onClick={() => goToGame1(match._id)}
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
                            onClick={() => goToGame1(match._.id)}
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
                              <p className="text-n-white text-sm">{""}</p>
                              <p className="text-n-white text-sm">{""}</p>
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
                              {game.tournament.name}
                            </p>
                            <p className="capitalize text-11px text-pry">
                              {game.tournament.city +
                                ", " +
                                game.tournament.country}
                            </p>
                          </div>
                        </div>
                      </div>
                      {game.matches?.map((match, index) => {
                        return (
                          <div
                            key={index}
                            className="mb-3 bg-n-bg-gray cursor-pointer rounded-lg p-3 flex justify-between items-center"
                          >
                            <div
                              onClick={() => goToGame(match.id)}
                              className="flex flex-grow items-center gap-2"
                            >
                              {match?.status !== "finished" ? (
                                <div className="flex justify-center items-center relative w-10">
                                  <div className="absolute -left-[10px] rounded-tr-xl rounded-br-xl w-1 h-14 bg-n-orange"></div>
                                  {match.status === "notstarted" && (
                                    <p className="text-13px text-center capitalize font-thin text-n-orange">
                                      {formatTime(match.date)}
                                    </p>
                                  )}
                                  {match.status === "inprogress" && (
                                    <p className="text-11px text-center capitalize font-thin text-n-orange">
                                      {"Live"}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div className="flex justify-center items-center w-10">
                                  <p className="text-11px text-center font-thin capitalize">
                                    {match.status}
                                  </p>
                                </div>
                              )}
                              {match.result ? (
                                <div className="grid gap-1">
                                  <div
                                    onClick={() => goToGame(match.id)}
                                    className="flex items-center justify-between gap-2 cursor-pointer"
                                  >
                                    <p
                                      className={
                                        match.result &&
                                        match.home_id === match.result.winner_id
                                          ? "text-sm text-n-white"
                                          : "text-sm"
                                      }
                                    >
                                      {match.home_player}
                                    </p>
                                    <div>
                                      <span
                                        className={
                                          match.result &&
                                          match.home_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.home_set1}
                                      </span>
                                      <span
                                        className={
                                          match.result &&
                                          match.home_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.home_set2}
                                      </span>
                                      <span
                                        className={
                                          match.result &&
                                          match.home_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.home_set3}
                                      </span>
                                      <span
                                        className={
                                          match.result &&
                                          match.home_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.home_set4}
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    onClick={() => goToGame(match.id)}
                                    className="flex items-center gap-2 cursor-pointer"
                                  >
                                    <p
                                      className={
                                        match.result &&
                                        match.away_id === match.result.winner_id
                                          ? "text-sm text-n-white "
                                          : "text-sm"
                                      }
                                      style={{ marginRight: "2rem" }}
                                    >
                                      {match.away_player}
                                    </p>
                                    <div>
                                      <span
                                        className={
                                          match.result &&
                                          match.away_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.away_set1}
                                      </span>
                                      <span
                                        className={
                                          match.result &&
                                          match.away_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.away_set2}
                                      </span>
                                      <span
                                        className={
                                          match.result &&
                                          match.away_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.away_set3}
                                      </span>
                                      <span
                                        className={
                                          match.result &&
                                          match.away_id ===
                                            match.result.winner_id
                                            ? "text-sm text-n-white ml-4"
                                            : "text-sm ml-4"
                                        }
                                      >
                                        {match.result.away_set4}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="grid gap-1">
                                  <div
                                    onClick={() => goToGame(match.id)}
                                    className="flex items-center justify-between gap-2 cursor-pointer"
                                  >
                                    <p className="text-sm">
                                      {match.home_player}
                                    </p>
                                  </div>
                                  <div
                                    onClick={() => goToGame(match.id)}
                                    className="flex items-center justify-between gap-2 cursor-pointer"
                                  >
                                    <p className="text-sm">
                                      {match.away_player}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="my-2.5">
                <Adsense />
              </div>
            </div>
          ) : (
            <p>There are no games available</p>
          )}
        </>
      )}
    </>
  );
};

export default Tennis;

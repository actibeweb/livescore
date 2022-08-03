import React, { useState, useEffect } from "react";
import { getFixturesById } from "../../api/tennis";
import Loader from "../Common/Loader";
import { useParams } from "react-router";
import Adsense from "../Common/Adsense";
import Adsense1 from "../Common/Adsense1";
import { Helmet } from 'react-helmet';
const TennisDetails = () => {
  const [activeTab, setActiveTab] = useState("Scorecard");
  const [game, setGame] = useState(undefined);
  const [tournament, setTournament] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const tabs = ["Info", "Scorecard"];
  const { id } = useParams();
  useEffect(() => {
    getFixtureHandler(id);
  }, []);

  const getFixtureHandler = async (id) => {
    try {
      setLoading(true);
      const data = await getFixturesById(id);
      console.log(data);
      console.log(data.results);
      setGame(data.results.match);
      setTournament(data.results.tournament);

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
      {loading ? (
        <Loader />
      ) : (
        <>
        <Helmet>
                <title>{`${game.home.full_name} vs ${game.away.full_name}`}</title>
              </Helmet>
          {game && tournament && (
            <div className="text-n-white py-1 lg:w-[50%] lg:mx-auto">
              <div className="px-2.5 mb-2 flex justify-between items-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="grid">
                    <p className="capitalize text-sm font-bold">{game.title}</p>
                    <p className="capitalize text-11px text-pry">
                      {tournament.name +
                        ", " +
                        tournament.city +
                        ", " +
                        tournament.country}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx- 2.5 h-20 py-3 relative flex justify-center items-center bg-n-bg-gray rounded-lg">
                {game.status !== "finished" ? (
                  <div className="flex justify-center items-center w-10 mr-10">
                    <div className="absolute top-[5px] bottom-[5px] left-0 rounded-tr-xl rounded-br-xl w-1 bg-n-orange"></div>
                    {game.status === "notstarted" && (
                      <p className="absolute left-5 text-14px text-center font-thin text-n-orange">
                        {formatTime(game.date)}
                      </p>
                    )}
                    {game.status === "inprogress" && (
                      <p className="absolute left-5 text-14px text-center font-thin text-n-orange">
                        Live
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mr-10 flex justify-center items-center ">
                    <p className="text-14px text-center font-thin">
                      {game.status}
                    </p>
                  </div>
                )}
                <div className="flex justify-between items-center gap-10 w-64">
                  <div className="flex flex-col justify-center gap-3">
                    <div>
                      <span className="text-18px text-center">
                        {game.home.full_name}
                      </span>
                      {game.result &&
                        game.result.winner_id === game.home_id && (
                          <span> (W)</span>
                        )}
                    </div>
                    <div>
                      <span className="text-18px text-center">
                        {game.away.full_name}
                      </span>
                      {game.result &&
                        game.result.winner_id === game.away_id && (
                          <span> (W)</span>
                        )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <div className="flex gap-3">
                      <span className="text-13px text-center">
                        {game.result && game.result.home_set1}
                      </span>
                      <span className="text-13px text-center">
                        {game.result && game.result.home_set2}
                      </span>
                      <span className="text-13px text-center">
                        {game.result && game.result.home_set3}
                      </span>
                      <span className="text-13px text-center">
                        {game.result && game.result.home_set4}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-13px text-center">
                        {game.result && game.result.away_set1}
                      </span>
                      <span className="text-13px text-center">
                        {game.result && game.result.away_set2}
                      </span>
                      <span className="text-13px text-center">
                        {game.result && game.result.away_set3}
                      </span>
                      <span className="text-13px text-center">
                        {game.result && game.result.away_set4}
                      </span>
                    </div>
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
                      <i className="fa fa-whistle"></i>
                      <div>
                        <p className="capitalize text-11px">
                          {tournament.surface}
                        </p>
                        <p className="capitalize text-9px">Surface</p>
                      </div>
                    </div>
                    <div className="px-2 py-3 flex gap-3 border-n-bg-gray border-b">
                      <i className="fa fa-whistle"></i>
                      <div>
                        <p className="capitalize text-11px">{game.court}</p>
                        <p className="capitalize text-9px">Court</p>
                      </div>
                    </div>
                    <div className="px-2 py-3 flex gap-3">
                      <i className="fa fa-stadium"></i>
                      <div>
                        <p className="capitalize text-11px">
                          {tournament.city + ", " + tournament.country}
                        </p>
                        <p className="capitalize text-9px">venue</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Scorecard" && (
                <div className="mx-2.5 text-pry">
                  <div className="mt-3 border-n-bg-gray border rounded-xl">
                    <table className="w-full">
                      <thead className="border-n-bg-gray border-b">
                        <tr>
                          <th className="h-7 text-left px-1 w-2/3 sm:w-[300px] text-xxs uppercase">
                            NAME
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
                            5
                          </th>

                          <th className=" h-7 text-center px-1 text-xxs uppercase">
                            SETS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="py-1 h-8 border-n-bg-gray border-b">
                          <td className="text-left px-1 w-2/3 sm:w-[300px] text-sm capitalize flex flex-col">
                            {game.home_player}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.home_set1}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.home_set2}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.home_set3}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.home_set4}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.home_set5}
                          </td>

                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.home_sets}
                          </td>
                        </tr>
                        <tr className="py-1 h-8 border-n-bg-gray border-b">
                          <td className="text-left px-1 w-2/3 sm:w-[300px] text-sm capitalize flex flex-col">
                            {game.away_player}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.away_set1}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.away_set2}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.away_set3}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.away_set4}
                          </td>
                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.away_set5}
                          </td>

                          <td className=" text-center px-1 text-xs">
                            {game.result && game.result.away_sets}
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

export default TennisDetails;

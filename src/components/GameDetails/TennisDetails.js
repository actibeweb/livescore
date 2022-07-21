import React, { useState, useEffect } from "react";
import { getFixturesById } from "../../api/tennis";
import Loader from "../Common/Loader";
import { useParams } from "react-router";
import Adsense from "../Common/Adsense";
import Adsense1 from "../Common/Adsense1";

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
      
      setGame(data);
      setTournament(data);

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

export default TennisDetails;

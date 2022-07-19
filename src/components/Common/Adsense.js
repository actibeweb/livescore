import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAffiliate } from "../../api/common";
import Loader from "../Common/Loader";
const Adsense = () => {
  const [details, setDetails] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    try {
      setLoading(true);
      const data = await getAffiliate();
      console.log(data);
      setDetails(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {details && (
            <div>
              <div className="my-4 p-2 bg-n-blue text-n-white rounded-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <img
                      src={details.image.url}
                      alt="logo"
                      className="w-[80px] h-[80px]"
                    />
                    <p className="ml-1 text-sm leading-none">
                      {details.content}
                    </p>
                  </div>
                  <div>
                    <a
                      href={details.link}
                      className="w-max flex justify-center items-center capitalize text-n-blue bg-n-white py-[5px] px-2 rounded-md text-11px font-semibold"
                    >
                      Go to Link
                    </a>
                  </div>
                </div>
                <p className="text-[7px] mt-[10px]">*T&Cs apply</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Adsense;

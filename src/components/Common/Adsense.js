import React from "react";

const Adsense = () => {
  return (
    <div>
      <div className="my-4 p-2 bg-n-blue text-n-white rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <img
              src="https://www.livescore.com/ls-web-assets/svgs/common/ls-bet-icon-c1a591cb403d151cb7dd7ca2b40413a6.svg"
              alt="logo"
              className="w-[30px] h-[30px]"
            />
            <p className="ml-1 text-sm leading-none">
              N125,000 welcome bonus for safe and secure betting!*
            </p>
          </div>
          <div>
            <p className="w-max flex justify-center items-center capitalize text-n-blue bg-n-white py-[5px] px-2 rounded-md text-11px font-semibold">
              get bonus
            </p>
          </div>
        </div>
        <p className="text-[7px] mt-[10px]">
          *New customers only. T&Cs apply. Bet Responsibly. 18+
        </p>
      </div>
    </div>
  );
};

export default Adsense;

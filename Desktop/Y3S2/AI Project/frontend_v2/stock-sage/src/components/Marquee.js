import React from "react";
import ThemeIcon from "./ThemeIcon";

const Marquee = ({ tickers }) => {
  return (
    // <div className="marquee">
    //   <div className="marquee-content">
    //     {tickers.map((ticker, index) => (
    //       <div key={index} className="ticker">
    //         <span>{ticker.symbol}</span>
    //         <span>{ticker.price}</span>
    //         <span>{ticker.change}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <div className="xl:px-1">
        <h1 className="text-5xl">Ticker</h1>
      </div>
      <ThemeIcon />
    </>
  );
};

export default Marquee;

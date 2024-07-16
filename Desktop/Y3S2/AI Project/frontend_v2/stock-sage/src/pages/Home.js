import React, { useContext, useState } from "react";

const Home = () => {
  return (
    <section className="bg-background">
      <header className="flex items-center pt-5 pl-10">
        <div className="text-7xl">
          <h1 className="text-stockSage">StockSage</h1>
        </div>
        <div className="flex">
          <nav className="">
            <h2>MarqueeTag</h2>
          </nav>
          <nav className="">
            <h2>News</h2>
          </nav>
        </div>
      </header>

      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 class="pt-28 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          A paradigm shift to future
        </h1>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          stock trading
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Manifest · Analyze · Trade
        </p>
      </div>
      <div class="bg-gradient-to-b dark:from-purple-950 w-full h-full top-36 left-0 z-0 absolute"></div>

      <footer className="flex justify-between items-center pb-4">
        <div className="flex-shrink-0 pl-10">
          <h3 className="text-white">where finance meets AI</h3>
        </div>
        <div className="flex-shrink-0 pr-10">
          <h3 className=" text-white">2024</h3>
        </div>
      </footer>
    </section>
  );
};

export default Home;

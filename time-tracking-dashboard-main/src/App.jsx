import React, { useState } from "react";

import Card from "./components/card";
import cards from "../data.json";

import ProfileImg from "/image-jeremy.png";

const TIMEFRAMES = ["daily", "weekly", "monthly"];

const App = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <main className="tracking-wide bg-very-dark-blue max-w-[1440px] mx-auto lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      <section className="px-6 py-14 sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 lg:items-center">
        <div className="sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-auto lg:row-start-1 lg:row-end-3">
          <div className="relative z-10 flex items-center justify-center p-6 bg-custom-blue rounded-xl lg:flex-col lg:items-start">
            <img
              src={ProfileImg}
              width="75"
              height="75"
              alt="Jeremy Robson"
              className="mr-5 border-4 rounded-full lg:mb-4"
            />

            <div className="lg:pb-14">
              <span className="text-base font-light text-pale-blue">
                Report for
              </span>

              <h1 className="mt-1 text-2xl font-light text-white lg:text-3xl lg:leading-snug">
                Jeremy <br className="hidden lg:block" />
                Robson
              </h1>
            </div>
          </div>

          <div className="flex justify-between p-6 pt-10 -mt-4 text-white bg-dark-blue rounded-b-xl lg:block lg:py-2 lg:pt-6">
            {TIMEFRAMES.map((tf) => {
              let timeframeOpacity;

              timeframe === tf
                ? (timeframeOpacity = "")
                : (timeframeOpacity = "text-desaturated-blue hover:text-white");

              return (
                <button
                  className={`${timeframeOpacity} capitalize lg:block lg:text-left lg:my-2`}
                  onClick={() => setTimeframe(tf)}
                  key={tf}
                >
                  {tf}
                </button>
              );
            })}
          </div>
        </div>

        {cards.map((card) => (
          <Card currentTimeframe={timeframe} data={card} key={card.title} />
        ))}
      </section>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/imadatyatalah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imad Atyat-Alah
        </a>
        .
      </div>
    </main>
  );
};

export default App;

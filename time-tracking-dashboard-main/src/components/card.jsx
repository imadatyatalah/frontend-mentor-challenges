import React from "react";

import WorkIcon from "/icon-work.svg?import.";
import PlayIcon from "/icon-play.svg?import.";
import StudyIcon from "/icon-study.svg?import.";
import ExerciseIcon from "/icon-exercise.svg?import.";
import SocialIcon from "/icon-social.svg?import.";
import SelfCareIcon from "/icon-self-care.svg?import.";

const Card = ({ currentTimeframe, data }) => {
  const { title, timeframes } = data;

  let bgColor;
  let bgIcon;
  let previousText;

  switch (title) {
    case "Work":
      bgColor = "bg-light-red-orange";
      bgIcon = WorkIcon;
      break;
    case "Play":
      bgColor = "bg-soft-blue";
      bgIcon = PlayIcon;
      break;
    case "Study":
      bgColor = "bg-light-red";
      bgIcon = StudyIcon;
      break;
    case "Exercise":
      bgColor = "bg-lime-green";
      bgIcon = ExerciseIcon;
      break;
    case "Social":
      bgColor = "bg-custom-violet";
      bgIcon = SocialIcon;
      break;
    case "Self Care":
      bgColor = "bg-soft-orange";
      bgIcon = SelfCareIcon;
      break;
  }

  switch (currentTimeframe) {
    case "daily":
      previousText = "Yesterday";
      break;
    case "weekly":
      previousText = "Last Week";
      break;
    case "monthly":
      previousText = "Last Month";
      break;
  }

  return (
    <div
      className={`${bgColor} my-6 text-white pt-12 rounded-xl lg:my-0`}
      style={{
        backgroundImage: `url(${bgIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="p-6 bg-dark-blue rounded-xl lg:hover:bg-desaturated-blue lg:hover:cursor-pointer">
        <div className="flex items-center justify-between pb-1">
          <h2 className="text-lg font-medium">{title}</h2>

          <svg
            aria-hidden="true"
            className="cursor-pointer opacity-80 lg:hover:opacity-100"
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between lg:flex-col lg:items-start lg:mt-2">
          <p className="text-3xl font-light lg:mb-1">
            {timeframes[currentTimeframe].current}hrs
          </p>

          <p className="text-sm text-pale-blue">
            {previousText} - {timeframes[currentTimeframe].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

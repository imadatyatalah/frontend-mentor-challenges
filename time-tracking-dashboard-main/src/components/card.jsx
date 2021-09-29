import React from "react";

const Card = ({ currentTimeframe, data }) => {
  const { title, timeframes } = data;

  const taskClass = `${title.replace(/ /g, "-").toLowerCase()}-task`;

  let previousText;

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
      className={`${taskClass} task my-6 text-white pt-12 rounded-xl sm:my-0`}
    >
      <div className="p-6 bg-dark-blue rounded-xl lg:hover:bg-desaturated-blue lg:hover:cursor-pointer">
        <div className="flex items-center justify-between pb-1">
          <h2 className="text-lg font-medium">{title}</h2>

          <svg
            aria-hidden="true"
            className="cursor-pointer fill-[#BBC0FF] lg:hover:fill-[white]"
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between sm:flex-col sm:items-start sm:mt-2">
          <p className="text-4xl font-light sm:mb-1">
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

import classNames from "classnames";

import IconDown from "../icons/IconDown";
import IconUp from "../icons/IconUp";

interface Props {
  data: {
    icon: JSX.Element;
    username: string;
    followers: number | string;
    text: string;
    number: number;
    socialMediaApp: string;
  };
}

const OverallStatsCard = ({ data }: Props) => {
  const { followers, text, number, username, icon, socialMediaApp } = data;

  const containerClassNames = classNames(
    `text-center max-h-[216px] ${socialMediaApp}-overall-card overall-card rounded-[4px] mb-[24px] py-[26px] sm:mb-0`
  );

  const todayClassNames = classNames(
    "ml-[5px] font-bold text-xs",
    number > 0 ? "text-[#1db489]" : "text-[#dc414c]"
  );

  return (
    <div className={containerClassNames}>
      <div className="flex items-center justify-center">
        <div className="mr-2">{icon}</div>

        <p className="text-[#63687e] dark:text-[#8b97c6] font-bold">
          {username}
        </p>
      </div>

      <p className="text-[56px] leading-none tracking-[-0.04em] font-bold pt-6 pb-2 dark:text-white">
        {followers}
      </p>

      <p className="uppercase text-[#63687e] dark:text-[#8b97c6] tracking-[0.42em] text-xs">
        {text}
      </p>

      <div className="flex items-center justify-center mt-7">
        {number > 0 ? <IconUp /> : <IconDown />}

        <p className={todayClassNames}>{Math.abs(number)} Today</p>
      </div>
    </div>
  );
};

export default OverallStatsCard;

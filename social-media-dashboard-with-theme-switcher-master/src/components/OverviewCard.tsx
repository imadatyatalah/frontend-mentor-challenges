import classNames from "classnames";

import IconDown from "../icons/IconDown";
import IconUp from "../icons/IconUp";

interface Props {
  data: {
    icon: JSX.Element;
    title: string;
    number: number | string;
    percentage: number;
  };
}

const OverviewCard = ({ data }: Props) => {
  const { percentage, number, title, icon } = data;

  const containerClassNames = classNames(
    `max-h-[125px] bg-[#f0f2fa] dark:bg-[#252a41] rounded-[4px] mb-[16px] py-[26px] px-[25px] sm:mb-0`
  );

  const todayClassNames = classNames(
    "ml-[5px] font-bold text-xs",
    percentage > 0 ? "text-[#1db489]" : "text-[#dc414c]"
  );

  return (
    <div className={containerClassNames}>
      <div className="flex items-center justify-between mb-[34px]">
        <div>
          <h3 className="font-bold">{title}</h3>
        </div>

        <div>{icon}</div>
      </div>

      <div className="flex items-baseline justify-between">
        <div>
          <p className="font-bold text-[34px] dark:text-white">{number}</p>
        </div>

        <div className="flex items-center justify-center">
          {percentage > 0 ? <IconUp /> : <IconDown />}

          <p className={todayClassNames}>{Math.abs(percentage)} Today</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;

import { useEffect, useState } from "react";

import axios from "axios";

interface ISlipAdvice {
  id: number;
  advice: string;
}

const Card = () => {
  const [advice, setAdvice] = useState<ISlipAdvice>({} as ISlipAdvice);

  const fetchAdvice = () => {
    axios
      .get<{ slip: ISlipAdvice }>("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => fetchAdvice();

  return (
    <div className="w-full p-4 pt-8 my-6 text-center sm:px-8 rounded-xl bg-dark-grayish-blue sm:w-[540px] shadow-2xl">
      <span className="text-xs uppercase text-neon-green tracking-[0.25em]">
        Advice #{advice.id}
      </span>

      <div className="py-[38px]">
        <p className="text-2xl text-light-cyan sm:leading-10 sm:text-[28px]">
          <q>{advice.advice}</q>
        </p>
      </div>

      <div className="-mb-6 h-[50px] card-pattern"></div>

      <button
        className="card-button m-auto grid place-items-center h-[60px] w-[60px] rounded-[50%] bg-neon-green"
        onClick={handleClick}
      >
        <img src="/icon-dice.svg" alt="die button" />
      </button>
    </div>
  );
};

export default Card;

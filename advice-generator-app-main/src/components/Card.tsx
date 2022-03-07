import useSwr from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface ISlipAdvice {
  slip: { id: number; advice: string };
}

const Card = () => {
  const { data, error, mutate } = useSwr<ISlipAdvice>(
    "https://api.adviceslip.com/advice",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const handleClick = () => mutate();

  return (
    <div className="w-full p-4 pt-8 m-4 text-center sm:px-8 rounded-xl bg-dark-grayish-blue sm:w-[540px]">
      <span className="text-xs uppercase text-neon-green tracking-[0.25em]">
        Advice #{data.slip.id}
      </span>

      <div className="py-[38px]">
        <p className="text-2xl text-light-cyan sm:leading-10 sm:text-[28px]">
          <q>{data.slip.advice}</q>
        </p>
      </div>

      <div className="-mb-6 card-pattern h-[50px]"></div>

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

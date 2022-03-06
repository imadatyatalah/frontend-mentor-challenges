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
    <div className="w-full p-4 pt-8 m-4 text-center rounded-md bg-dark-grayish-blue">
      <span className="text-xs tracking-[0.25em] uppercase text-neon-green">
        Advice #{data.slip.id}
      </span>

      <div className="py-[38px]">
        <p className="text-2xl md:text-[28px] text-light-cyan leading-8">
          <q>{data.slip.advice}</q>
        </p>
      </div>

      <div className="card-pattern h-[50px] -mb-6"></div>

      <button
        className="card-button m-auto grid place-items-center h-[60px] w-[60px] rounded-[50%] bg-neon-green"
        onClick={handleClick}
      >
        <img src="images/icon-dice.svg" alt="die button" />
      </button>
    </div>
  );
};

export default Card;

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
    <div className="mx-">
      <h1>{data.slip.advice}</h1>

      <button onClick={handleClick}>regenerate</button>
    </div>
  );
};

export default Card;

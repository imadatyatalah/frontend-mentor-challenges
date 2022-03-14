import { data } from "./data";
import OverallStatsCard from "./components/OverallStatsCard";

const App = () => {
  return (
    <main className="">
      <section className="sm:grid sm:grid-cols-2 sm:gap-y-6 sm:gap-x-[30px] lg:grid-cols-4">
        {data.map((data, index) => (
          <OverallStatsCard data={data} key={index} />
        ))}
      </section>

      <section></section>
    </main>
  );
};

export default App;

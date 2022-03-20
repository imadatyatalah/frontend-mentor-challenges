import { data, todaysOverview } from "./data";
import OverallStatsCard from "./components/OverallStatsCard";
import OverviewCard from "./components/OverviewCard";

const App = () => {
  return (
    <main>
      <section className="sm:grid sm:grid-cols-2 sm:gap-y-6 sm:gap-x-[30px] lg:grid-cols-4">
        {data.map((data, index) => (
          <OverallStatsCard data={data} key={index} />
        ))}
      </section>

      <section className="mt-[50px]">
        <h2 className="text-2xl font-bold text-[#63687e] dark:text-white">
          Overview - Today
        </h2>

        <div className="mt-[30px] sm:grid sm:grid-cols-2 sm:gap-y-6 sm:gap-x-[30px] lg:grid-cols-4">
          {todaysOverview.map((data, index) => (
            <OverviewCard data={data} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;

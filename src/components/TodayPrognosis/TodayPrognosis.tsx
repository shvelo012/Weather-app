import { HourlyPrognosis } from "./HourlyPrognosis/HourlyPrognosis";

export default function TodayPrognosis() {
  const morningGradient = "linear-gradient(to bottom, #F88508, #F6FAD9)";
  const eveningGradient = "linear-gradient(to bottom, #443D64, #6582C6)";

  return (
    <div className="bg-[#D9D9D9] w-[50rem] h-[20rem] rounded-3xl shadow-[8px_8px_2px_1px_rgba(41,41,41,0.6)] px-5">
      <header className="">
        <h1 className="text-3xl font-bold flex justify-center my-3">
          Hourly Forecast:
        </h1>
      </header>
      <section className="flex flex-row gap-5 justify-center">
        <HourlyPrognosis backgroundColor={morningGradient} />
        <HourlyPrognosis backgroundColor={morningGradient} />
        <HourlyPrognosis backgroundColor={morningGradient} />
        <HourlyPrognosis backgroundColor={eveningGradient} />
        <HourlyPrognosis backgroundColor={eveningGradient} />
      </section>
    </div>
  );
}

import DailyRowForecast from "../DailyRowForecast/DailyRowForecast";

export default function TimeLine() {
  return <div className="px-5 bg-[#D9D9D9] w-[25rem] h-[20rem] rounded-3xl shadow-[8px_8px_2px_1px_rgba(41,41,41,0.6)]">
    <p className="flex justify-center my-3 font-bold text-3xl " >5 Days Forecast</p>
    <div>
      <DailyRowForecast />
      <DailyRowForecast />
      <DailyRowForecast />
      <DailyRowForecast />
      <DailyRowForecast />
    </div>
  </div>;
}

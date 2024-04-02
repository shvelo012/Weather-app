
import { DailyRowForecastProps } from "./DailyRowForecast.props"

const DailyRowForecast= ({formatdate, avgTemp, icon}:any) => {

  return (
    <div className="flex flex-row justify-between mx-6 content-center items-center pb-2">
      {icon}
      <p className="text-xl font-bold">{Math.floor(avgTemp)}&deg;C</p>
      <p className="text-xl font-bold w-[8rem] flex justify-end">{formatdate}</p>
    </div>
  )
}

export default DailyRowForecast;

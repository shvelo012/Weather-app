import Clouds1Icon from "../../SVG/Clouds1";
import { DailyRowForecastProps } from "./DailyRowForecast.props"

const DailyRowForecast: React.FC<DailyRowForecastProps> = (props) => {
  return (
    <div className="flex flex-row justify-between mx-6 content-center items-center">
      <Clouds1Icon Width="50" Height="50" />
      <p className="text-xl font-bold">20°C</p>
      <p className="text-xl font-bold">Friday, 1 Sep</p>
    </div>
  )
}

export default DailyRowForecast;

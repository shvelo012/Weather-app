import { useEffect, useState } from "react";
import DailyRowForecast from "../DailyRowForecast/DailyRowForecast";
import { Rain_light } from "../../SVG2/rain_light";
import { Cloudy } from "../../SVG2/cloudy";

const apikey = "QsbR1ArKHFa6tTqqxrKG5SOJw7RFmLMQ";
let location = "new york";
const units = "metric";

export default function TimeLine() {
  const [forecastData, setForecastData] = useState<any[]>();
  const [error, setError] = useState(null);

  function formatDate(dateString: any) {
    const date = new Date(dateString);
    const weekdays = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    const weekday = weekdays[date.getDay()];
    const formattedDate =
      weekday +
      ", " +
      date.getDate() +
      " " +
      date.toLocaleDateString("en-US", { month: "long" });

    return formattedDate;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timesteps = ["1d"];
        const weatherForecastParams = new URLSearchParams({
          apikey: apikey,
          location,
          units,
          timesteps: timesteps.join(","),
        });

        const response = await fetch(
          `https://api.tomorrow.io/v4/weather/forecast?${weatherForecastParams}`
        );

        const data = await response.json();
        setForecastData(data?.timelines?.daily);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  // fetch only next 5 day data 
  const forecast = forecastData.slice(0, 5);

  
  // check if fetched data api weatherCodeMax is in the weatherIconMap obj 
  const weatherIconMap:{ [key: number]: JSX.Element } = {
    4200: <Rain_light Width={"45"} Height={"45"} />,
    1001: <Cloudy Width={"45"} Height={"45"} />,
  };

  
  
  
  return (
    <div className="px-5 bg-[#D9D9D9] w-[25rem] h-[20rem] rounded-3xl shadow-[8px_8px_2px_1px_rgba(41,41,41,0.6)]">
      <p className="flex justify-center my-3 font-bold text-3xl">
        5 Days Forecast
      </p>
      <div>
        {forecast.map((day) => (
          <div key={day.time}>
            <DailyRowForecast
              icon={day.values.weatherCodeMax in weatherIconMap ? weatherIconMap[day.values.weatherCodeMax] : 'Not Found'}
              formatdate={formatDate(day.time)}
              avgTemp={day.values.temperatureAvg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

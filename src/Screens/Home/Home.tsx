import { useEffect, useState } from "react";
import { CurrentDate } from "../../components/CurrentDate/CurrentDate";
import { Header } from "../../components/Header/Header";
import TimeLine from "../../components/TimeLine/TimeLine";
import TodayPrognosis from "../../components/TodayPrognosis/TodayPrognosis";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

export const HomeScreen = () => {
  const [currentCountry, setCurrentCountry] = useState("");
 
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(async (position) => {
    //   const { latitude, longitude } = position.coords;
    //   const response = await fetch(
    //     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    //   );
    //   const data = await response.json();
    //   setCurrentCountry(data.countryName);
    // });
  }, []);

  const styleDiv = "px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12";
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white to-[#466173]">
      <Header onSearch={(country: any) => setCurrentCountry(country)} />
      <div className={styleDiv}>
        <CurrentDate
          country={currentCountry}
        />
        <CurrentWeather country={currentCountry}/>
      </div>
      <div className={styleDiv}>
        <TimeLine />
        <TodayPrognosis />
      </div>
    </div>
  );
};

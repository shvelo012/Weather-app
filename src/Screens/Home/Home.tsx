import { useEffect, useState } from "react";
import { CurrentDate } from "../../components/CurrentDate/CurrentDate";
import { Header } from "../../components/Header/Header";
import TimeLine from "../../components/TimeLine/TimeLine";
import TodayPrognosis from "../../components/TodayPrognosis/TodayPrognosis";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";


export const HomeScreen = () => {
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  
  useEffect(() => {
    const today = new Date();
    const options: any = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };

    const formattedDateTime = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDateTime);

    // Get current location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      // Fetch country name from coordinates
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
      const data = await response.json();
      setCurrentCountry(data.countryName);
      console.log(data);
      
    });

  }, []); 


  const styleDiv = "px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12";
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white to-[#466173]">
      <Header onSearch={(country: any) => setCurrentCountry(country)} />
      <div className={styleDiv}>
        <CurrentDate country={currentCountry}  date={currentDate} />
        <CurrentWeather />       
      </div>
      <div className={styleDiv}>
        <TimeLine />
        <TodayPrognosis />
      </div>
    </div>
  );
};

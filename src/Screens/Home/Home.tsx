import { useEffect, useState } from "react";
import { CurrentDate } from "../../components/CurrentDate/CurrentDate";
import { CurrentLocation } from "../../components/CurrentLocation/CurrentLocation";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Theme } from "../../components/Theme/Theme";
import TimeLine from "../../components/TimeLine/TimeLine";
import TodayPrognosis from "../../components/TodayPrognosis/TodayPrognosis";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { CurrentCountry } from "../../components/CurrentCountry";

export const HomeScreen = () => {
  const [error, setError] = useState<any>(null);
  const [currentCountry, setCurrentCountry] = useState("");
  // const [currentContinent, setCurrentContinent] = useState("");

  // useEffect(() => {
  //   const getLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         async (position) => {
  //           try {
  //             // setLatitude(position.coords.latitude);
  //             // setLongitude(position.coords.longitude);
  //             const response = await fetch(
  //               `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
  //             );
  //             const data = await response.json();
  //             setCurrentCountry(data.countryName);
  //             console.log(data);
              
  //             setCurrentContinent(data.continent);
  //           } catch (error: any) {
  //             setError(error.message);
  //           }
  //         },
  //         (error: any) => {
  //           setError(error.message);
  //         }
  //       );
  //     } else {
  //       setError("Geolocation is not supported by this browser.");
  //     }
  //   };

  //   getLocation();
  // }, []);

  // console.log(currentCountry);
  // console.log(currentContinent);
  

  const styleDiv = "px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12";
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white to-[#466173]">
      <Header onSearch={(country: any) => setCurrentCountry(country)} />
      <div className={styleDiv}>
        <CurrentDate country={currentCountry} />
        <CurrentWeather />
        
      </div>
      <div className={styleDiv}>
        <TimeLine />
        <TodayPrognosis />
      </div>
    </div>
  );
};

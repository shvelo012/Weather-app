import { CurrentDate } from "../../components/CurrentDate/CurrentDate";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { Header } from "../../components/Header/Header";
import TimeLine from "../../components/TimeLine/TimeLine";
import TodayPrognosis from "../../components/TodayPrognosis/TodayPrognosis";

export const HomeScreen = () => {
  const styleDiv = 'px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12'
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white to-[#466173]">
      <Header />
      <div className={styleDiv}>
        <CurrentDate />
        <CurrentWeather />
      </div>
      <div className={styleDiv}>
        <TimeLine />
        <TodayPrognosis />
      </div>
    </div>
  );
};

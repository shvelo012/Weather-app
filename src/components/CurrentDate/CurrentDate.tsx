import { useEffect, useState } from "react";
import { CurrentDateProps } from "./CurrentDate.props";

export const CurrentDate = ({ country }: any) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatedTime = currentTime.toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    setCurrentDate(formattedDate);
    
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[#D9D9D9] w-[35rem] h-[20rem] rounded-3xl shadow-[8px_8px_2px_1px_rgba(41,41,41,0.6)]">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-7 mt-14 font-bold text-4xl capitalize">{country}</p>
        <p className="font-bold text-7xl">{formatedTime.split(",")[1]}</p>
        <p className="font-bold py-2">{currentDate}</p>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { CurrentDateProps } from "./CurrentDate.props";
import Clock from "react-live-clock";

export const CurrentDate = ({ country, date }: any) => {
  // const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  // const [date, setDate] = useState(null);
  // const [time, setTime] = useState(null);
  const [timeZoneExists, setTimeZoneExists] = useState(false);

  useEffect(() => {
    // Handle potential time zone errors (if applicable)
    try {
      const timeZoneOffset = new Date().toLocaleTimeString("en-US", {
        timeZone: country,
      });
      setTimeZoneExists(true); // Time zone valid
    } catch (error) {
      // console.error("Invalid time zone:", country, error);
      setTimeZoneExists(false); // Time zone invalid
    }
  }, [country]);

  // const options = { method: "GET", headers: { accept: "application/json" } };

  // if (country !== "") {
  //   fetch(
  //     `https://api.tomorrow.io/v4/weather/realtime?location=${country}&apikey=QsbR1ArKHFa6tTqqxrKG5SOJw7RFmLMQ`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setTime(response.data.time))
  //     .catch((err) => console.error(err));
  // }

  // console.log(time);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   } else {
  //     console.log("Geolocation not supported");
  //   }
  //   function success(position: CurrentDateProps) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     setLocation({ latitude, longitude });
  //     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //   }
  // }, []);

  // function error() {
  //   console.log("Unable to retrieve your location");
  // }

  return (
    <div className="bg-[#D9D9D9] w-[35rem] h-[20rem] rounded-3xl shadow-[8px_8px_2px_1px_rgba(41,41,41,0.6)]">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-7 mt-14 font-bold text-4xl capitalize">
          {/* {country.split('/')[1]} */}
          {country}
        </p>

        <p className="font-bold text-7xl">
          <Clock format={"HH:mm"} ticking={true} timezone={country} />
        </p>

        {/* <p>{formattedDate}</p> */}
        <p className="font-bold py-2">{date}</p>
      </div>
    </div>
  );
};

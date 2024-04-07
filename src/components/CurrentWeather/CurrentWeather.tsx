import { SunriseSunset } from "./CurrWeatherInnerComps/SunRise-SunSet/Sunrise&sunset";
import { WeatherFeatures } from "./CurrWeatherInnerComps/WeatherFeatures/WeatherFeatures";
import { SunriseIcon } from "../../SVG/SunriseIcon";
import { SunsetIcon } from "../../SVG/SunsetIcon";
import { HumidityIcon } from "../../SVG/HumidityIcon";
import { WindSpeedIcon } from "../../SVG/WindSpeedIcon";
import { PressureIcon } from "../../SVG/PressureIcon";
import { UVIcon } from "../../SVG/UVIcon";
import { Clear_day } from "../../SVG2/clear_day";
import { useEffect, useState } from "react";



export default function CurrentWeather({ country }: any) {
  return (
    <div className="p-5 bg-[#D9D9D9] w-[50rem] h-[20rem] rounded-3xl shadow-[8px_8px_2px_1px_rgba(41,41,41,0.6)] flex flex-row justify-between items-center">
      <section className="p-5">
        <h1 className=" bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text font-bold text-7xl">
          24&deg;C
        </h1>
        <p className="font-bold ml-1 mb-8 text-xl">
          Feels like: <span className="font-bold text-2xl">22&deg;C</span>
        </p>
        <SunriseSunset
          image={<SunriseIcon Width={"50"} Height={"50"} />}
          sunPosition={"Sunrise"}
          time={"06:45 AM"}
        />
        <SunriseSunset
          image={<SunsetIcon Width={"50"} Height={"50"} />}
          sunPosition={"Sunset"}
          time={"17:45 PM"}
        />
      </section>
      <section className="flex flex-col justify-center items-center  mb-10">
        <div className="w-[12rem] h-[12rem] flex justify-center items-center">
          <Clear_day Width={"150"} Height={"150"} />
        </div>
        <h2 className="text-3xl font-bold">Sunny</h2>
      </section>
      <section className="w-[14rem] flex items-center flex-wrap">
        <WeatherFeatures
          image={<HumidityIcon Width={"50"} Height={"50"} />}
          condition={"48%"}
          atmoFactors={"Humidity"}
        />
        <WeatherFeatures
          image={<WindSpeedIcon Width={"50"} Height={"50"} />}
          condition={"2km/h"}
          atmoFactors={"Wind Speed"}
        />
        <WeatherFeatures
          image={<PressureIcon Width={"50"} Height={"50"} />}
          condition={"997hpa"}
          atmoFactors={"Pressure"}
        />
        <WeatherFeatures
          image={<UVIcon Width={"50"} Height={"50"} />}
          condition={"8"}
          atmoFactors={"UV"}
        />
      </section>
    </div>
  );
}

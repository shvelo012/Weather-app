import { CurrentLocation } from "../CurrentLocation/CurrentLocation";
import { Theme } from "../Theme/Theme";
import LocationSearchInput from "../SearchBar/SearchBar";
import { useState } from "react";

export const Header = () => {

  const [latLng, setLatLng] = useState();

  console.log(latLng);
  return (
    <div className="px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12">
      <Theme />
      <LocationSearchInput getLatLngInHeader={(value) => setLatLng(value)} />
      <CurrentLocation />
    </div>
  );
};

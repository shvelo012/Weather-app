import { CurrentLocation } from "../CurrentLocation/CurrentLocation";
import { Theme } from "../Theme/Theme";
import LocationSearchInput from "../SearchBar/SearchBar";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";


export const Header = ({onSearch}:any) => {
  return (
    <div className="px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12">
      <Theme />
      <SearchBar onSearch={onSearch} />
      <CurrentLocation />
    </div>
  );
};

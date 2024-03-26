import { CurrentLocation } from "../CurrentLocation/CurrentLocation";
import { SearchBar } from "../SearchBar/SearchBar";
import { Theme } from "../Theme/Theme";

export const Header = () => {
  return (
    <div className="px-8 py-8 pb-2 w-[80rem] mx-auto flex items-center gap-12">
      <Theme />
      <SearchBar />
      <CurrentLocation />
    </div>
  );
};

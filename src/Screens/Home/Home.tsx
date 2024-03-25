import { CurrentLocation } from "../../components/Header/CurrentLocation/CurrentLocation";
import { SearchBar } from "../../components/Header/SearchBar/SearchBar";
import { Theme } from "../../components/Header/Theme/Theme";

export const HomeScreen = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white to-[#466173] pt-10 ">
      <div className=" px-8 py-12 w-[80rem] mx-auto flex items-center gap-12 ">
        <Theme />
        <SearchBar />
        <CurrentLocation />
      </div>
    </div>
  );
};

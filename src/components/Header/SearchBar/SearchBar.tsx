import { SearchIcon } from "../../../SVG/SearchIcon";

export const SearchBar = () => {
  return (
    <div className="h-[3.5rem] w-[50rem] bg-[#D9D9D9] rounded-full flex items-center gap-8 px-10 border-[#292929] border-[1.5px] ">
      <SearchIcon Width={"24"} Height={"24"} />
      <p className="text-base text-[#292929]">
        Search for your preferred city...
      </p>
    </div>
  );
};

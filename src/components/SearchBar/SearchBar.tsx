import { useState } from "react";
import { SearchIcon } from "../../SVG/SearchIcon";
import { COLORS } from "../../Theme/COLORS";


export const SearchBar = ({ onSearch }: any) => {
  const [inputWord, setInputWord] = useState("");

  const handleChange = (e: any) => {
    setInputWord(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(inputWord);
    setInputWord("");
  };

  return (
    <>
      <div className="h-[3.5rem] w-[50rem] bg-[#D9D9D9] rounded-full flex items-center gap-8 px-10 border-[#292929] border-[1.5px] ">
        <SearchIcon Width={"24"} Height={"24"} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputWord}
            onChange={handleChange}
            className="flex-grow px-2 py-1 bg-transparent focus:outline-none"
            placeholder="Search for your preferred city..."
          />
        </form>
      </div>
    </>
  );
};

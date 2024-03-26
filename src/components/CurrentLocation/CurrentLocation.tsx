import { CurrLocationIcon } from "../../SVG/CurrLocationIcon";

export const CurrentLocation = () => {
  return (
    <div className="h-[3.5rem] w-[15rem] shadow-xl bg-[#4CBB17] rounded-full flex items-center gap-4 px-5">
      <CurrLocationIcon Width={'20'} Height={'20'} />
      <p className="text-lg font-bold text-[#ffffff]">Current location</p>
    </div>
  );
};

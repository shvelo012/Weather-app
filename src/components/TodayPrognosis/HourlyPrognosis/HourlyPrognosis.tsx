import Clouds1Icon from "../../../SVG/Clouds1";

export const HourlyPrognosis = ({ backgroundColor }: any) => {
  return (
    <div
      className="w-[7rem] rounded-3xl flex flex-col justify-center items-center py-3 mt-3"
      style={{ background: backgroundColor }}
    >
      <p className="font-bold text-xl">12:00</p>
      <Clouds1Icon Width="60" Height="60" />
      <p className="font-bold text-lg">26&deg;C</p>
      <Clouds1Icon Width="60" Height="60" />
      <p className="font-bold text-xl">3km/h</p>
    </div>
  );
};

import { CurrLocationIcon } from "../../../../SVG/CurrLocationIcon"

export const SunriseSunset = ({image,sunPosition, time}:any) => {
    return (
        <div className="flex flex-row ml-5 gap-2">
          {image}
          <div>
            <p className="font-bold text-xl">{sunPosition}</p>
            <p>{time}</p>
          </div>
        </div>
    )
} 
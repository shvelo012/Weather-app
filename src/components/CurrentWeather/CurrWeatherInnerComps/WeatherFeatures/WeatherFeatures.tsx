import { CurrLocationIcon } from "../../../../SVG/CurrLocationIcon"

export const WeatherFeatures = ({image,condition,atmoFactors}:any) => {
    return (
        <div className="w-[7rem] h-[7rem] flex flex-col justify-center items-center">
          {image}
          <p>{condition}</p>
          <p>{atmoFactors}</p>
        </div>
    )
} 
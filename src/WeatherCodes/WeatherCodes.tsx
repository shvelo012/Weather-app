import { Rain_light } from "../SVG2/rain_light";
import { Cloudy } from "../SVG2/cloudy";
import { Clear_day } from "../SVG2/clear_day";
import { Mostly_clear_day } from "../SVG2/mostly_clear_day";
import { Partly_cloudy_day } from "../SVG2/partly_cloudy_day";
import { Mostly_cloudy } from "../SVG2/mostly_cloudy";
import { Fog } from "../SVG2/fog";
import { Fog_light } from "../SVG2/fog_light";
import { Drizzle } from "../SVG2/drizzle";
import { Rain } from "../SVG2/rain";
import { Rain_heavy } from "../SVG2/rain_heavy";
import { Snow } from "../SVG2/snow";
import { Flurries } from "../SVG2/flurries";
import { Snow_light } from "../SVG2/snow_light";
import { Snow_heavy } from "../SVG2/snow_heavy";
import { Freezing_drizzle } from "../SVG2/freezing_drizzle";
import { Freezing_rain } from "../SVG2/freezing_rain";
import { Freezing_rain_light } from "../SVG2/freezing_rain_light";
import { Freezing_rain_heavy } from "../SVG2/freezing_rain_heavy";
import { Ice_pallets } from "../SVG2/ice_pellets";
import { Ice_pallets_heavy } from "../SVG2/ice_pellets_heavy";
import { Ice_pallets_light } from "../SVG2/ice_pellets_light";
import { Tstorm } from "../SVG2/tstorm";

export const weatherIconMap: { [key: number]: JSX.Element } = {
    1000: <Clear_day Width={"45"} Height={"45"} />,
    1100: <Mostly_clear_day Width={"45"} Height={"45"} />,
    1101: <Partly_cloudy_day Width={"45"} Height={"45"} />,
    1102: <Mostly_cloudy Width={"45"} Height={"45"} />,
    1001: <Cloudy Width={"45"} Height={"45"} />,
    2000: <Fog Width={"45"} Height={"45"} />,
    2100: <Fog_light Width={"45"} Height={"45"} />,
    4000: <Drizzle Width={"45"} Height={"45"} />,
    4001: <Rain Width={"45"} Height={"45"} />,
    4200: <Rain_light Width={"45"} Height={"45"} />,
    4201: <Rain_heavy Width={"45"} Height={"45"} />,
    5000: <Snow Width={"45"} Height={"45"} />,
    5001: <Flurries Width={"45"} Height={"45"} />,
    5100: <Snow_light Width={"45"} Height={"45"} />,
    5101: <Snow_heavy Width={"45"} Height={"45"} />,
    6000: <Freezing_drizzle Width={"45"} Height={"45"} />,
    6001: <Freezing_rain Width={"45"} Height={"45"} />,
    6200: <Freezing_rain_light Width={"45"} Height={"45"} />,
    6201: <Freezing_rain_heavy Width={"45"} Height={"45"} />,
    7000: <Ice_pallets Width={"45"} Height={"45"} />,
    7101: <Ice_pallets_heavy Width={"45"} Height={"45"} />,
    7102: <Ice_pallets_light Width={"45"} Height={"45"} />,
    8000: <Tstorm Width={"45"} Height={"45"} />,
  };
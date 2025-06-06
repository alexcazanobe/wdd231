import { loadWeather}  from "./weather.mjs";
import { loadSpotLights } from "./spotlight.mjs";
import {setFooter, setupHamburger} from './utils.mjs';


setFooter();
setupHamburger();
loadWeather();
loadSpotLights();

import { getCurrentWeather } from "../modules/weather.mjs";

//buttons
document.querySelector("#ylwstn").addEventListener('click', () => {
getCurrentWeather(44.60932, -110.48403)
})


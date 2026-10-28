import {greet, bake, bites} from "../modules/tasks.mjs"
greet("john")

bake(3, "lemon")

bites(8)

import {displayWeather, displayLogo, convert} from "../modules/weather.mjs"
displayWeather(`<p> Weather: ${cw.weather[0].description} </p>`)

displayLogo(`
    <p> Sunrise: ${convert(cw.sys.sunrise)} AM</p>
    <p> Sunset: ${convert(cw.sys.sunset)} PM</p>`)

convert('<p> ${h}:${m} </p>')
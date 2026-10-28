import { getCurrentWeather } from "../modules/weather.mjs";

//buttons
document.querySelector("#park1").addEventListener('click', () => {
getCurrentWeather(40.53335354402215, -111.49016984994542)
})

document.querySelector("#park2").addEventListener('click', () => {
getCurrentWeather(25.933488066055048, -80.55458631319833)
})

document.querySelector("#park3").addEventListener('click', () => {
getCurrentWeather(37.601693617079135, -112.18533500916251)
})

document.querySelector("#park4").addEventListener('click', () => {
getCurrentWeather(37.6406336069576, -118.96579766704055)
})

//internal function to displaythe current parks weather info and time
function displayWeather(cw){
    console.log(cw)
    console.log(cw.weather[0].description)
    document.querySelector(".show-here").innerHTML= cw.weather[0].description
    document.querySelector(".show-here").innerHTML=
    `<p> Weather: ${cw.weather[0].description} </p>`
}

function displayLogo(cw){
    document.querySelector(".show-here").innerHTML= `<img src="https://openweathermap.org/payload/api/media/file/${cw.weather[0].icon}.png">`
    document.querySelector(".show-here").innerHTML+=`
    <p> Sunrise: ${convert(cw.sys.sunrise)} AM</p>
    <p> Sunset: ${convert(cw.sys.sunset)} PM</p>`
}


//internal function used to convert time
function convert(ts) {
    const sunTime= new Date(ts*1000)
    const h= sunTime.getHours()>12 ? sunTime.getHours() - 12 : sunTime.getHours();
    const m= sunTime.getMinutes().toString().padStart(2,"0")

    return  `${h}:${m}`
}
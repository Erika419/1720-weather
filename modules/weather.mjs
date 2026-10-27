//export ASYNC function to get weather info

export async function getCurrentWeather(lat, lon){
    const apiKey= "ed52043d205b45660e51b7e771f803c0"
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        displayWeather(await response.json())
    } catch (error) {
        console.error("Fetch error:", error)
    }
}

//internal function to displaythe current parks weather info
function displayWeather(cw){
    console.log(cw)
    console.log(cw.weather[0].description)
    document.querySelector("#show-here").innerHTML= cw.weather[0].description
    document.querySelector("#show-here").innerHTML= `https://openweathermap.org/payload/api/media/file/${cw.weather[0].icon}.png`
}

//https://openweathermap.org/payload/api/media/file/${cw.weather[0].icon}.png
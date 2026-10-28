//export ASYNC function to get weather info

export async function getCurrentWeather(lat, lon){
    const apiKey= "ed52043d205b45660e51b7e771f803c0"
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        displayWeather(await response.json())
        displayTime(await response.json())
        displayLogo(await response.json())
    } catch (error) {
        console.error("Fetch error:", error)
    }
}




function displayLogo(cw){
    document.querySelector(".show-here").innerHTML= `<img src="https://openweathermap.org/payload/api/media/file/${cw.weather[0].icon}.png">`
    document.querySelector(".show-here").innerHTML+=`
    <p> Sunrise: ${convert(cw.sys.sunrise)} AM</p>
    <p> Sunset: ${convert(cw.sys.sunset)} PM</p>`
}
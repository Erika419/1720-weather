//export ASYNC function to get weather info

export async function getCurrentWeather(lat, lon){
    const apiKey= "ed52043d205b45660e51b7e771f803c0"
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        displayWeather(await response.json())
        displayLogo(await response.json())
    } catch (error) {
        console.error("Fetch error:", error)
    }
}

//internal function to displaythe current parks weather info and time
function displayWeather(cw){
    console.log(cw)
    console.log(cw.weather[0].description)
    document.querySelector(".show-here").innerHTML= cw.weather[0].description
    displayInfo(`<p> Weather: ${cw.weather[0].description} </p>`)
}


function displayLogo(cw){
    document.querySelector(".show-here").innerHTML= `<img src="https://openweathermap.org/payload/api/media/file/${cw.weather[0].icon}.png">`
    displayInfo(`
    <p> Sunrise: ${convert(cw.sys.sunrise)} AM</p>
    <p> Sunset: ${convert(cw.sys.sunset)} PM</p>`)
}


//internal function used to convert time
function convert(ts) {
    const sunTime= new Date(ts*1000)
    const h= sunTime.getHours()>12 ? sunTime.getHours() - 12 : sunTime.getHours();
    const m= sunTime.getMinutes().toString().padStart(2,"0")
    displayInfo(`${h}:${m}`)

    //speak up
function displayInfo(message){
    console.log("Robot says");
    console.log(message);
    const x = document.querySelector('#info')
    x.innerHTML += "<p>robot says</p>"
    x.innerHTML += message
}
}
//tasks that the robot can perform
export function greet(name){
    speak(`Hello ${name}, I am so glad to meet you today. How are you feeling?`);
}

export function bake(layers, flavor){
    speak(`I can bake ${layers} layer(s) of ${flavor} cakes with frosting.`)
}

export function bites(size){
    let radius = size/2;
    console.log(Math.PI)
    let area= Math.PI * (radius*radius)
    console.log(area);
    area= Math.round(area);
    speak(`If you have a ${size} inch by inch it will have ${area} square inches of pie to eat.`)
}

//speak up
function speak(message){
    console.log("Robot says");
    console.log(message);
    const x = document.querySelector('#mouth')
    x.innerHTML += "<p>robot says</p>"
    x.innerHTML += message
}
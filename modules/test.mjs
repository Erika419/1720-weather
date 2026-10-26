export function Wow(name, image){
    document.querySelector('#car-name').innerText = name;
    console.log(image)
    document.body.style.backgroundImage = `url(images/${image})`
}
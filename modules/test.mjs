//allows background images to pop up when a button is clicked
export function nationalParkImages(name, image){
    document.querySelector('#photos').innerText = name;
    console.log(image)
    document.body.style.backgroundImage = `url(images/${image})`
}
const showFlags= document.querySelector('#showFlags')

async function getData(url) {
    try{
        const response= await fetch(url)
        displayFlags(await response.json())
    }

    catch(error){
        showFlags.innerText= error.message;
    }
}


//Call the function above on page load
getData("https://countries.dev/countries?fields=name,flags,languages");

//loops through the countries and displays their flags
function displayFlags(countries){
    console.log(countries);
    countries.forEach(item =>{
        console.log(item);
        const card = document.createElement("section");
        card.innerHTML=`
        <h2> ${item.name}</h2>
        <img src="${item.flags.svg}" alt="Flag"><
        <p>Languages: ${Object.values(item.languages).map(language => language.name).join(", ")}</p>`
        showFlags.appendChild(card)
    })
}
//imports wow function from test.mjs
import {Wow} from "../modules/test.mjs"

//buttons
document.querySelector("#car1").addEventListener("click", () => {
    Wow("Mustang", "nationalpark1.webp");
})

document.querySelector("#car2").addEventListener("click", () => {
    Wow("Corvet", "nationalpark2.webp");
})

//Display on page load
Wow("Mustang", "nationalpark1.webp")
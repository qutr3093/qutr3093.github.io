
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");

quoteButton.addEventListener("click", getQuote);

async function getQuote(){
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response)

    displayQuote(json_response["joke"]);
}

function displayQuote(x) {
    document.getElementById("js-quote-text").textContent = x;
}

window.addEventListener('load', getDogs);

const source = "https://dog.ceo/api/breeds/image/random";

quoteButton.addEventListener("click", getDogs);

async function getDogs(){
    let imgs = await fetch(source);
    let print = await imgs.text();

    let json_print = JSON.parse(print);
    console.log(json_print)
    console.log(json_print["message"])

    displayDogs(json_print["message"]);
}

function displayDogs(x) {
    document.getElementById("js-dog").src = x;
}

function changeBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

// using inline variable in html
      document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}
const output = document.querySelector(".output"); 

const randomButton = document.querySelector(".random-button").addEventListener("click", random);

function random() {
  outputInt = randomNumber(0, 9999999999);
  output.textContent = outputInt;
}

function randomNumber(min, max) {
  const num = Math.floor(1000000000 + Math.random() * 9000000000);
  return num;
}

// convert string to integer (xxx -> #)
let outputInt = parseInt(output.textContent);

// yes button
const yesButton = document.querySelector(".yes-button").addEventListener("click", set);
// display phone num
const phoneNumber = document.querySelector(".phonenumber");
// questions for each individual number of the phone number
const counter = document.querySelector(".counter")

// storing each phone num, and counter and move on to the next
let str = "";
let count = 0;

function set() {
  var tempArray = String(outputInt).split("").map((outputInt)=>{
    return Number(outputInt);
  });
  let digit = tempArray[count];
  str = str + digit;
  phoneNumber.textContent += digit;

  //switch case for each number if yes then move on to the next one
  switch (count) {
    case 0:
      counter.textContent = "Does the second digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXXXXX";
      break;
    case 1:
      counter.textContent = "Does the third digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXXXX";
      break;
    case 2:
      counter.textContent = "Does the fourth digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXXX";
      break;
    case 3:
      counter.textContent = "Does the fifth digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXX";
      break;
    case 4:
      counter.textContent = "Does the sixth digit match your phone number?";
      phoneNumber.textContent = str + "XXXXX";
      break;
    case 5:
      counter.textContent = "Does the seventh digit match your phone number?";
      phoneNumber.textContent = str + "XXXX";
      break;
    case 6:
      counter.textContent = "Does the eighth digit match your phone number?";
      phoneNumber.textContent = str + "XXX";
      break;
    case 7:
      counter.textContent = "Does the ninth digit match your phone number?";
      phoneNumber.textContent = str + "XX";
      break;
    case 8:
      phoneNumber.textContent = str + "X";
      counter.textContent = "Does the tenth digit match your phone number?";
      break;
    case 9:
      phoneNumber.textContent = str;
  }
  count ++;

  // if gets to the last one then display and save phone number
  if (str.length === 10) {
    alert("Congrats! This is your phone number: " + str)
    document.querySelector(".yes-button").disabled = true;
  } 
}

// reset number to xxxxxxxxx
const resetButton = document.querySelector(".reset-button").addEventListener("click",baseNumber)

function baseNumber() {
  output.textContent = "0000000000";
  phoneNumber.textContent = "XXXXXXXXXX";
  str = ""
  count = 0
  document.querySelector(".yes-button").disabled = false;
}

const noButton = document.querySelector(".no-button").addEventListener("click", message);

function message() {
  alert("Try getting a different random number!!!");
}
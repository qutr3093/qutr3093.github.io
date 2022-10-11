let body = document.querySelector("div");
body.addEventListener("click", giveAlert);

function giveAlert(){
    alert("HEY SHAWTYYYYYY")
}

var button = document.querySelector("button");

button.addEventListener('click', function onClick() {
    button.style.backgroundColor = 'salmon';
  });


  const selectElement = document.querySelector('.pages');

  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = `Go to ${event.target.value}`;
  });
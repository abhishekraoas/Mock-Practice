const inputText = document.querySelector("#input");
const btn = document.querySelector("#btn");
const outputDiv = document.querySelector("#outputDiv");

function clickHandler() {
  if (inputText.value === "Tanvi") {
    outputDiv.innerText = "She is the best CEO ever!";
  } else if (inputText.value === "Tanay") {
    outputDiv.innerText = "He is our FUNNY mentor!";
  } else if (inputText.value === "Akanksha") {
    outputDiv.innerHTML = "She is our CHEERFUL Interviewer!";
  } else {
    outputDiv.innerText = "PLEASE ENTER VALID NAME...";
  }
}

btn.addEventListener("click", clickHandler);

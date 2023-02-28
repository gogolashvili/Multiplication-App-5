let card = document.querySelector("div");
let score = document.querySelector("h1");
let question = document.querySelector("h2");
let input = document.querySelector("input");
let button = document.querySelector("button");

let n1 = 1;
let n2 = 1;
n1 = Math.floor(Math.random() * 5);
n2 = Math.floor(Math.random() * 5);
question.innerHTML = "what  is   " + n1 + "   multiply  by   " + n2 + " ?";

button.disabled = false;
let scores = JSON.parse(localStorage.getItem("scores")) || 0;
score.innerHTML = "score:" + scores;
button.addEventListener("click", function () {
  location.reload();
  console.log(input.value);
  if (input.value == "") {
    button.disabled = true;
  } else if (input.value == n1 * n2) {
    scores++;
  } else if (input.value !== n1 * n2) {
    scores--;
  }
  score.innerHTML = `score: ${scores}`;
  localStorage.setItem("scores", JSON.stringify(scores));
  input.value = "";
});

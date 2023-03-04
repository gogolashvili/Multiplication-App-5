let card = document.querySelector("div");
let score = document.querySelector("h1");
let question = document.querySelector("h2");
let input = document.querySelector("input");
let button = document.querySelector("button");
let newgame = document.querySelector("h3");

let x = 0;
let y = 0;

x = Math.floor(Math.random() * 5);
y = Math.floor(Math.random() * 5);

question.innerHTML = "what  is   " + x + "   multiply  by   " + y + " ?";

button.disabled = false;

let scores = JSON.parse(localStorage.getItem("scores")) || 0;
score.innerHTML = "SCORE:" + " " + scores;

button.addEventListener("click", function () {
  location.reload();

  if (input.value == "") {
    button.disabled = true;
  } else if (input.value == x * y) {
    scores++;
  } else if (input.value !== x * y) {
    scores--;
  }

  localStorage.setItem("scores", JSON.stringify(scores));
  input.value = "";
});

newgame.addEventListener("click", function () {
  localStorage.clear();
  scores = "";
  score.textContent = scores;
});

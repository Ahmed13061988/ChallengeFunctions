"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
};
const btn = document.querySelector(".poll");

const displayResults = function (type = []) {
  if (Array.isArray(type)) {
    console.log(type);
  } else console.log(`Poll results are: ${type}`);
};

const registerNewAnswer = function () {
  let input = Number(
    prompt(`${poll.question}
    ${this.options[0]}
    ${this.options[1]}
    ${this.options[2]}
    ${this.options[3]}
    (Write option number)`)
  );
  if (input >= 0 && input <= 3 && typeof input === "number") {
    return this.answers[input]++;
  } else {
    console.log("The input is not correct");
  }
  displayResults(this.answers);
};

const registerNewAnswerBind = registerNewAnswer.bind(poll);

btn.addEventListener("click", registerNewAnswerBind);

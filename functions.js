"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
};
const btn = document.querySelector(".poll");

const registerNewAnswer = function () {
  let input = prompt(`${poll.question}
    ${poll.options[0]}
    ${poll.options[1]}
    ${poll.options[2]}
    ${poll.options[3]}
    (Write option number)`);

  let finallInput = Number(input);
  console.log(poll.answers);
  if (finallInput >= 0 && finallInput <= 3) return poll.answers[finallInput]++;
  console.log(poll.answers);
};

const registerNewAnswerFinall = registerNewAnswer.bind(poll);
registerNewAnswerFinall();

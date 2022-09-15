"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
};
const btn = document.querySelector(".poll");

const registerNewAnswer = function () {
  let input = Number(
    prompt(`${poll.question}
    ${poll.options[0]}
    ${poll.options[1]}
    ${poll.options[2]}
    ${poll.options[3]}
    (Write option number)`)
  );
  console.log(typeof input);
  if (input >= 0 && input <= 3) return poll.answers[input]++;
  else console.log("The number is not correct");
};

const registerNewAnswerBind = registerNewAnswer.bind(poll);
registerNewAnswer();
//registerNewAnswerFinall();

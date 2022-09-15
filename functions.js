"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let input = Number(
      prompt(
        `${poll.question}\n${this.options.join("\n")}
      (Write option number)`
      )
    );
    input < this.answers.length &&
      typeof input === "number" &&
      this.answers[input]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string")
      console.log(`Poll results are: ${this.answers.join(",")}`);
  },
};
const btn = document.querySelector(".poll");

btn.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 3, 2] });

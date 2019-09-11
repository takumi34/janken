const rock = document.getElementById("btn1");

const scissors = document.getElementById("btn2");

const paper = document.getElementById("btn3");

let message = document.getElementById("message");
let randomNum = Math.floor(Math.random() * 3);
let result;
let answer;

if (randomNum == 0) {
  answer = "グー";
} else if (randomNum == 1) {
  answer = "チョキ";
} else {
  answer = "パー";
}

function throwRock() {
  if (randomNum == 0) {
    result = "あいこ";
  } else if (randomNum == 1) {
    result = "勝ち";
  } else {
    result = "負け";
  }
  printResult();
}

function throwScissors() {
  if (randomNum == 0) {
    result = "負け";
  } else if (randomNum == 1) {
    result = "あいこ";
  } else {
    result = "勝ち";
  }
  printResult();
}

function throwPaper() {
  if (randomNum == 0) {
    result = "勝ち";
  } else if (randomNum == 1) {
    result = "負け";
  } else {
    result = "あいこ";
  }
  printResult();
}

function printResult() {
  if (result == "あいこ") {
    message.innerHTML =
      result + "です" + "<br>" + "相手は" + answer + "を出しました";
  } else {
    message.innerHTML =
      "あなたの" +
      result +
      "です" +
      "<br>" +
      "相手は" +
      answer +
      "を出しました";
  }
}
btn1.addEventListener("click", throwRock);

btn2.addEventListener("click", throwScissors);

btn3.addEventListener("click", throwPaper);

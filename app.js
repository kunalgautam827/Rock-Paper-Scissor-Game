let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const US = document.querySelector("#user-score");
const CS = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#00916e";
    ++userScore;
    US.innerText = userScore;
  } else {
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#a4133c";
    ++compScore;
    CS.innerText = compScore;
  }
};

const drawGame = () => {
  msg.innerText = "game was draw ";
  msg.style.backgroundColor = "#7c3a7a";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

const playgame = (userChoice) => {
  // generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});

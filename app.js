const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startGame = document.querySelector(".button");

let result = 0;
let currentTime = 60;
let timerId = null;
let hitPosition;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    console.log(randomSquare);
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 500);
}

startGame.addEventListener("click", moveMole);
startGame.addEventListener("click", startCountDown);

function startCountDown() {
    let countDownTimerId = setInterval(() => {
        currentTime--;
        timeLeft.textContent = currentTime;
    
        if (currentTime == 0) {
            clearInterval(countDownTimerId);
            clearInterval(timerId);
            alert("Game over! Your final score is" + result);
        }    
    }, 1000);
}


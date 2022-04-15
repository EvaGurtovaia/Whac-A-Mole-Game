const squares = document.querySelectorAll(".squares");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("mole");
    });
}

let startbtn = document.querySelector(".btngroup").children[0];
let stopbtn = document.querySelector(".btngroup").children[1];
let gamecontainer = document.querySelector(".gameContainer");
let gameSquare = document.querySelector(".square");

// Square Styles
let squareStatesArray = [
  `width: 70px;
    height: 70px;
    display:block;
    background-color: orange;
    `,

  `width: 70px;
    height: 70px;
    display:block;
    background-color: red;
    `,
  `width: 70px;
    height: 70px;
    display:block;
    background-color: blue;
    `,
  `width: 70px;
    height: 70px;
    display:block;
    background-color: black;
    `,
];

// Container Styles
let containerStyleArray = [
  `display: flex;
    flex-direction: row;
    border: 2px solid black;
    width: 700px;
    height: 400px;
    margin: 20px;
    justify-content:flex-end;`,

  `display: flex;
    flex-direction: row;
    border: 2px solid black;
    width: 700px;
    height: 400px;
    margin: 20px;
    align-items:flex-end;
    justify-content:flex-end;`,

  `display: flex;
    flex-direction: row;
    border: 2px solid black;
    width: 700px;
    height: 400px;
    margin: 20px;
    align-items:flex-end;
    justify-content:flex-start;`,
  `display: flex;
    flex-direction: row;
    border: 2px solid black;
    width: 700px;
    height: 400px;
    margin: 20px;
    align-items:flex-start;
    justify-content:flex-start;`,
];

let i = 0; // Index to iterate through both style arrays
let interval1; // Interval ID
let flag; // Flag to prevent overlapping of similar events and execution of opposite events

// Animate Function
function animateGame() {
  gamecontainer.style = containerStyleArray[i];
  gameSquare.style = squareStatesArray[i];
  i++;
  if (i === containerStyleArray.length) {
    i = 0;
  }
}

// start interval function
function intervalrestart() {
  flag = false;
  if (!flag) {
    interval1 = setInterval(animateGame, 400);
    flag = true;
  }

  return interval1;
}

// Ending Interval function
function intervalstop() {
  if (flag) {
    clearInterval(interval1);
    flag = false;
  }
}

startbtn.addEventListener("click", function (e) {
  intervalrestart();
});

stopbtn.addEventListener("click", function () {
  intervalstop();
});

gamecontainer.addEventListener("mouseenter", function (e) {
  intervalrestart();
});

gamecontainer.addEventListener("mouseleave", function (e) {
  intervalstop();
});

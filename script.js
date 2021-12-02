//principal = $7200
//interest charged = $40
//Owing after 1 week = $7240
//Owing after 4 weeks = $7360
//How many weeks = 9
//Interest charged = $560
function checkOne() {
  if (answerOne.value == 7200 && answerOneb.value == 40 && answerTwo.value == 7240 &&  answerThree.value == 7360 && answerFour.value == 9 && answerFive.value == 560) {
//Once the answers are correct, show next stage
      finishPuzzleOne.classList.remove('hide'); //if they are all correct show the next button
      window.scrollTo(0,document.body.scrollHeight);
      finishPuzzleOneButton.classList.add('hide');
  }
}
finishPuzzleOneButton.onclick = checkOne; //When the button is clicked, perform the above function

function movePuzzleTwo()  {//Move on to the next stage
  puzzleOne.classList.add('hide');
  puzzleTwo.classList.remove('hide');
  document.documentElement.scrollTop = 0;
}
moveToPuzzleTwo.onclick = movePuzzleTwo;
// that will move you on to next puzzle when they click button

// effective interest rate A =4.39%
// effective interest rate B =4.58%
function checkTwo() {
  if (answerSix.value == 4.39 && answerSeven.value == 4.58) {//When bothe questions are answered correctly
      puzzleTwoPartTwo.classList.remove('hide');//Show the next section
  }
}
answerSeven.onchange= checkTwo;
answerSix.onchange = checkTwo;

//Recurrence relation: 2nd from top
//Interest rate per quarter: 1.125%
//Balance after 5 quarters: $ 4336.50
//How long til annuity reaches 0: 9 quarters
//Interest earnt in 4th quarter: $74.70
//Principal reduction in 3rd quarter: $1132.56
//Final payment: 792
//How long til annuity reaches 0 is quarterly payments were $1830: 6 quarters
//Quarterly payment if annuity lasts 1 year: $2570.71

function checkTwoPartTwo() {
  if (correct.checked && answerNine.value == 1.125 && answerTen.value == 4336.50 && answerEleven.value == 9 && answerTwelve.value == 74.70 && answerThirteen.value == 1132.56 && answerFourteen.value == 792 && answerFifteen.value == 6 && answerSixteen.value == 2570.71) {
      finishPuzzleTwo.classList.remove('hide'); //if they are all correct show the next button
      window.scrollTo(0,document.body.scrollHeight);
      finishPuzzleTwoButton.classList.add('hide');
  }
}
finishPuzzleTwoButton.onclick = checkTwoPartTwo;

//Puzzle Three

function movePuzzleThree()  {//Move on to the next stage
  puzzleTwo.classList.add('hide');
  puzzleThree.classList.remove('hide');
  document.documentElement.scrollTop = 0;
}
moveToPuzzleThree.onclick = movePuzzleThree;
// that will move you on to next puzzle when they click button

//
function checkThree() {
  if (answerSeventeen.value == 2500 && answerEighteen.value == 14.7 && answerNineteen.value == 7 && answerTwenty.value == 23 && answerTwentyOne.value == 59.10) {
//Once the answers are correct, show next stage
      finishPuzzleThree.classList.remove('hide'); //if they are all correct show the next button
      window.scrollTo(0,document.body.scrollHeight);
      finishPuzzleThreeButton.classList.add('hide');
  }
}
finishPuzzleThreeButton.onclick = checkThree; //When the button is clicked, perform the above function

function movePuzzleFour() {//Move on to the next stage
  puzzleThree.classList.add('hide');
  puzzleFour.classList.remove('hide');
  document.documentElement.scrollTop = 0;
}
moveToPuzzleFour.onclick = movePuzzleFour;

//Puzzle four

//Monthly interest rate: 0.708%
//Interest paid in 2 years: $3400
//Price it needs to be sold for: $30200
function checkFour() {
  if (answerTwentyTwo.value == 0.7083 && answerTwentyThree.value == 3472 &&answerTwentyFour.value == 30416) {//When all questions are answered correctly
    window.scrollTo(0,document.body.scrollHeight);
    puzzleFourPartTwo.classList.remove('hide');//Show the next section
  }
}
answerTwentyTwo.onchange= checkFour;
answerTwentyThree.onchange = checkFour;
answerTwentyFour.onchange = checkFour;

function checkFourPartTwo() {
  if (answerTwentyFive.value == 5.43 && answerTwentySix.value == 225103.73) {
      finishPuzzleFour.classList.remove('hide'); //if they are all correct show the next button
      window.scrollTo(0,document.body.scrollHeight);
      finishPuzzleFourButton.classList.add('hide');
  }
}
finishPuzzleFourButton.onclick = checkFourPartTwo;

function movePuzzleFive() {//Move on to the next stage
  puzzleFour.classList.add('hide');
  final.classList.remove('hide');
  puzzleFourPartTwo.classList.add('hide');
  document.documentElement.scrollTop = 0;
}
moveToEnd.onclick = movePuzzleFive;

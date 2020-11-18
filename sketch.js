var girlImg, confettiImg, medalImg, scoreImg, amazedImg, celebrationImg;
var girl, confetti, medal, score, amazed;
var quotes1, questions1;
var radio, radioOutput;
var result = [];
var output, average;
var displayMessage;
var nextButton, restartButton, startButton;
function preload() {
  girlImg = loadImage("images/girl-walking.png");
  confettiImg = loadImage("images/confetti.png");
  medalImg = loadImage("images/gold-medal.png");
  scoreImg = loadImage("images/score.png");
  amazedImg = loadImage("images/amazed.png");
  celebrationImg = loadImage("images/celebration1.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // girl = createSprite(windowWidth / 2, windowHeight / 2 + 50);
  // girl.addImage(girlImg);
  // girl.scale = 3;

  startButton = createButton("Start");
  startButton.position(windowWidth / 2, windowHeight / 2);
  startButton.style("background-color", "lightgreen");
  startButton.style("font-size", "50px");
  nextButton = createButton("Next");
  nextButton.position(windowWidth / 2, windowHeight - (windowHeight * 8) / 90);
  quotes1 = new Quotes();
  quotes1.displayQuotes();

  questions1 = new Questions();

  output = createElement("h1");
  displayMessage = createElement("h2");
}

function draw() {
  background("white");

  nextButton.mousePressed(nextButtonClick);
  startButton.mousePressed(startButtonClick);
  displayResult();
  drawSprites();
}
function radioRender() {
  radio = createRadio();
  radio.size(100, 100);
  radio.style("font-size", "40px");
  radio.style("padding", "90px");
  radio.option(" yes  ", 5);
  radio.option(" no  ", 1);
  radio.option("  maybe  ", 2);
  radio.option("  sometimes  ", 3);
  radio.style("width", "600px");
  radio.position(windowWidth / 3, windowHeight / 2 + 200);
  textAlign(CENTER);
  fill(255, 0, 0);
}
function startButtonClick() {
  startButton.hide();
  questions1.displayQuestions();
  radioRender();
}
function nextButtonClick() {
  radio.hide();
  radioOutput = radio.selected();
  console.log(radioOutput);
  radioRender();
  if (
    radioOutput == 1 ||
    radioOutput == 2 ||
    radioOutput == 3 ||
    radioOutput == 4 ||
    radioOutput == 5
  ) {
    var num = parseInt(radioOutput);
    result.push(num);
    console.log(result);
    questions1.displayQuestions();
  }
  if (result.length === 3) {
    questions1.show1.hide();
    radio.hide();
    nextButton.hide();
    var total = 0;
    for (var i = 0; i < result.length; i++) {
      total += result[i];
    }
    average = +(total / result.length);
    // output.html(average);
    //output.position(200, 200);
    result = [];
  }
}

function displayResult() {
  if (average <= 3) {
    displayMessage.html("you should stay happy!");
    displayMessage.position(windowWidth / 3, 100);
    console.log(3);
    image(celebrationImg, 20, 20, windowWidth - 50, windowHeight - 50);
    radio.hide();
    questions1.show1.hide();
  } else if (average <= 6 && average > 3) {
    displayMessage.html("you are great!!!");
    displayMessage.position(windowWidth / 3, 100);
    console.log(3);
    image(celebrationImg, 200, 200);
  } else if (average > 6 && average < 10) {
    displayMessage.html("stay happy alwaysss!!!");
    displayMessage.position(windowWidth / 3, 100);
    console.log(3);
    image(celebrationImg, 200, 200, 400, 400);
  }
}

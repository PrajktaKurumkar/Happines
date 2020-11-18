class Questions {
  constructor() {
    this.show1 = createElement("h2");
  }
  displayQuestions() {
    var questions = [
      "Do you share your feelings with your friends or relatives?",
      "do you exercise daily?",
      "do you know your strenghths?",
      "I focus on my present than my past and future.",
    ];
    var rand = Math.round(random(0, questions.length - 1));
    this.show1.style("font-size", "30px");
    this.show1.style("color", "black");
    this.show1.html(questions[rand]);
    this.show1.position(windowWidth / 2 - 200, windowHeight / 2 - 100);
  }
}

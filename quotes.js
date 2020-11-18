class Quotes {
  constructor() {
    this.show = createElement("h1");
  }
  displayQuotes() {
    var allQuotes = [
      "                           give yourself time                                           ",
      "                          happiness=reality/expectation                             ",
      "happiness is the meaning and the purpose of life, the whole aim and end of human existence",
      "the happier you are, the less sleep you require to function in everyday life. sadness increases the urge to sleep more.",
      "what you think, you become. what you feel, attract. what you imagine, you create.",
      "if you have the power to make someone happy, do it. The world is needs more of that",
      "If you want to live a happy life, tie it to a goal, not to people or things",
      "Happiness is not out there for us to find. The reason that it's not out there is that it's inside us.",
      "The happiness of your life depends upon the quality of your thoughts",
      "The only keeper of your happiness is you. Stop giving people power to control your smile, your worth and your attitude",
      "Happiness is not the absence of problems, it's the ability to deal with them",
      "Compassion is one of the few things we can practice that will bring immediate and long-term happiness to our lives",
      "Happiness is the only thing that multiplies when you share it",
    ];
    var rand = Math.round(random(0, allQuotes.length - 1));
    this.show.style("font-size", "30px");
    this.show.style("color", "black");
    this.show.html(allQuotes[rand]);
    this.show.position(windowWidth / 4, windowHeight / 7);
  }
}

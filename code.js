/*
* Variables
*/

var currentQuestion = -1;

/*
* Functions
*/

function hide(id)
{
  document.getElementById(id).style.display = "none";
}

function show(id)
{
  document.getElementById(id).style.display = "";
}

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function cutsceneStart()
{
  await sleep(1000);
  document.getElementById("menu_story_text").innerHTML = "This is the story of how I died. I mean how I developed your online thing.";
  await sleep(6000);
  document.getElementById("menu_story_text").innerHTML = "Obviously you're expecting a treasure hunt. Guess what!";
  await sleep(3000);
  document.getElementById("menu_story_text_big").innerHTML = "YOU'RE WRONG!";
  document.getElementById("menu_story_text").innerHTML = "";
  await sleep(3000);
  document.getElementById("menu_story_text_big").innerHTML = "";
  document.getElementById("menu_story_text").innerHTML = "Here's the story, I didn't know what to do for your birthday. Then I got a genius idea! Why don't I hack your computer and put it on there to save the trouble of putting it on github. Also at the same time. I'd be really funny. (At the time of writing I haven't hacked your computer yet. I'll most likely send a file with my own reverse shell to run on your computer. My own, because metasploit payloads would get detected easily). Then ask you questions about your life.";
  show("menu_story_finish");
}

function start()
{
  hide("menu_main");
  show("menu_story");

  cutsceneStart();
}

function hideAllOptions()
{
  hide("question_option0");
  hide("question_option1");
  hide("question_option2");
  hide("question_option3");
  hide("question_option4");
}

function showOption(id, text)
{
  show("question_option" + id);
  document.getElementById("question_option" + id).innerHTML = text;
}

function setQuestionTitle(text)
{
  document.getElementById("question_questionTitle").innerHTML = text;
}

function chooseOption(id)
{

  if (currentQuestion===0)
  {

    if (id===0)
    {
      alert("Nope...");
    }

    if (id===1)
    {
      alert("Wrong! 9 + 10 = 21!");
    }

    if (id===2)
    {
      alert("Wrong! 9 + 10 = 19!");
    }

    if (id===3)
    {
      alert("Correct!");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===1)
  {

    if (id===0)
    {
      alert("... Why? Just Why?!!!");
    }

    if (id===1)
    {
      alert("Ehhh... Nope.");
    }

    if (id===2)
    {
      alert("I bet $100 that you'll be 18 in 3 years. I'm going to hold you to that.");
    }

    if (id===3)
    {
      alert("(*15 is the thousandth number. The full number is 15,000). Always read the small text");
    }

    if (id===4)
    {
      alert("Duh");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===2)
  {

    if (id===0)
    {
      alert("This is like the millionth time. CHESTNUTS DON'T GO TO WAR!!!!! (Correct)");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1)
    {
      alert("Wrong! Chestnuts do.");
    }

    if (id===2)
    {
      alert("....................................... (No Comment)");
      alert("Correct!");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===3)
    {
      alert("Only Kinda.");
    }

  }

  if (currentQuestion===3)
  {

    if (id===0)
    {
      alert("... I'm really questioning if you are an Alien or just insane.");

    }

    if (id===1)
    {
      alert("SWITCH your question. (Heh heh. I'm not funny).");
    }

    if (id===2)
    {
      alert("I might some on your system.");
    }

    if (id===3)
    {
      alert("TOO BAD! WALUIGI TIME!");
    }

    showQuestion(currentQuestion + 1);
    return;

  }

  if (currentQuestion===4)
  {

    if (id===3)
    {
      alert("Sorry, you took so long I feel asleep. (Correct!)");
      showQuestion(currentQuestion + 1);
      return;
    }else
    {
      alert("No. Try again.");
    }

  }

  if (currentQuestion===5)
  {

    if (id===0)
    {
      alert("That's \"Fine By Me\".");
    }

    if (id===1)
    {
      alert("HOW DARE YOU STEAL MY FAVORITE COLOR!!!!! I WILL HUNT YOU DOWN FOREVER!!!!");
    }

    if (id===2)
    {
      alert("(Monty Python Quote).");
    }

    if (id===3)
    {
      alert("Your favorite color is always the color of your toothbrush.");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===6)
  {

    if (id===0)
    {
      alert("You got you and I mixed up.");
    }

    if (id===1)
    {
      alert("That's me");
    }

    if (id===2)
    {
      alert("The tiny ones scare you the most.");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===3)
    {
      alert("Really... You're afraid of a Godzilla plush!!! * laughing * (Get's crushed by Godzilla)");
    }

  }

  if (currentQuestion===7)
  {

    if (id===0)
    {
      alert("Nope... That's today. (As of writing)");
    }

    if (id===1)
    {
      alert("Wrong... Did you really do that much yesterday? (As I'm writing this I'm acting as if it is the 25th.)");
    }

    if (id===2)
    {
      alert("Two problems. 1. There is no 32th. 2. It'd be the 32nd not 32th.");
    }

    if (id===3)
    {
      alert("Correct. It's never.");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===8)
  {

    if (id===0)
    {
      alert("You used Microsoft XNA Game Studio with C#.");
    }

    if (id===1)
    {
      alert("You took a college course on this.");
    }

    if (id===2)
    {
      alert("Computercraft Programming");
    }

    if (id===3)
    {
      alert("YouthDigital Modding Course.");
    }

    if (id===4)
    {
      alert("Correct!");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===9)
  {

    if (id===0)
    {
      alert("Correct. You must fix this.");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1)
    {
      alert("Lies! Tell them the truth!");
      hide("question_option1");
    }

    if (id===2)
    {
      alert("Maybe is not an answer. Try again.");
      hide("question_option2");
    }

  }

  if (currentQuestion===10)
  {

    if (id===0)
    {
      alert("Correct!");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1)
    {
      alert("Sure. Sure. I believe you.");
    }

    if (id===2)
    {
      alert("TOO BAD! WALUIGI TIME!");
      hide("question_option2");
    }

  }

  if (currentQuestion===11)
  {
    alert("It really depends.");
    showQuestion(currentQuestion + 1);
    return;
  }

  if (currentQuestion===12)
  {

    if (id===0)
    {
      alert("Now don't lie, we all know who really won.");
    }

    if (id===1)
    {
      alert("You see I can see the future. (And you never believed that I could.)");
    }

    showQuestion(currentQuestion + 1);
    return;

  }

  if (currentQuestion===13)
  {

    if (id===0)
    {
      alert("BG");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1)
    {
      alert("GG");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===2)
    {
      alert("I really don't care. You can't go to the next question if you don't.")
      hide("question_option2")
    }

  }

  if (currentQuestion===14)
  {

    if (id===0)
    {
      alert("... Good");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1)
    {
      alert("I can wait.");
    }

  }

  if (currentQuestion===15)
  {

    if (id===0)
    {
      alert("(laughing) Why would the 4th of July... BE ON JULY 4TH. THAT'S SO ILLOGICAL!!");
    }

    if (id===1)
    {
      alert("Uh. Duh. Why would the 4th of July be on July 4th. Obviously it's on April 1st.");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===16)
  {

    if (id===0)
    {
      alert("\"Barack Hussein That\"? I didn't know his last name of \"That\".");
    }

    if (id===1)
    {
      alert("\"Barack Hussein Barack\". Okay....");
    }

    if (id===2)
    {
      alert("\"Barack Hussein Hussein\". I KNEW IT!");
    }

    if (id===3)
    {
      alert("None of the above! Correct!");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===17)
  {

    if (id===0)
    {
      alert("Good to know.");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1)
    {
      alert("Wow... You flopped the science test.");
    }

  }

  if (currentQuestion===18)
  {

    if (id!==3)
    {
      alert("Yep...");
      showQuestion(currentQuestion + 1);
      return;
    }else {
      alert("Ehh.... Ask Hope.");
    }

  }

  if (currentQuestion===19)
  {

    if (id===2)
    {
      alert("Correct!!!");
      showQuestion(currentQuestion + 1);
      return;
    }else
    {
      alert("Nope. It was Hypno.");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===20)
  {

    if (id===0)
    {
      alert("Yep... (No Response)");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1) {
      alert("Invert it.");
    }

    if (id===2) {
      alert("Same quote, two times in one quiz!");
    }

  }

  if (currentQuestion===21)
  {

    if (id===0)
    {
      alert("Yes. Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1) {
      alert("Close. Pluto is not a planet.");
    }

    if (id===2) {
      alert("Nope. Try again.");
    }

  }

  if (currentQuestion===22)
  {

    if (id===0)
    {
      alert("Of course. You have no idea what I'm talking about.");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===1) {
      alert("It's not Iron Man.");
    }

    if (id===2) {
      alert("No........................ Well maybe.");
    }

  }

  if (currentQuestion===23)
  {

    if (id===0)
    {
      alert("Yes you do.");
      hide("question_option0");
    }

    if (id===1) {
      alert("There you go.");
      showQuestion(currentQuestion + 1);
      return;
    }

    if (id===2) {
      alert("Okay.");
      showQuestion(currentQuestion + 1);
      return;
    }

  }

  if (currentQuestion===24)
  {

    if (id===0)
    {
      alert("Aw. Thanks.");
      alert("Thanks for taking my test. Click 'Ok' to see your score.");
      alert("You got an F minus, Sorry.");
      alert("Sorry wait, wrong Noah. That's the one in our small group.");
      alert("Here we got A+!");
      alert("Your present is in the Asanna or Asana. Whatever. The giant machine in the spa room.");
    }

    if (id===1) {
      alert("Aw..... Wait. You can get your present until you say Yes.");
    }

  }

}

function showQuestion(id)
{
  hideAllOptions();
  currentQuestion = id;

  if (id===0)
  {
    setQuestionTitle("What's 9 + 10");
    showOption(0, "10");
    showOption(1, "19");
    showOption(2, "21");
    showOption(3, "1,900");

  }

  if (id===1)
  {
    setQuestionTitle("How old are you?");
    showOption(0, "10");
    showOption(1, "11");
    showOption(2, "18");
    showOption(3, "15*");
    showOption(4, "574,522,315");

  }

  if (id===2)
  {
    setQuestionTitle("What go to war?");
    showOption(0, "Chestnuts");
    showOption(1, "Toy Soliders");
    showOption(2, "Anyone but you");
    showOption(3, "Humans");

  }

  if (id===3)
  {
    setQuestionTitle("What would you like?");
    showOption(0, "A Barbie");
    showOption(1, "Nintendo Switch");
    showOption(2, "Any hacks off your system");
    showOption(3, "Pizza");

  }

  if (id===4)
  {
    setQuestionTitle("Solve 5x / 88.5 = 5 + 2 + 2 / 55");
    showOption(0, "98745.5555");
    showOption(1, "3654.9898");
    showOption(2, "3.1415");
    showOption(3, "7228.636");

  }

  if (id===5)
  {
    setQuestionTitle("What's your favorite color?");
    showOption(0, "Red");
    showOption(1, "Blue");
    showOption(2, "No! Yellow");
    showOption(3, "What ever color is my (your) toothbrush is");

  }

  if (id===6)
  {
    setQuestionTitle("What's animal scares you the most?");
    showOption(0, "Cats");
    showOption(1, "Dogs");
    showOption(2, "Birds");
    showOption(3, "Godzilla(s)");

  }

  if (id===7)
  {
    setQuestionTitle("When was the last time you really pushed yourself to your physical limits?");
    showOption(0, "The 13th");
    showOption(1, "The 24th");
    showOption(2, "The 32th");
    showOption(3, "Never");

  }

  if (id===8)
  {
    setQuestionTitle("What programming language of these have you NOT used?");
    showOption(0, "C#");
    showOption(1, "Python");
    showOption(2, "Lua");
    showOption(3, "Java");
    showOption(4, "Javascript");

  }

  if (id===9)
  {
    setQuestionTitle("Do you still suck on your fingers?");
    showOption(0, "Yes");
    showOption(1, "No");
    showOption(2, "Maybe.....");

  }

  if (id===10)
  {
    setQuestionTitle("Do you wake up at 6:00 AM on saturdays to play video games?");
    showOption(0, "Yes");
    showOption(1, "No");
    showOption(2, "I'd rather not say.");

  }

  if (id===11)
  {
    setQuestionTitle("Do you trust me?");
    showOption(0, "Yes");
    showOption(1, "No");

  }

  if (id===12)
  {
    setQuestionTitle("Play rock paper scissors and tell me the outcome");
    showOption(0, "I won!");
    showOption(1, "I lost.");

  }

  if (id===13)
  {
    setQuestionTitle("Play a game of Chess and tell me the outcome");
    showOption(0, "I won!");
    showOption(1, "I lost.");
    showOption(2, "Nah!");

  }

  if (id===14)
  {
    setQuestionTitle("Contemplate Reality");
    showOption(0, "Done");
    showOption(1, "I really don't have the time for this");

  }

  if (id===15)
  {
    setQuestionTitle("When's the 4th of July?");
    showOption(0, "July 4th");
    showOption(1, "April 1st");

  }

  if (id===16)
  {
    setQuestionTitle("What's Obama's last name?");
    showOption(0, "That");
    showOption(1, "Barack");
    showOption(2, "Hussein");
    showOption(3, "None of the above");

  }

  if (id===17)
  {
    setQuestionTitle("Is the mitochondria the power house of the cell?");
    showOption(0, "As I have heard.");
    showOption(1, "No");

  }

  if (id===18)
  {
    setQuestionTitle("Where'd Noah go?");
    showOption(0, "Noah's Bed");
    showOption(1, "Petting The Cat");
    showOption(2, "The Bathroom");
    showOption(3, "Working");

  }

  if (id===19)
  {
    setQuestionTitle("What's the 97th Pokemon?");
    showOption(0, "Bellsprout");
    showOption(1, "Mew");
    showOption(2, "Hypno");
    showOption(3, "Mr. Mime");

  }

  if (id===20)
  {
    setQuestionTitle("What color is their hands now!");
    showOption(0, "Red");
    showOption(1, "Blue");
    showOption(2, "No Yellow");

  }

  if (id===21)
  {
    setQuestionTitle("How many planets are in our solar system?");
    showOption(0, "8");
    showOption(1, "9");
    showOption(2, "10");

  }

  if (id===22)
  {
    setQuestionTitle("Who is it?");
    showOption(0, "I don't know");
    showOption(1, "Iron Man");
    showOption(2, "Bill Gates");

  }

  if (id===23)
  {
    setQuestionTitle("Why do you need to know?");
    showOption(0, "I don't know");
    showOption(1, "I want to know");
    showOption(2, "I guess I don't really need to know");

  }

  if (id===24)
  {
    setQuestionTitle("Did you enjoy this?");
    showOption(0, "Yes");
    showOption(1, "NO!");

  }

}

function finishCutscene()
{
  hide("menu_story");
  show("question");

  showQuestion(0);

}

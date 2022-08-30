//create the quiz questions, an array allows us to loop through each object
const questions = [
    {
        question: "QUESTION 1: Setting the webpage to fit whichever device is viewing the page, you need to set...?",
        choices: [ 
            "A. max-width to 100%, min-height to auto",
            "B. min-width and max-height to webkit-fill-available",
            "C. viewport to device=device-width initial-scale=1.0"
        ],
        answer: "C. viewport to device=device-width initial-scale=1.0"
    },
    {
        question: "QUESTION 2: Which set of elements are considered 'semantic' elements?",
        choices: [
            "A. section, header, main, footer",
            "B. !DOCTYPE, html, head, body",
            "C. href, src, alt, url() "
        ],
        answer: "A. section, header, main, footer"
    },
    {
        question: "QUESTION 3: If your style.css was in a folder labelled assets at the same level as the index.html file, how would you link the stylesheet?",
        choices: [
            "A. link rel='stylesheet' href='./assets/style.css'",
            "B. link rel='stylesheet' href='/assets/style.css'",
            "C. link rel='stylesheet' href='assets/style.css'"
        ],
        answer: "C. link rel='stylesheet' href='assets/style.css'"
    },
    {
        question: "QUESTION 4: Name this element selector!  #class {color:red;}",
        choices: [
            "A. class",
            "B. tag name",
            "C. id"
        ],
        answer: "C. id"
    },
    {
        question: "QUESTION 5: Which variable cannot be redeclared?",
        choices: [
            "A. const b = function ",
            "B. let b = question5.answer",
            "C. var b = Answer"
        ],
        answer: "B. let b = question5.answer"
    },
    {
        question: "QUESTION 6: What does CSS stand for?",
        choices: [
            "A. Concatinating script styling",
            "B. Creative Style Sheet",
            "C. Cascading Style Sheets"
        ],
        answer: "C. Cascading Style Sheets"
    },
    {
        question: "QUESTION 7: Which of these comparison operators is incorrect?",
        choices: [
            "A. != not equal value but equal type",
            "B. === equal value and equal type",
            "C. !== not"
        ],
        answer:  "A. != not equal value but equal type"
    },
    {
        question: "QUESTION 8: How would you change the same h1 element that is red on a desktop to blue on a mobile phone with a 500px width?",
        choices: [
            "A. h1 {color:red;} body {max-width:500px;} h1 {color:blue;}",
            "B. h1 {color:red;} @media only screen and (max-width: 500px) { h1 {color:blue;} }",
            "C. h1 {min-width:1028px; color:red; max-width:1028px; color:blue;}"
        ],
        answer: "B. h1 {color:red;} @media only screen and (max-width: 500px) { h1 {color:blue;} }"
    },
    {
        question: "QUESTION 9: Which example would remove the default blue color and underlined text of an: a tag link?",
        choices: [
            "A. any-link: {text-decoration: none;color:black;}",
            "B. a {show:none; color:black;}",
            "C. a::all {text-decoration: none;color:inherit;}"
        ],
        answer: "A. any-link: {text-decoration: none;color:black;}"

    },
    {
        question: "FINAL QUESTION: If these 10 questions were the contents of an array (which they are...) called questions[], in this exact order, what position would this question be in?",
        choices: [
            "A.questions[10]",
            "B.questions[9]",
            "C.questions[array.end]"
        ],
        answer: "B. questions[9]"
    }
];

//create functions to show and remove 
document.querySelector('#start').addEventListener('click', showRules);
document.querySelector('.quit').addEventListener('click', quitQuiz);


function showRules() {
    document.querySelector('#rules-card').style.display = 'block';
}

function quitQuiz() {
    let confirm = prompt('Are you sure you want to quit? click OK to proceed');
        if (confirm.includes('')) {
        return document.getElementById('rules-card').style.display = 'none'      
}; 
}


//these variables are required globally
var count;
var time;
var currentQuestion;
var score = 0;
var point;

document.querySelector(".begin").addEventListener("click", beginQuiz);

function beginQuiz() {


  document.querySelector('#rules-card').style.display = 'none';
  document.querySelector('.quiz-card').style.display = 'block';
  document.querySelector('#answer').style.display = 'none';
    
  
  //assign 0 to currentQuestion when start button is clicked, then show the current question on the page
  currentQuestion = 0;
  showQuestion();

  //set total time depending on number of questions
  time = questions.length * 6 - 1;

  //executes function "startTimer" every 1000ms to update time and show on page
  count = setInterval(startTimer, 1000);

  //invoke showTime here to ensure time appears on the page as soon as the start button is clicked, not after 1 second
  showTime();
}

//reduce time by 1 and show new value, if time runs out then end quiz
function startTimer() {
  time--;
  showTime();
  if (time < 1) {
    quizOver();
  }
}

//show time on page
const clock = document.querySelector("#time");
function showTime() {
  clock.textContent = time;
}

//show the question and answer choices for the current question
function showQuestion() {
  
  document.querySelector('#question').textContent = questions[currentQuestion]['question'];
  document.querySelector('#choice0').textContent = questions[currentQuestion]['choices'][0];
  document.querySelector('#choice1').textContent = questions[currentQuestion]['choices'][1];
  document.querySelector('#choice2').textContent = questions[currentQuestion]['choices'][2];
  document.querySelector('#answer').textContent = questions[currentQuestion]['answer'];
  


//behaviour when an answer button is clicked: click event bubbles up to div with id "quiz-choices"
//eventObject.target identifies the specific button element that was clicked on
document.querySelector("#choice0").addEventListener("click", checkAnswer);

document.querySelector("#choice1").addEventListener("click", checkAnswer);

document.querySelector("#choice2").addEventListener("click", checkAnswer);

//Compare the text content of the choice button with the answer to the current question
}


//if answer is incorrect, penalise time
function checkAnswer(event) {
  console.log(score);
  if (questions[currentQuestion].answer === event.target.textContent) {
    score++;
  }else if (time >= 10) {
      time = time - 10;
      showTime();
      
      
    } else {
      //if time is less than 10, show time as 0 and end quiz
      //time is set to zero in this case to avoid showing a negative number in cases where a wrong answer is submitted with < 10 seconds left on the timer
      time = 0;
      showTime();
      quizOver();

      
    }
    score = point;
    console.log(score);
    currentQuestion++;
  }



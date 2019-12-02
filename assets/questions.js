// Declaring my questions as a variable

var questionSet = [
    {
        title: "What is the name of Jon Snow's direwolf?",
        choices: ["Grey Wind", "Nymeria", "Ghost", "Summer"],
        answer: "Ghost"
    },
    {
        title: "Who is Robert Baratheon referring to when he tells Ned Stark, 'In my dreams, I kill him every night'",
        choices: ["Rhaegar Targaryen", "Stannis Baratheon", "Joffrey Baratheon", "Jaime Lannister"],
        answer: "Rhaegar Targaryen"
    },
    {
        title: "Who chopped off Jaime Lannister's hand?",
        choices: ["Roose Bolton", "Locke", "jon Snow", "Brienne of Tarth"],
        answer: "Locke"
    },
    {
        title: "What is the name of Rob Stark's wife?",
        choices: ["Arya", "Talisa", "Daenerys", "Catelyn"],
        answer: "Talisa"
    },
    {
        title: "What is the name of Ned Stark's Sword?",
        choices: ["Fire", "Ice", "Lady", "Dark Sister"],
        answer: "Ice"
    },
    {
        title: "How many knights were in King Robert's King's Guard?",
        choices: ["6", "7", "8", "9"],
        answer: "7"
    },
    {
        title: "What is the name of House Tyrell's castle?",
        choices: ["King's Landing", "Highgarden", "Castle Black", "Winterfell"],
        answer: "Highgarden"
    },
    {
        title: "Which house has a sigil as a silver trout?",
        choices: ["Stark", "Tully", "Tyrell", "Targaryen"],
        answer: "Tully"
    },
    {
        title: "What is the nickname given to Brynden Tully?",
        choices: ["Kingslayer", "Knight of Flowers", "Blackfish", "The Mad King"],
        answer: "Blackfish"
    },
    {
        title: "Who was the hand of the king before Ned Stark?",
        choices: ["Jon Arryn", "Tyrion Lannister", "Stannis Baratheon", "Theon Greyjoy"],
        answer: "Jon Arryn"
    }
]

// Grabbing title element and setting it as a variable
var pageTitle = document.querySelector("title");
// Grabbing my question container and setting it as a variable
var questionContainer = document.querySelector(".questionContainer");
// Grabbing my image and setting it as a variable
var homeScreenImage = document.querySelector("#homeScreenImage");
// Grabbing my h2 tag (countdownTimer) and setting it as a variable
var startTimer = document.querySelector("#startTimer");

var timeRemaining = document.querySelector("#timeRemaining");

var quizTimer = 75;

var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var answerResult = document.querySelector("#answerResult");

var quizEndContainer = document.querySelector(".quizEndContainer");
var quizEndScore = document.querySelector("#quizEndScore");
var quizEnd = document.querySelector("#quizEnd");
var userForm = document.querySelector("#userForm");


// Start game by clicking button, begin countdown timer
// Page should change style, and begin quiz.  This should also start a timer
// An answer will chime a sound, and display correct or incorrect
// Then move onto next question
// Incorrect answers will result in a time penalty
// Running out of time should end the game
// At game's end, it should display a form to type your name.  The score is time remaining.
// It will store your name in localStorage
// The other button should populate a table, with all results displayed from form


// Onclick event on button.  When clicked, run function.
// Function will change setAttribute of body, to look more appropriate for a quiz
// It should also start a countdown timer
// At the end of timer, the first question should display.
// Display questions by a function using setAttribute and textContent or innerHTML
// Use eventListeners or onClick events on answers?  Or even if else?
// If answer is incorrect, run function
// Function will set timer to timer -= 10 (seconds), then display next question 
// If answer is correct, run function
// Function will calculate a score, then display next question.  Store points in a var
// At the end of game, run function to display a form.
// In this form, the var where the score is stored will display
// The user can enter name, store in the localStorage


function startQuiz() {
    // Removing picture and buttons
    homeScreenImage.removeAttribute("src", "assets/images/GoTHomeImage.jpeg");
    document.querySelector("#playGame").remove();
    document.querySelector("#highScores").remove();
    // Run next function
    countdownTimer();
}

function countdownTimer() {  // Timer that counts down before quiz starts
    var countdownSeconds = 5;
    var timerInterval = setInterval(function() {
        startTimer.textContent = "Quiz starts in " + countdownSeconds; 
        countdownSeconds--;
        if (countdownSeconds === 0) {
            clearInterval(timerInterval);
            // Run new function
            quizTime();
            displayQuiz();
            startTimer.textContent = "";
        }
    }, 1000);
}


function quizTime() {
    var timerInterval = setInterval(function() {
        timeRemaining.textContent = "Time Remaining: " + quizTimer;
        quizTimer--;
        if (quizTimer === 0) {
            gameOver();
            clearInterval(timerInterval);
        }
        else if (quizTimer < 0) {
            quizTimer = 0;
            gameOver();
            clearInterval(timerInterval);
        }
    }, 1000);
}

var currentQuestion = 0;

function displayQuiz() {
    var q = questionSet[currentQuestion];
    var a = q.answer;
    question.textContent = q.title;
    for (var i = 0; i < q.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.className = "answerBtn";
        answerBtn.setAttribute("style", "display: block");
        answerBtn.textContent = q.choices[i];
        answers.appendChild(answerBtn);
    }
    answers.addEventListener("click", function checkAnswer(e) {
        console.log(quizTimer);
        var userChoice = e.target.textContent;
        if (userChoice === a) {  
            answerResult.textContent = "Correct!"
        }
        else {   
            quizTimer -= 10;
            answerResult.textContent = "Wrong!";
        }
        console.log(quizTimer);
        currentQuestion += 1;
        answers.innerHTML = ""; // This is to remove old answers
        displayQuiz();
        answers.removeEventListener("click" , checkAnswer);
    })
}

function removeQuiz() {
    answers.remove();
    question.remove();
    answerResult.remove();
}

function gameOver() {
    removeQuiz();
    quizEnd.textContent = "Game Over";
    quizEndScore.textContent = "Your Score: 0";
    userEntry();
}

function userEntry() {
    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userForm.appendChild(userInput);
}

// Fix quizTimer to not go below 0
// When quizTimer is equal to 0, run function
// function ends game, creates a form, and pulls the int from quizTimer as score

// Next steps..
// Run function for quiz timer
// Run function to display questions and answers
// An incorrect answer will remove 10 seconds from timer, then display next question
// A correct answer will display next question

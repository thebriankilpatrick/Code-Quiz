// Declaring my questions in an array
// GAME OF THRONESSSSS

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

// Grabbing my div where the quizTimer will be displayed
var timeRemaining = document.querySelector("#timeRemaining");

// Main timer that runs during quiz
var quizTimer = 75;

// Grabbing my divs where the quiz questions and answers will be displayed
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var answerResult = document.querySelector("#answerResult");

// Grabbing my divs where the end of quiz form and score will be displayed
var quizEndContainer = document.querySelector(".quizEndContainer");
var quizEndScore = document.querySelector("#quizEndScore");
var quizEnd = document.querySelector("#quizEnd");
var userForm = document.querySelector("#userForm");


function startQuiz() {
    // Removing picture and buttons
    homeScreenImage.removeAttribute("src", "assets/images/GoTHomeImage.jpeg");
    document.querySelector("#playGame").remove();
    document.querySelector("#highScores").remove();
    // Run quiz countdown timer function.  5 seconds until quiz starts.
    countdownTimer();
}

function countdownTimer() {  // Timer that counts down before quiz starts
    var countdownSeconds = 5;
    var timerInterval = setInterval(function() {
        startTimer.textContent = "Quiz starts in " + countdownSeconds; 
        countdownSeconds--;
        console.log(countdownSeconds);
        console.log(countdownSeconds === 0);
        if (countdownSeconds === 0) {
            // Run new function
            quizTime();  // Main quiz timer
            displayQuiz();  // Main function.  This is where the questions and answers populate
            startTimer.textContent = "";
            clearInterval(timerInterval);
        }
    }, 1000);
}


function quizTime() {   // The main quiz timer.  You have 75 seconds to answer the questions
    console.log("starting quiz timer");
    var timerInterval = setInterval(function() {
        timeRemaining.textContent = "Time Remaining: " + quizTimer;
        quizTimer--;
        console.log("Quiz Timer", quizTimer);
        console.log("Current Question:", currentQuestion);
        console.log("Q Length", questionSet.length);
        if (quizTimer === 0) {
            gameOver();  // If you run out of time, run this quiz-ending function
            clearInterval(timerInterval);
        }
        else if (quizTimer < 0) {
            // If you answer a question incorrectly that brings the timer below 0
            // Set the timer to 0, and then run the quiz-ending function
            quizTimer = 0;
            gameOver(); 
            clearInterval(timerInterval);
        }
        else if (currentQuestion === questionSet.length) {
            // If the index for the questionSet array is at length, stop the timer
            console.log("clearing timer");
            clearTimeout(timerInterval);
            currentQuestion = 0;
        }
    }, 1000);
}

// Storing this as index and setting it to 0
var currentQuestion = 0;

function displayQuiz() {  // The main function that displays the questions and answers

    var q = questionSet[currentQuestion];
    var a = q.answer;
    console.log("questionContainer", question);
    question.textContent = q.title;
    for (var i = 0; i < q.choices.length; i++) {
        // Creating a button for each answer in the appropriate question
        var answerBtn = document.createElement("button");
        answerBtn.className = "answerBtn";
        answerBtn.setAttribute("style", "display: block");
        answerBtn.textContent = q.choices[i];
        answers.appendChild(answerBtn);
    }
    answers.addEventListener("click", function checkAnswer(e) {
        // Adding the click event listener on the newly created buttons
        var userChoice = e.target.textContent;
        if (userChoice === a) {  
            answerResult.textContent = "Correct!"
        }
        else {   
            quizTimer -= 10;
            answerResult.textContent = "Wrong!";
        }
        currentQuestion += 1;
        answers.innerHTML = ""; // This is to remove old answers
        if (currentQuestion === questionSet.length) {
            // Runs this function to end the quiz if all the questions are answered before time runs out
            gameWin();
        }
        else {
            displayQuiz();
        }
        // This removes the event listener, so when it applies again, it is the only listener applied to the buttons
        answers.removeEventListener("click" , checkAnswer);
    })
}

// This function runs if the user answers all the questions before the timer runs out
function gameWin() {   
    removeQuiz();
    quizEnd.textContent = "Game Over";
    quizEndScore.textContent = "Your score: " + quizTimer;
    userEntry();
}

// This function removes all quiz content
function removeQuiz() {
    answers.innerHTML = "";
    question.innerHTML = "";
    answerResult.innerHTML = "";
    // currentQuestion = 0;
}

// This function is run when the timer runs to 0.  You lose, and your score is 0, noob
function gameOver() {
    removeQuiz();
    quizEnd.textContent = "Game Over";
    quizEndScore.textContent = "Your Score: 0";
    userEntry();
}

var index = 0;

function setIndex() {  // This function will allow for each new submit to create a new "user" in the localStorage to store the string
    if (localStorage.getItem("index") === null) {
        localStorage.setItem("index", 0);
    }
    else {
        var newValue = parseInt(localStorage.getItem("index")) + 1;
        localStorage.setItem("index", newValue);
    }
}

function userEntry() {
    // Creating entry field and buttons
    var userInput = document.createElement("input");
    var userSubmit = document.createElement("button");
    var playAgain = document.createElement("button"); 
    var homePage = document.createElement("button");
    var submitted = document.createElement("p");
    submitted.className = "submittedText";
    userSubmit.className = "userSubmit";
    userInput.setAttribute("type", "text");
    userInput.placeholder = "Name";
    userSubmit.textContent = "Submit Score";
    playAgain.textContent = "Play Again"; 
    playAgain.className = "playAgain";
    homePage.textContent = "Home";
    homePage.className = "homePage";
    userForm.appendChild(userInput);
    userForm.appendChild(userSubmit);
    quizEndContainer.appendChild(submitted);
    quizEndContainer.appendChild(playAgain);
    quizEndContainer.appendChild(homePage);
    console.log(submitted);

    userSubmit.addEventListener("click", function submitScore(event) {
        event.preventDefault();
        var userInfo = {  
            name: " " + userInput.value,
            score: " " + quizTimer,
        };  
        setIndex();
        window.localStorage.setItem("user " + (localStorage.getItem("index")), JSON.stringify(userInfo));
        submitted.textContent = "Score submitted!"
    })

    playAgain.addEventListener("click", function replay() {  
        quizTimer = 75;
        countdownTimer();
        quizEnd.innerHTML = "";
        homePage.remove();
        submitted.remove();
        userInput.remove();
        userSubmit.remove();
        quizEndScore.innerHTML = "";
        playAgain.remove();
        timeRemaining.innerHTML = "";
    })

    homePage.addEventListener("click", function reloadPage() {
        location.reload();
    })
}

function viewScores() {
    homeScreenImage.removeAttribute("src", "assets/images/GoTHomeImage.jpeg");
    document.querySelector("#playGame").remove();
    document.querySelector("#highScores").remove();
    var scoreList = document.createElement("ol");
    scoreList.className = "scoreList";
    questionContainer.append(scoreList);
    for (var i = 0; i < localStorage.length; i++) {
        var grabItem = localStorage.getItem("user " + i);  // JSON.parse grabs [object Object]
        if (grabItem === null) {                          // var name = localStorage.getItem("user " + i).name???
            return;
        }
        var listItem = document.createElement("li");
        listItem.className = "listItem";
        var parseItem = JSON.parse(grabItem);
        listItem.textContent = parseItem.name + ":" + parseItem.score;
        scoreList.append(listItem);
        console.log(listItem);
    }
}


// Next steps..
// Get the list to generate in order of score from highest to lowest
// Also, see if you can get it to generate as a string, not as an object
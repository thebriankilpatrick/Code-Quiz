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


// Start game by clicking button, begin countdown timer
// Page should change style, and begin quiz.  This should also start a timer
// An answer will chime a sound, and display correct or incorrect
// Then move onto next question
// Points should be calculated based on how fast the question is answered (correctly)
// Incorrect answers will result in a time penalty
// Running out of time should end the game
// At game's end, it should display a form to type your name
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
// The user can enter name, store is the localStorage


function playGame() {
    
}
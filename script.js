const flashcards = document.querySelectorAll('.flashcard');
let score = 0;
const ow = document.getElementById('pp');

flashcards.forEach(card => {
card.addEventListener('click', () => {
card.classList.toggle('active');
});
});


const out = "";





const correctAnswers = [
["seven", "7"],
["three", "3"],
["ten", "10"],
["five", "5"],
["eight", "8"],
["one", "1"],
["nine", "9"],
["six", "6"],
["four", "4"],
["two", "2"],
];
//let score = 0;



document.addEventListener("DOMContentLoaded", function () {
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkAnswers);


//if (score < 5) {
//submitButton.href = "goodresults.html"
//}
//});

//const ow = document.getElementById('pp');
function checkAnswers() {
let userScore = 0;
for (let i = 1; i <= 10; i++) {
const userAnswer = document.getElementById(`answer-input-${i}`).value.toLowerCase();
const correctAnswerOptions = correctAnswers[i - 1];


if (correctAnswerOptions.includes(userAnswer)) {
userScore++;
}


//ow.textContent += varr;
}


score = userScore;


sessionStorage.setItem("temp", score);

stupid(score);

document.getElementById("score").textContent = score;
stupid(sammy);

}


function stupid(b) {
   localStorage.setItem('tracked', score);
}


//var s = localStorage.getItem('scoree');
//document.getElementById('poop') = s;














function myFunction() {
alert("This is the correct way to do js ☺️ 😊🥰👉👈");
}


function startFlashing() {


}


function startQuizzing() {
}






function submit() {
username = document.getElementById('username');
email = document.getElementById('email');
password = document.getElementById('password');
alert('Username:', username.value, 'Email:', email.value, 'Password:', password.value);
return false;
}




})

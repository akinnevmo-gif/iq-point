// LOGIN SYSTEM
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account Created!");
    window.location.href = "dashboard.html";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === localStorage.getItem("userEmail") &&
        password === localStorage.getItem("userPassword")) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}

// SUBJECT QUESTIONS
const subjects = {
    math: [
        {question:"10 + 5 = ?", options:["12","15","20"], answer:"15"},
        {question:"Square root of 16?", options:["3","4","6"], answer:"4"}
    ],
    english: [
        {question:"Synonym of Big?", options:["Small","Large","Tiny"], answer:"Large"},
        {question:"Opposite of Fast?", options:["Slow","Quick","Speed"], answer:"Slow"}
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;

function startQuiz(subject) {
    currentQuestions = subjects[subject];
    currentIndex = 0;
    score = 0;
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = option;
        div.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(div);
    });
}

function checkAnswer(selected) {
    if (selected === currentQuestions[currentIndex].answer) {
        score++;
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        loadQuestion();
        resetTimer();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = "Your Score: " + score;
    saveScore(score);
}

function startTimer() {
    timeLeft = 20;
    timerInterval = setInterval(() => {
        document.getElementById("timer").innerText = "Time Left: " + timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    startTimer();
}

// LEADERBOARD
function saveScore(score) {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(score);
    localStorage.setItem("scores", JSON.stringify(scores));
    loadLeaderboard();
}

function loadLeaderboard() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.sort((a,b)=>b-a);

    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = scores.map(s => `<p>Score: ${s}</p>`).join("");
}

loadLeaderboard();

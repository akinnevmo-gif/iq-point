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

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}

// QUIZ SYSTEM
const questions = [
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "12"],
        answer: "8"
    },
    {
        question: "Capital of Ghana?",
        options: ["Accra", "Lagos", "Abuja", "Kumasi"],
        answer: "Accra"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (!document.getElementById("question")) return;

    const q = questions[currentQuestion];
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
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Your Score: " + score;
    }
}

loadQuestion();

const questions = [
    {
        question: "Who is prime minister of india?",
        choices: ["Shri Narendra Mod", " Mikhail Mishustin", "Justin Trudeau"],
        correctAnswer: "Shri Narendra Mod"
    },
    {
        question: "On whose recommendation the President dissolves the Lok Sabha??",
        choices: ["Election Commission", "Cabinet", "Rajya Sabha"],
        correctAnswer: "Cabinet"
    }
    
];

const thresholdScore = 1; 

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const choiceLabel = document.createElement("label");
        choiceLabel.innerHTML = `
            <input type="radio" name="choice" value="${choice}">
            ${choice}
        `;
        choicesElement.appendChild(choiceLabel);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    
    if (selectedChoice) {
        const selectedAnswer = selectedChoice.value;
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    choicesElement.innerHTML = "";
    questionElement.textContent = "";
    submitButton.style.display = "none";

    if (score >= thresholdScore) {
        resultElement.textContent = "Congratulations! You're a winner!";
        resultElement.classList.add("winner");
    } else {
        resultElement.textContent = "Sorry, you didn't win this time.";
        resultElement.classList.add("loser");
    }
}

displayQuestion();

submitButton.addEventListener("click", checkAnswer);
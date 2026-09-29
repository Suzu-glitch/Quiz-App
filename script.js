const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { id: "a", text: "München", correct: false },
      { id: "b", text: "Berlin", correct: true },
      { id: "c", text: "Hamburg", correct: false },
      { id: "d", text: "Hannover", correct: false },
    ],
  },

  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      { id: "a", text: "Lyon", correct: false },
      { id: "b", text: "Marseille", correct: false },
      { id: "c", text: "Paris", correct: true },
      { id: "d", text: "Nizza", correct: false },
    ],
  },
];

const displayQuestionEl = document.getElementById("display-question");

let currentQuestionIndex = 0;
let currentAnswerButtons = [];

const nextButtonEl = document.getElementById("next-button");
const solutionButtonEl = document.getElementById("solution-button");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
}

function checkAnswer(selectedAnswer, selectedButtonEl) {
  if (selectedAnswer.correct) {
    selectedButtonEl.classList.add("correct");
    alert("Richtig");
  } else {
    selectedButtonEl.classList.add("incorrect");
    alert("Falsch");
  }
}

function renderQuestion(currentQuestion) {
  const questionEl = document.createElement("div");
  questionEl.id = currentQuestion.id;

  const questionTitleEl = document.createElement("h1");
  questionTitleEl.classList.add("question");
  questionTitleEl.textContent = currentQuestion.question;

  const answersEl = document.createElement("div");
  answersEl.classList.add("answers");

  currentAnswerButtons = [];

  shuffleArray(currentQuestion.answers);

  currentQuestion.answers.forEach((answer) => {
    const answerButtonEl = document.createElement("button");
    answerButtonEl.classList.add("answer");
    answerButtonEl.textContent = answer.text;

    answerButtonEl.addEventListener("click", () => {
      checkAnswer(answer, answerButtonEl);
    });

    answersEl.appendChild(answerButtonEl);
    currentAnswerButtons.push(answerButtonEl);
  });

  questionEl.appendChild(questionTitleEl);
  questionEl.appendChild(answersEl);

  displayQuestionEl.appendChild(questionEl);
}

renderQuestion(questions[currentQuestionIndex]);

function showNextQuestion() {
  const shownQuestion = questions[currentQuestionIndex];
  document.getElementById(String(shownQuestion.id)).remove();

  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex === questions.length) {
    currentQuestionIndex = 0;
  }

  renderQuestion(questions[currentQuestionIndex]);
}

nextButtonEl.addEventListener("click", () => {
  showNextQuestion();
});

function showSolution() {
  const currentQuestion = questions[currentQuestionIndex];

  currentQuestion.answers.forEach((answer, index) => {
    if (answer.correct) {
      checkAnswer(answer, currentAnswerButtons[index]);
    }
  });
}

solutionButtonEl.addEventListener("click", () => {
  showSolution();
});

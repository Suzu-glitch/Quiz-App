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

const nextButtonEl = document.getElementById("next-button");

function renderQuestion(currentQuestion) {
  displayQuestionEl.innerHTML = ""; /* NEU: alte Frage entfernen */

  const questionTitleEl = document.createElement("h1");
  questionTitleEl.classList.add("question");
  questionTitleEl.textContent = currentQuestion.question;

  const answersEl = document.createElement("div");
  answersEl.classList.add("answers");

  currentQuestion.answers.forEach((answer) => {
    const answerButtonEl = document.createElement("button");
    answerButtonEl.classList.add("answer");
    answerButtonEl.textContent = answer.text;
    answersEl.appendChild(answerButtonEl);
  });

  displayQuestionEl.appendChild(questionTitleEl);
  displayQuestionEl.appendChild(answersEl);
}

renderQuestion(questions[currentQuestionIndex]);

function showNextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex === questions.length) {
    currentQuestionIndex = 0;
  }

  renderQuestion(questions[currentQuestionIndex]);
}

nextButtonEl.addEventListener("click", () => {
  showNextQuestion();
});

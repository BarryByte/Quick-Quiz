let questions = [
  {
    question: "Which HTML tag is used to define an inline style?",
    choice1: "&lt;script&gt;",
    choice2: "&lt;css&gt;",
    choice3: "&lt;style&gt;",
    choice4: "&lt;span&gt;",
    answer: 3,
  },
  {
    question: "Which property is used to change the text color in CSS?",
    choice1: "text-color",
    choice2: "font-color",
    choice3: "text-style",
    choice4: "color",
    answer: 4,
  },
  {
    question: "Which of the following is the correct way to comment in HTML?",
    choice1: "// Comment",
    choice2: "&lt;!-- Comment --&gt;",
    choice3: "/* Comment */",
    choice4: "&lt;! Comment&gt;",
    answer: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEle = document.querySelector(".queBox");
let scoreEle = document.querySelector(".score");
let questionNumber = document.querySelector(".questionNumber");
let bar = document.querySelector(".bar");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const queText = document.querySelector(".queText");
  queText.innerHTML = currentQuestion.question;

  const options = document.querySelector(".options");

  options.innerHTML = `
    <div class="option">
        <div class="optionLetter">A</div>
        <div class="optionText">${currentQuestion.choice1}</div>
    </div>
    <div class="option">
        <div class="optionLetter">B</div>
        <div class="optionText">${currentQuestion.choice2}</div>
    </div>
    <div class="option">
        <div class="optionLetter">C</div>
        <div class="optionText">${currentQuestion.choice3}</div>
    </div>
    <div class="option">
        <div class="optionLetter">D</div>
        <div class="optionText">${currentQuestion.choice4}</div>
    </div>
        `;

  const optionElements = document.querySelectorAll(".option");
  optionElements.forEach((option, index) => {
    option.addEventListener("click", function () {
      currentQuestionIndex++;
      bar.style.width = `${currentQuestionIndex * (100 / questions.length)}%`;
      if (index + 1 == currentQuestion.answer) {
        score += 10;
        scoreEle.innerText = `${score}`;
        option.classList.add("correct");
      } else {
        option.classList.add("wrong");
      }
      setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
          questionNumber.innerText = `${currentQuestionIndex + 1}/${
            questions.length
          }`;
        } else {
          // document.querySelector(".finScore").innerHTML = `<div class="finalScore">Quiz Over! Your score is ${score}.</div>`;
          localStorage.setItem("finalScore", score);
          window.location.href = "end.html";
        }
      }, 2000);
    });
  });
}
displayQuestion();

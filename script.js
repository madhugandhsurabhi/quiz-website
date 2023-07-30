const questions = [

    {

        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark",correct: false},
            {text: "Blue Whale",correct: false},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},

        ]
    },
    {

        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari",correct: false},
            {text: "Gobi",correct: false},
            {text: "Sahara",correct: false},
            {text: "Antarctica",correct: false},

        ]
    },

    {

    question: "Which is the smallest continene in the world?",
    answers: [
        {text: "Asia",correct: false},
        {text: "Australia",correct: false},
        {text: "Arctic",correct: false},
        {text: "Africa",correct: false},

    ]

    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("buttom");
        button.innerHTML = answer.text;
        button.classList.add("byn");
        answerButtons.appendChild(button);
        if(answer.correct){
        button.dataset.correct = answer.correct;
        }

        button.addEventListener("click",selectAnswer);
    });
}

 function resetState() {

    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButton.firstChild);
    }
    
 }

 

   startQuiz();
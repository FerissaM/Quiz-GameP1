  /*----- constants -----*/
  const questions = [
    {
        question: "How many siblings does Killua Zoldyck have?",
        options: [
            { option: "3", correct: false },      
            { option: "4", correct: true  },      
            { option: "2", correct: false },      
            { option: "5", correct: false },      
        ]
    },
    {
        question: "Why does Kurapika hate spiders?",
        options: [
            { option: "because they are creepy",                    correct: false },      
            { option: "because he's weird",                         correct: false },      
            { option: "because it reminds him of Phantom Troupe",   correct: true },      
            { option: "I don't know",                               correct: false },      
        ]
    },
    {
        question: "What number is Hisoka's badge in the Hunter Exam?",
        options: [
            { option: "#44",    correct: true  },      
            { option: "99",     correct: false },      
            { option: "404",    correct: false },      
            { option: "103",    correct: false },      
        ]
    },
    {
        question: "What Nen does Illumi have?",
        options: [
            { option: "Transmutation",      correct: false },      
            { option: "Emuter",             correct: false },      
            { option: "Specialization",     correct: false },      
            { option: "Manipulation",       correct: true  },      
        ]
    },
    {
        question: "Who's the head of the Phantom Troupe?",
        options: [
            { option: "Ging Freecss",       correct: false },      
            { option: "Chrollo Lucifer",    correct: true  },      
            { option: "Franklin Bordeaux",  correct: false },      
            { option: "Feitan",             correct: false },      
        ]
    },
    {
        question: "What is Kurapika's codename in the Zodiac?",
        options: [
            { option: "Rat",        correct: true  },      
            { option: "Mouse",      correct: false },      
            { option: "Rabbit",     correct: false },      
            { option: "Dog",        correct: false },      
        ]
    },
    {
        question: "Who punched Ging Freecss on the face?",
        options: [
            { option: "Gon Freecss",    correct: false },      
            { option: "Killua Zoldyck", correct: false },      
            { option: "Leorio",         correct: true  },      
            { option: "Netero",         correct: false },      
        ]
    },
    {
        question: "Leorio wants to be a...",
        options: [
            { option: "Politician", correct: false },      
            { option: "Lawyer",     correct: false },      
            { option: "Doctor",     correct: true  },      
            { option: "Singer",     correct: false },      
        ]
    },
    {
        question: "What was the name Illumi used while taking the Hunter Exam?",
        options: [
            { option: "Hanzo",           correct: false },      
            { option: "Pokkie",          correct: false },      
            { option: "Ponta",           correct: false },      
            { option: "Gittarackur",     correct: true  },      
        ]
    }
];

  /*----- state variables -----*/
  let currentQuestionIndex = 0;
  let score = 0;
  
  /*----- cached elements  -----*/
  const questionElement = document.getElementById('questions');
  const optionsElement = document.getElementById('options');
  const playAgainButtonn = document.getElementById('play-again');

  /*----- event listeners -----*/
//   document.getElementById('options').addEventListener('click');
//   playAgainBtn.addEventListener('click');

  /*----- functions -----*/

function init() {
    const playAgainButton = document.getElementById('play-again');
    playAgainButton.style.display = 'none'; // hide the play again button initially

    startQuiz();
}

function startQuiz() {
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = option.option;
        button.onclick = function() {
            checkAnswer(index);
            disableButtons(optionsElement.querySelectorAll('.btn')); // Disable all buttons after an answer is chosen
        };
        optionsElement.appendChild(button);
    });
}

function checkAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];
    const buttons = document.querySelectorAll('.btn');
    
    if (selectedOption.correct) {
        buttons[optionIndex].classList.add('correct');
        score++;
    } else {
        buttons[optionIndex].classList.add('incorrect');
        for (let i = 0; i < currentQuestion.options.length; i++) {
            if (currentQuestion.options[i].correct) {
                buttons[i].classList.add('correct');
                break;
            }
        }
    }

    currentQuestionIndex++;
    setTimeout(displayNextQuestion, 1500);
}

function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const playAgainButton = document.getElementById('play-again');
    
    questionElement.textContent = `Congrats! Your score is ${score} out of ${questions.length}`;
    optionsElement.innerHTML = '';
    playAgainButton.style.display = 'block'; // show the play again button
    
    playAgainButton.removeEventListener('click', resetQuiz); // remove existing event listener
    playAgainButton.addEventListener('click', resetQuiz); // add new one
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
}

function disableButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true; // disable the buttons
    });
}

// start the quiz
init();
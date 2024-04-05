document.addEventListener('DOMContentLoaded', function() {
  /*----- constants -----*/
  const questions = [
    {
        question: "How many siblings does Killua Zoldyck have?",
        image: "https://i.imgur.com/aIpBaYP.png",
        options: [
            { option: "3", correct: false },      
            { option: "4", correct: true  },      
            { option: "2", correct: false },      
            { option: "5", correct: false },      
        ]
    },
    {
        question: "Why does Kurapika hate spiders?",
        image: "https://i.imgur.com/YbAtSsy.png",
        options: [
            { option: "because they are creepy",                    correct: false },      
            { option: "because he's weird",                         correct: false },      
            { option: "because it reminds him of Phantom Troupe",   correct: true },      
            { option: "I don't know",                               correct: false },      
        ]
    },
    {
        question: "What number is Hisoka's badge in the Hunter Exam?",
        image: "https://imgur.com/tzuPc0T.png",
        options: [
            { option: "#44",    correct: true  },      
            { option: "99",     correct: false },      
            { option: "404",    correct: false },      
            { option: "103",    correct: false },      
        ]
    },
    {
        question: "What Nen does Illumi have?",
        image: "https://i.imgur.com/XhAiyAG.png",
        options: [
            { option: "Transmutation",      correct: false },      
            { option: "Emuter",             correct: false },      
            { option: "Specialization",     correct: false },      
            { option: "Manipulation",       correct: true  },      
        ]
    },
    {
        question: "Who's the head of the Phantom Troupe?",
        image: "https://i.imgur.com/HxpKdbl.png",
        options: [
            { option: "Ging Freecss",       correct: false },      
            { option: "Chrollo Lucifer",    correct: true  },      
            { option: "Franklin Bordeaux",  correct: false },      
            { option: "Feitan",             correct: false },      
        ]
    },
    {
        question: "What is Kurapika's codename in the Zodiac?",
        image: "https://i.imgur.com/QhfoUC5.png",
        options: [
            { option: "Rat",        correct: true  },      
            { option: "Mouse",      correct: false },      
            { option: "Rabbit",     correct: false },      
            { option: "Dog",        correct: false },      
        ]
    },
    {
        question: "Who punched Ging Freecss on the face?",
        image:"https://i.imgur.com/tHtQgQE.png",
        options: [
            { option: "Gon Freecss",    correct: false },      
            { option: "Killua Zoldyck", correct: false },      
            { option: "Leorio",         correct: true  },      
            { option: "Netero",         correct: false },      
        ]
    },
    {
        question: "Leorio wants to be a...",
        image: "https://i.imgur.com/5Wd2Pb6.png",
        options: [
            { option: "Politician", correct: false },      
            { option: "Lawyer",     correct: false },      
            { option: "Doctor",     correct: true  },      
            { option: "Singer",     correct: false },      
        ]
    },
    {
        question: "What was the name Illumi used while taking the Hunter Exam?",
        image: "https://i.imgur.com/dxtMjkd.png",
        options: [
            { option: "Hanzo",           correct: false },      
            { option: "Pokkie",          correct: false },      
            { option: "Ponta",           correct: false },      
            { option: "Gittarackur",     correct: true  },      
        ]
    },
    {
        question: "Where is Gon's birthplace?",
        image: "https://imgur.com/fOjKMQp.png",
        options: [
            { option: "Greed Island",   correct: false },
            { option: "Whale Island",   correct: true },
            { option: "Meteor City",    correct: false },
            { option: "Yorknew City",   correct: false },
        ]
    },
    {
        question: "What is Tonpa's examinee number in the 287th Hunter Exam?",
        image: "https://imgur.com/5JgB4cv.png",
        options: [
            { option: "16",   correct: true },
            { option: "10",   correct: false },
            { option: "14",   correct: false },
            { option: "28",   correct: false },
        ]
    },
    {
        question: "Who is the only person that passed the 288th Hunter Exam?",
        image: "https://imgur.com/FwR2lAn.png",
        options: [
            { option: "Amori",   correct: false },
            { option: "Tonpa",   correct: false },
            { option: "Killua",  correct: true  },
            { option: "Ponzu",   correct: false },
        ]
    },
    {
        question: "Who is the author of 'Hunter x Hunter'?",
        image: "https://imgur.com/ngQcORd.png",
        options: [
            { option: "Eiichiro Oda",        correct: false },
            { option: "Hirohiko Araki",      correct: false },
            { option: "Toriyama Akira",      correct: false },
            { option: "Togashi Yoshihiro",   correct: true },
        ]
    },
    {
        question: "What is the name of the technique that Gon learns from Wing?",
        image: "https://imgur.com/96N5WVr.png",
        options: [
            { option: "Jajanken",       correct: true  },
            { option: "Ryu",            correct: false },
            { option: "Emperor Time",   correct: false },
            { option: "Chain Jail",     correct: false },
        ]
    },
    {
        question: "What is the name of Isaac Netero's son?",
        image: "https://imgur.com/bhtxlHm.png",
        options: [
            { option: "Beyond",   correct: true  },
            { option: "Ponzu",    correct: false },
            { option: "Beans",    correct: false },
            { option: "Alluka",   correct: false },
        ]
    },
    {
        question: "Who has the power to grant any kind of wish?",
        image: "https://imgur.com/mmEoKBv.png",
        options: [
            { option: "Milluki Zoldyck",    correct: false },
            { option: "Gon Freecss",        correct: false },
            { option: "Alluka Zoldyck",     correct: true  },
            { option: "Silva Zoldyck",      correct: false },
        ]
    },
    {
        question: "Why did Gon become a hunter?",
        image: "https://imgur.com/fOjKMQp.png",
        options: [
            { option: "To prove himself to the world",   correct: false },
            { option: "To find his father",              correct: true  },
            { option: "To find his destiny",             correct: false },
            { option: "To find himself",                 correct: false },
        ]
    },
    {
        question: "Who is the Chairman of the Selection Committee of the Hunter exam?",
        image: "https://imgur.com/RZtcdQO.png",
        options: [
            { option: "Pariston Hill",      correct: false },
            { option: "Ging Freecss",       correct: false },
            { option: "Isaac Netero",       correct: true  },
            { option: "Botobai Gigante",    correct: false },
        ]
    },
    {
        question: "How heavy is the fourth section of the Testing Gate in front of the Zoldyck Estate?",
        image: "https://imgur.com/xNt2fjY.png",
        options: [
            { option: "32 tons",   correct: true },
            { option: "40 tons",   correct: false },
            { option: "64 tons",   correct: false },
            { option: "37 tons",   correct: false },
        ]
    },
    {
        question: "How old is Biscuit Kreuger?",
        image: "https://imgur.com/j9amAD1.png",
        options: [
            { option: "57 years old",   correct: true  },
            { option: "60 years old",   correct: false },
            { option: "27 years old",   correct: false },
            { option: "13 years old",   correct: false },
        ]
    },
];

  /*----- state variables -----*/
  let currentQuestionIndex = 0;
  let score = 0;
  
  /*----- cached elements  -----*/
  const startGameButton = document.getElementById('start-game');
  const titleElement = document.getElementById('title');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const playAgainButton = document.getElementById('play-again');

  /*----- functions -----*/
  function init() {
    const titleElement = document.getElementById('title');
    const startGameButton = document.getElementById('start-game');

    // Log elements to console to verify selection
    console.log(titleElement);
    console.log(startGameButton);

    // Add event listener to start game button
    startGameButton.addEventListener('click', startQuiz);

    // Display title and start game button
    titleElement.style.display = 'block';
    startGameButton.style.display = 'block';

    // Hide question, options, and play-again button initially
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const playAgainButton = document.getElementById('play-again');
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    playAgainButton.style.display = 'none';
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[randomIndex]] = [questions[randomIndex], questions[i]];
    }

     // Slice the shuffled array to contain only the first 10 questions
    questions.splice(10);
}

function startQuiz() {
    const startGameButton = document.getElementById('start-game');
    startGameButton.style.display = 'none';
    const titleElement = document.querySelector('h1');
    titleElement.style.display = 'none'; // to hide the title when game starts
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    shuffleQuestions();
    displayQuestion();
    questionElement.style.display = 'block'; // show the question
    optionsElement.style.display = 'block'; // show the options
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const questionImageElement = document.getElementById('question-image');
    const optionsElement = document.getElementById('options');
    questionElement.textContent = currentQuestion.question;
    questionImageElement.src = currentQuestion.image; // set the image src

    questionImageElement.style.display = 'block';


    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = option.option;
        button.onclick = function() {
            checkAnswer(index);
            disableButtons(optionsElement.querySelectorAll('.btn')); // disable all buttons after an answer is chosen
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
    const titleElement = document.querySelector('h1');
    titleElement.style.display = 'block'; // show title when game resets
    const playAgainButton = document.getElementById('play-again');
    playAgainButton.style.display = 'none'; // hide the play again button

    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(); // shuffle the questions array again
    startQuiz(); 
}

function disableButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true; // disable the buttons
    });
}

// start the quiz
init();

});

  /*----- constants -----*/
  const questions = [
    {
        question: "How many siblings does Killua Zoldyck have?"
        answers = [
            {option: "3"       correct: false },      
            {option: "4"       correct: true  },      
            {option: "2"       correct: false },      
            {option: '5'       correct: false },      
        ]
    },
    {
        question: "Why does Kurapika hate spiders?"
        answers = [
            {option: "because they are creepy"                        correct: false },      
            {option: "because he's weird"                             correct: false },      
            {option: "because it reminds him of Phantom Troupe"       correct: true  },      
            {option: "I don't know"                                   correct: false },      
        ]
    },
    {
        question: "What number is Hisoka's badge in the Hunter Exam?"
        answers = [
            {option: "#44"       correct: true  },      
            {option: "99"        correct: false },      
            {option: "404"       correct: false },      
            {option: "103"       correct: false },      
        ]
    },
    {
        question: "What Nen does Illumi have?"
        answers = [
            {option: "Transmutation"        correct: false },      
            {option: "Emuter"               correct: false },      
            {option: "Specialization"       correct: false },      
            {option: "Manipulation"         correct: true  },      
        ]
    },
    {
        question: "Who's the head of the Phantom Troupe?"
        answers = [
            {option: "Ging Freecss"         correct: false },      
            {option: "Chrollo Lucifer"      correct: true  },      
            {option: "Franklin Bordeaux"    correct: false },      
            {option: "Feitan"               correct: false },      
        ]
    },
    {
        question: "What is Kurapika's codename in the Zodiac?"
        answers = [
            {option: "Rat"          correct: true  },      
            {option: "Mouse"        correct: false },      
            {option: "Rabbit"       correct: false },      
            {option: "Dog"          correct: false },      
        ]
    },
    {
        question: "Who punched Ging Freecss on the face?"
        answers = [
            {option: "Gon Freecss"          correct: false },      
            {option: "Killua Zoldyck"       correct: false },      
            {option: "Leorio"               correct: true  },      
            {option: "Netero"               correct: false },      
        ]
    },
    {
        question: "Leorio wants to be a..."
        answers = [
            {option: "Politician"       correct: false },      
            {option: "Lawyer"           correct: false },      
            {option: "Doctor"           correct: true  },      
            {option: "Singer"           correct: false },      
        ]
    },
    {
        question: "What was the name Illumi used while taking the Hunter Exam?"
        answers = [
            {option: "Hanzo"           correct: false },      
            {option: "Pokkie"          correct: false },      
            {option: "Ponta"           correct: false },      
            {option: "Gittarackur"     correct: true  },      
        ]
    }
  ]

  /*----- state variables -----*/
  let optionButtons;
  let score;

  /*----- cached elements  -----*/
  const questionsEl = document.getElementById('questions');
  const optionButtonsEl = document.getElementById('option-buttons');

  /*----- event listeners -----*/


  /*----- functions -----*/
  init();

  function init () {

  };

  function render();
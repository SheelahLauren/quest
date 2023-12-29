// A list of questions with possible answers.
let questions = [
    {
        question: "Which HTML tag is used to define a table row?",
        answers: [
            {text: "tr", correct: true},
            {text: "td", correct: false},
            {text: "table", correct: false},
            {text: "th", correct: false}
        ],
        explanation: "tr tag is used in HTML to define a table row."
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        answers: [
            {text: "ul", correct: true},
            {text: "ol", correct: false},
            {text: "li", correct: false},
            {text: "dl", correct: false}
        ],
        explanation: "<ul> tag is used to create an unordered list in HTML."
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Creative Style Sheets", correct: false},
            {text: "Computer Style Sheets", correct: false},
            {text: "Colorful Style Sheets", correct: false}
        ],
        explanation: "CSS stands for Cascading Style Sheets used for styling the presentation of web pages."
    },
    {
        question: "In JavaScript, what method is used to add elements to the end of an array?",
        answers: [
            {text: "push()", correct: true},
            {text: "append()", correct: false},
            {text: "addToEnd()", correct: false},
            {text: "insertEnd()", correct: false}
        ],
        explanation: "The 'push()' method is used in JavaScript to add elements to the end of an array."
    },
      {
        question: "What does the 'flex-direction' property in CSS do?",
        answers: [
            {text: "Defines the direction of flex items in a flex container", correct: true},
            {text: "Sets the background color of an element", correct: false},
            {text: "Adjusts the text alignment within an element", correct: false},
            {text: "Specifies the font size of text content", correct: false}
        ],
        explanation: "'flex-direction' property in CSS defines the direction of flex items in a flex container."
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: [
            {text: "var", correct: false},
            {text: "let", correct: true},
            {text: "const", correct: false},
            {text: "Both let and const", correct: false}
        ],
        explanation: "Variables in JavaScript can be declared using 'let', 'var', or 'const' keywords."
    },
    {
        question: "Which HTML attribute is used to specify an alternate text for an image?",
        answers: [
            {text: "alt", correct: true},
            {text: "title", correct: false},
            {text: "src", correct: false},
            {text: "link", correct: false}
        ],
        explanation: "'alt' attribute in HTML is used to specify an alternate text for an image."
    },
    {
        question: "What is the correct syntax for commenting in CSS?",
        answers: [
            {text: "/* This is a comment */", correct: true},
            {text: "!-- This is a comment --", correct: false},
            {text: "// This is a comment", correct: false},
            {text: "# This is a comment", correct: false}
        ],
        explanation: "'/* This is a comment */' is the correct syntax for comments in CSS."
    },
    {
        question: "What does the 'addEventListener' method do in JavaScript?",
        answers: [
            {text: "Adds an event handler to an HTML element", correct: true},
            {text: "Modifies the HTML structure", correct: false},
            {text: "Creates a new HTML element", correct: false},
            {text: "Changes the CSS styling of an element", correct: false}
        ],
        explanation: "'addEventListener' method in JavaScript adds an event handler to an HTML element."
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text: "color", correct: true},
            {text: "text-color", correct: false},
            {text: "font-color", correct: false},
            {text: "change-color", correct: false}
        ],
        explanation: "The 'color' property in CSS is used to change the text color of an element."
    },
    {
        question: "JavaScript is a case-sensitive language.",
        answers: [
            {text: "True", correct: true},
            {text: "False", correct: false},
        ],
        explanation: "JavaScript is indeed a case-sensitive language, meaning variables, functions, and other identifiers are distinguished by case."
    },
    {
        question: "The 'typeof' operator in JavaScript returns a string indicating the type of a variable or expression.",
        answers: [
            {text: "True", correct: true},
            {text: "False", correct: false},
        ],
        explanation: "The 'typeof' operator in JavaScript indeed returns a string indicating the type of a variable or expression."
    },
    {
        question: "JavaScript is a compiled language.",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true},
        ],
        explanation: "JavaScript is an interpreted language. It is not compiled before execution."
    },
    {
        question: "JavaScript has built-in methods for performing asynchronous operations.",
        answers: [
            {text: "True", correct: true},
            {text: "False", correct: false},
        ],
        explanation: "JavaScript provides built-in methods like 'setTimeout' and 'fetch' to perform asynchronous operations."
    },
    {
        question: "In JavaScript, 'let' allows variable hoisting.",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true},
        ],
        explanation: "'let' in JavaScript does not allow variable hoisting, unlike 'var'. Variables declared with 'let' have block scope."
    },
    {
    question: "The 'typeof' operator in JavaScript returns a string indicating the type of a variable or expression.",
    answers: [
        {text: "True", correct: true},
        {text: "False", correct: false},
    ],
    explanation: "The 'typeof' operator in JavaScript indeed returns a string indicating the type of a variable or expression."
}
];

// Verses
let verses = [
    "The first computer bug was actually a real bug—a moth trapped in a relay of the Harvard Mark II computer in 1947.",
    "The world's first computer programmer was Ada Lovelace, who wrote an algorithm for Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.",
    "The term 'debugging' was coined by Grace Hopper when she removed a moth from the computer, hence 'debugging' a program.",
    "JavaScript was created by Brendan Eich in 10 days in 1995 and was initially named 'Mocha' before being renamed 'LiveScript' and eventually 'JavaScript'.",
    "The world's first high-level programming language was Fortran (short for Formula Translation) developed in the 1950s by IBM.",
    "Python is named after Monty Python's Flying Circus, not the snake. Its creator, Guido van Rossum, was a fan of the comedy show.",
    "The first computer virus was created in the early 1970s by Bob Thomas. It was an experimental self-replicating program called the 'Creeper' virus.",
    "The 'Hello, World!' program, traditionally used to introduce beginners to programming, was first used in the book 'The C Programming Language' by Brian Kernighan and Dennis Ritchie.",
    "The most popular programming language in 2022 was Python, known for its simplicity and versatility.",
    "The longest recorded time spent typing continuously without a break is 50 hours and 30 minutes by Stella Pajunas in 2008, setting a Guinness World Record.",
    "A group of programmers who write malware or harmful software are sometimes referred to as 'black hat hackers', whereas 'white hat hackers' are ethical hackers who use their skills for good.",
    "The first computer game, 'Spacewar!', was developed in 1962 by Steve Russell and was played on a PDP-1 computer.",
    "The '404' error code in web browsers stems from an actual room number at CERN, Room 404, which housed the World Wide Web project in the early 1990s.",
    "The world's first computer mouse was invented by Douglas Engelbart in the 1960s and was made of wood.",
    "The QWERTY keyboard layout, commonly used today, was designed in the 1870s for typewriters and is still the standard layout for most keyboards.",
    "The term 'algorithm' is named after Muhammad ibn Musa al-Khwarizmi, a Persian mathematician and astronomer, considered the 'father of algebra'."
];

// Get the elements for each ID of the question box, options, and next button.
const welcomeTextElement = document.getElementById("welcome-text");
const questionElement = document.getElementById("question-text");
const optionsButtons = document.getElementById("options-buttons");
const nextButton = document.getElementById("next");
let explanation = document.getElementById("explanation");
const questionTimerDuration = 60; // in seconds
let questionTimer = document.getElementById("timer");

// Keeps track of the question while we can go next and the score.
var currentQuestionIndex = 0;
var score = 0;

// Shuffle the order of the questions.
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayRandomVerse() {
    const index = Math.floor(Math.random() * verses.length);
    const verseElement = document.getElementById("verse");
    verseElement.innerHTML = verses[index];
}

// Starts the quiz.
function startQuiz() {
    welcomeTextElement.style.display = "block";
    displayRandomVerse();
    setInterval(displayRandomVerse, 10000);

    // Shuffle the questions array to randomize the order.
    questions = shuffleQuestions(questions);
    
    // Reset count.
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Resets the quiz after answering all questions.
function resetQuiz() {
    nextButton.style.display = "none";
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }
    startQuiz();
}

function startTimer() {
    let timeLeft = questionTimerDuration;
    const timerElement = document.getElementById("timer");

    // Display initial timer value
    timerElement.textContent = timeLeft;

    // Update the timer every second
    questionTimer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // If time runs out, automatically move to the next question
        if (timeLeft === 0) {
            clearInterval(questionTimer);
            checkNext();
        }
    }, 1000);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(questionTimer);
}

// Modify the showQuestion function to start the timer for each question
function showQuestion() {
    // Clear the previous answer buttons and reset the timer
    optionsButtons.innerHTML = "";
    resetTimer();

    // Start the timer for the current question
    startTimer();

    // ... (rest of your showQuestion function remains unchanged)
}

// ... (rest of your existing code remains unchanged)

// Shows question to user.
function showQuestion() {
    // Clear the previous answer buttons and reset the timer
    optionsButtons.innerHTML = "";
    resetTimer();

    // Start the timer for the current question
    startTimer();
    
    // Make the "next" button disappear.
    nextButton.style.display = "none";

    // Hide explanation after moving on to the next question.
    explanation.style.display = "none";

    // Get current question from questions list.
    let currentQuestion = questions[currentQuestionIndex];

    // Get the question number.
    let questionNumber = currentQuestionIndex + 1;

    // Show proper question on display
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    // Show each of the possible answers from the question.
    // For each answer for the current question...
    currentQuestion.answers.forEach(answer => {
        // Create the button for the answer with the corresponding answer text.
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        // Add the button to the options.
        button.classList.add("options-buttons");
        optionsButtons.appendChild(button);

        // Set "data-correct" attribute on the button if the answer 
        // is correct for later use in handling user input.
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // When the button is clicked, we check if the option is right or wrong,
        // displaying green or red.
        button.addEventListener("click", selectAnswer);
    });
}

// Updates the score and shows if the selected answer is correct or incorrect
// by the color of green or red after clicking on an answer.
function selectAnswer(e) {
    // Get the selected button that the user clicked on.
    const selectedButton = e.target;

    // Check if the selected answer is correct by accessing the "data-correct" attribute
    // previously created on showQuestion().
    const isCorrect = selectedButton.dataset.correct === "true";

    // If the selected answer is correct, add it to "correct" to display green, and increase score.
    // If the selected answer is incorrect, add it to "incorrect" to display red.
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable all answer buttons to prevent further selections after the user has chosen an answer.
    // Store every correct answer into "correct" to prevent further selection of options.
    Array.from(optionsButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        // Disable button.
        button.disabled = true;
    });

    explanation.innerHTML = "Explanation: " + questions[currentQuestionIndex]['explanation'];
    explanation.style.display = "block";

    // Make the "next" button appear for user to click and move on.
    nextButton.style.display = "block";
}

// After clicking "next", check if there's another question after the current one.
nextButton.addEventListener("click", checkNext);

// Displays the next question.
function nextQuestion() {
    // Go to the next question.
    currentQuestionIndex++;

    // Display question if there are more questions, show score, otherwise.
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Show the score at the end of the quiz.
function showScore() {
    // Hide explanation from last question.
    explanation.style.display = "none";

    // Remove the options to show the score only.
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }

    // Show score that the user got and update text of the "next" button to 
    // "Play Again" for user to play again.
    questionElement.innerHTML = "You scored " + score + " out of  " + questions.length + "! -> " + (score / questions.length * 100).toFixed(1) + "\%";
    nextButton.innerHTML = "Play Again";

    // Remove the previous click event listener from nextButton.
    nextButton.removeEventListener("click", checkNext);

    // Add the click event listener to start the quiz again when "Play Again" is clicked.
    nextButton.addEventListener("click", resetQuiz);
}

// Checks if there are more questions to be answered. Reset quiz otherwise.
function checkNext() {
    // Hide the welcome text.
    welcomeTextElement.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        showScore();
    }
}
startQuiz();
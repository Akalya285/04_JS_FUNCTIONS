var question1 = {
    question: "What is the capital of France?",
    options: ["Bordeaux", "F", "Paris", "Brussels"],
    correctAnswer: "Paris"
};

var question2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Saturn", "Neptune"],
    correctAnswer: "Mars"
};

var question3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "F. Scott Fitzgerald", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
};

var showQuizQuestion = function (question) {
    console.log("Question: " + question.question);
    console.log("Options:");
    for (var i = 0; i < question.options.length; i++) {
        console.log("(" + (i + 1) + ") " + question.options[i]);
    }
    console.log("------------------------------");
};

showQuizQuestion(question1);
showQuizQuestion(question2);
showQuizQuestion(question3);

// Calling the sayHello function three times

var sayHello;

sayHello = function () {
    console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

// Function to print letters of "Hello World!" down the page

var printLetters;

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

printLetters();

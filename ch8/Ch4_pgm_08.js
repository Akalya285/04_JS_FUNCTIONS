var displayMenu;

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) Delete user");
    console.log("(4) View settings");
    console.log("(9) Quit");
};

displayMenu();


// Define your own custom menu function
var displayMyMenu = function () {
    console.log("Welcome to My Custom Menu:");
    console.log("(1) View Profile");
    console.log("(2) Edit Preferences");
    console.log("(3) View Messages");
    console.log("(4) Logout");
    console.log("(5) Exit");
};

// Calling your custom menu function
displayMyMenu();


// Call both displayMenu and displayMyMenu
displayMenu();
console.log("\n"); // Adding a newline for separation
displayMyMenu();

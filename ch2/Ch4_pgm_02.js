// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

movie4 = {
    title: "Inception",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    directors: "Christopher Nolan"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("\nMovie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("\nMovie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("\nMovie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

// 3) Create objects to represent three calendar events
var event1 = {
    title: "Birthday Party",
    date: "2024-07-14",
    location: "123 Main St, Anytown, USA"
};

var event2 = {
    title: "Conference",
    date: "2024-08-20",
    location: "Conference Center, Big City"
};

var event3 = {
    title: "Holiday",
    date: "2024-12-25",
    location: "Everywhere"
};

console.log("\nCalendar Events:");
console.log("------------------------------");
console.log(event1.title + " on " + event1.date + " at " + event1.location);
console.log(event2.title + " on " + event2.date + " at " + event2.location);
console.log(event3.title + " on " + event3.date + " at " + event3.location);
console.log("------------------------------");

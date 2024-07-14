// Displaying an object's properties on the console

var movie1;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// 1) Add a second movie
var movie2 = {
    title: "The Dark Knight",
    actors: "Christian Bale, Heath Ledger",
    directors: "Christopher Nolan"
};

console.log("\nMovie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// 2) Create an object for a blog post
var blogPost = {
    title: "Exploring JavaScript Objects",
    author: "Coder123",
    date: "2024-07-14",
    content: "JavaScript objects are a fundamental part of the language..."
};

console.log("\nBlog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Date: " + blogPost.date);
console.log("Content:\n" + blogPost.content);
console.log("------------------------------");

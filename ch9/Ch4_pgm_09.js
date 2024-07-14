var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Call showMovieInfo
showMovieInfo();


var showMovieInfo;
var movie; // Declare movie without assigning a value

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Call showMovieInfo
showMovieInfo();


var showMovieInfo;
var movie = {}; // Assign an empty object to movie

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Call showMovieInfo
showMovieInfo();


var showMovieInfo;
var movie = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Call showMovieInfo
showMovieInfo();

var showPlayerLocation = function(player) {
    console.log(player.name + " is in " + player.place);
};

// Example usage:
showPlayerLocation(player1); // Outputs: Kandra is in The Dungeon of Doom
showPlayerLocation(player2); // Outputs: Dax is in The Old Library

var showPlayerHealth = function(player) {
    console.log(player.name + " has health " + player.health);
};

// Example usage:
showPlayerHealth(player1); // Outputs: Kandra has health 50
showPlayerHealth(player2); // Outputs: Dax has health 40

var showPlayerInfo = function(player) {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
};

// Example usage:
player = player1;
showPlayerInfo(player1);

player = player2;
showPlayerInfo(player2);


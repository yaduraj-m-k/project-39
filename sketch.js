var ball;
var database, position;
var game, player, form;
var gameState = 0;
var playerCount;
var allPlayers;
var runner1, runner2, runner3, runner4, runners;
var runner1img,  runner2img,  runner3img,  runner4img, ground, track;
function preload() {
    runner1img = loadImage("runner.jpg");
    runner2img = loadImage("runner.jpg");
    runner3img = loadImage("runner.jpg");
    runner4img = loadImage("runner.jpg");
    ground = loadImage("ground.png");
    track = loadImage("track.jpg");
}

function setup() {
    createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("white");
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        game.play();
    }
   
}

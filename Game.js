class Game {
    constructor() { }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            'gameState': state
        });
    }
    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        runner1 = createSprite(100, 200);
        runner1.addImage("runner1", runner1img);
        runner2 = createSprite(300, 200);
        runner2.addImage("runner2",  runner2img);
        runner3 = createSprite(500, 200);
        runner3.addImage("runner3", runner3img);
        runner4 = createSprite(700, 200);
        runner4.addImage("runner4",  runner4img);
        runners = [runner1, runner2, runner3, runner4];
    }
    play() {
        form.hide();
       
       
        background(ground);
        image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
        Player.getPlayersInfo();
        if (allPlayers !== undefined) {
            console.log("Working");
            var index = 0;
            var x = 200;
            var y;
            for (var plr in allPlayers) {
                console.log(allPlayers);
                index++;
                console.log(index);
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                runners[index - 1].x = x;
                runners[index - 1].y = y;
                if (index === player.index) {
                    runners[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = runners[index - 1].y;
                }
               
            }
        }
        if (keyDown(UP_ARROW) && player.index !== null) {
            player.distance += 10;
            player.update();
        }
        if (player.distance > 3760) {
            gameState = 2;
        }
        drawSprites();
    }
}
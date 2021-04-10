class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            'playerCount': count
        });
    }
    update() {
        var playerIndex = "players/player" + this.index;// players/player1, players/player2...
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }

    static getPlayersInfo() {
        var allPlayersRef = database.ref('players');
        allPlayersRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}
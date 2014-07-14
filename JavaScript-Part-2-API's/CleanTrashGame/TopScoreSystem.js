var playersScoreSystem = (function () {

    var players = [];

    function loadTopPlayers() {
        players = new Array();
        for (var player in localStorage) {
            players.push(player);
        }

        //Sorting players by score(time)
        players.sort(playerComparer);
        function playerComparer(x, y) {
            return parseInt(localStorage.getItem(x)) - parseInt(localStorage.getItem(y));
        }

        //Remove players where is not in top 5
        while (players.length > 5) {
            var player = players.pop();
            localStorage.removeItem(player);
        }
    }

    function addPlayer(playerName, playerScore) {
        localStorage.setItem(playerName, playerScore.toString());
        loadTopPlayers();
    }

    function getTop5() {
        loadTopPlayers();
        var topPlayers = [];
        for (var i = 0; i < players.length; i++) {
            topPlayers.push(players[i] + " : " + localStorage.getItem(players[i]) + " sec.");
        }
        return topPlayers;
    }

    return {
        addPlayer: addPlayer,
        getTopPlayers: getTop5
    }
})();
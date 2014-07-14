// global variables
var trashItemsCount = 20
var seconds = 0;
var timer;
//localStorage.clear();
// Common game logic
function loadGame() {
    fillScoreBoard();
}

function startGame() {
    generateTrash();
    startTimer();
    document.getElementById("scoreBoardContainer").style.display = "none";
}

function TrashItemsCountdown() {
    trashItemsCount--;
    if (trashItemsCount == 0) {
        endGame();
    }
}

function endGame() {
    stopTimer();
    var form = document.getElementById("getPlayerNameForm");
    form.style.display = "block";
}

function submitPlayer() {
    var playerName = document.getElementById("playerName").value.toString();
    playersScoreSystem.addPlayer(playerName, seconds);
    location.reload(true);
}

//Drag and drop events
function allowDrop(ev) {
    ev.preventDefault();
    var container = document.getElementById("container");
    container.src = "Images/1401917922_trash.png";
}

function denyDrop() {
    var container = document.getElementById("container");
    container.src = "Images/1401917926_trash_empty.png";
}

function drag(ev) {
    ev.dataTransfer.setData("dragged-id", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragged-id");
    var element = document.getElementById(data);
    document.body.removeChild(element);
    var container = document.getElementById("container");
    container.src = "Images/1401917926_trash_empty.png";
    TrashItemsCountdown();
}


// Help functions
function fillScoreBoard() {
    var currentScoreBoardPosition = document.getElementById("scoreBoard").firstElementChild;
    var players = playersScoreSystem.getTopPlayers();
    for (var i = 0; i < players.length; i++) {
        currentScoreBoardPosition.innerHTML = players[i];
        currentScoreBoardPosition = currentScoreBoardPosition.nextElementSibling;
    }
}

function generateTrash() {
    for (var i = 0; i < trashItemsCount; i++) {
        var element = document.createElement("img");
        element.src = "Images/1401918912_Blue_ball.png";
        element.id = i.toString();
        element.setAttribute("draggable", "true");
        element.ondragstart = drag;
        element.style.position = "absolute";
        element.style.top = getRandomNumber(200, 500) + "px";
        element.style.left = getRandomNumber(200, 1000) + "px";
        document.body.appendChild(element);
    }
}

function getRandomNumber(startNum, endNum) {
    return Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
}

function startTimer() {
    timer = setInterval(function () { seconds++ }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}
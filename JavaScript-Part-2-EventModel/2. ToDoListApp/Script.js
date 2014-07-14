function addTask() {
    var container = document.getElementById("listItems");
    var inputElement = document.getElementById("taskText");

    var inputText = inputElement.value.toString();
    if (inputText === "") {
        alert("Can't add empty task !");
        return;
    }

    var taskItem = document.createElement("li");
    var taskTextItem = document.createElement("span");

    taskTextItem.innerHTML = inputText;

    taskItem.appendChild(taskTextItem);
    taskItem.appendChild(createShowBtn());
    taskItem.appendChild(createHideBtn());
    taskItem.appendChild(createDeleteBtn());
    container.appendChild(taskItem);
    inputElement.value = "";
}

function createDeleteBtn() {
    var btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.style.marginLeft = "10px";
    btn.addEventListener("click", function (ev) {
        var container = document.getElementById("listItems");
        var itemToDelete = ev.target.parentElement;
        container.removeChild(itemToDelete);
    }, false);
    return btn;
}

function createHideBtn() {
    var btn = document.createElement("button");
    btn.innerHTML = "Hide";
    btn.style.marginLeft = "10px";
    btn.addEventListener("click", function (ev) {
        var textItem = ev.target.parentElement.firstElementChild;
        var deleteBtn = ev.target.parentElement.lastElementChild;
        var showBtn = ev.target.parentElement.childNodes[1];

        textItem.style.display = "none";
        deleteBtn.style.display = "none";
        btn.style.display = "none";
        showBtn.style.display = "inline";
    }, false);
    return btn;
}

function createShowBtn() {
    var btn = document.createElement("button");
    btn.style.display = "none";
    btn.innerHTML = "Show";
    btn.style.marginLeft = "10px";
    btn.addEventListener("click", function (ev) {
        var textItem = ev.target.parentElement.firstElementChild;
        var hideBtn = ev.target.parentElement.childNodes[2];
        var deleteBtn = ev.target.parentElement.lastElementChild;

        btn.style.display = "none";
        textItem.style.display = "inline";
        hideBtn.style.display = "inline";
        deleteBtn.style.display = "inline";
    }, false);
    return btn;
}
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask, false);
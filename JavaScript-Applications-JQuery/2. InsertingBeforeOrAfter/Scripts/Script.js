function addBeforeBtnClick() {
    var text = $("#inputText").val().toString();
    if (text != "") {
        $("<li>" + $("#inputText").val() + "</li>").insertBefore(".selected")
            .on("click", elementSelection);
        $("#inputText").val("");
    }
}

function addAfterBtnClick() {
    var text = $("#inputText").val().toString();
    if (text != "") {
        $("<li>" + $("#inputText").val() + "</li>").insertAfter(".selected")
        .on("click", elementSelection);
        $("#inputText").val("");
    }

}

function elementSelection() {
    $(this).parent().children().removeClass("selected");
    $(this).addClass("selected");
}

//Register events
$("li").on("click", elementSelection);
$("#addBefBtn").on("click", addBeforeBtnClick);
$("#addAftBtn").on("click", addAfterBtnClick);
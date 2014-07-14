changeBackground();

$("#colorPicker").on("change", changeBackground);

function changeBackground() {
    $("body").css("background-color", $("#colorPicker").val());
}
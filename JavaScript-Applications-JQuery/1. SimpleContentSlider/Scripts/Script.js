
loadSlide();
autoTransition(5);

var resources = ["IframePage.html", "ImagePage.html", "ParagraphPage.html"];
var currentSlideNum = 0;

$("#prevBtn").on("click", prevBtnClick);
$("#nextBtn").on("click", nextBtnClick);

function prevBtnClick() {
    currentSlideNum--;
    if (currentSlideNum == -1) {
        currentSlideNum = resources.length - 1;
    }
    loadSlide();
}

function nextBtnClick() {
    currentSlideNum++;
    if (currentSlideNum == resources.length) {
        currentSlideNum = 0;
    }
    loadSlide();
}

function loadSlide() {
    console.log("Resources/" + resources[currentSlideNum]);
    $("#currentSlide").load("Resources/" + resources[currentSlideNum]);
}

function autoTransition(seconds) {
    setInterval(nextBtnClick, seconds * 1000);
}
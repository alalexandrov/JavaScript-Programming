var path = "Images/";
var imgFileNames = ["image-1", "image-2", "image-3", "image-4"];

var currentImageNum = 0;
var currentImageName = imgFileNames[currentImageNum];

var nextBtn = document.getElementById("nextImgBtn");
var prevBtn = document.getElementById("prevImgBtn");

nextBtn.addEventListener("click", setNextImage, false);
prevBtn.addEventListener("click", setPrevImage, false);

loadImage();

function setNextImage() {
    currentImageNum++;
    if (currentImageNum == imgFileNames.length) {
        currentImageNum = 0;
    }
    loadImage();
}
function setPrevImage() {
    currentImageNum--;
    if (currentImageNum == -1) {
        currentImageNum = imgFileNames.length - 1;
    }
    loadImage();
}

function loadImage() {
    var currentImage = document.getElementById("currentImage");
    currentImage.src = path + imgFileNames[currentImageNum] + ".jpg";
}
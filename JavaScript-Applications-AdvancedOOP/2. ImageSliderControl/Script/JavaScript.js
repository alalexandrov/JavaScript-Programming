// Constructors
var image = {
    init: function (title, imgURL, thumbURL) {
        this.title = title;
        this.imgURL = imgURL;
        this.thumbURL = thumbURL;
    }
};

var slider = {
    init: function (images) {
        this.imgIndex = 0;
        this.images = images;
    },
    getCurrentImg: function () {
        return this.images[this.imgIndex];
    },
    setCurrentImg: function (imgNum) {
        this.imgIndex = imgNum;
        return this.getCurrentImg();
    },
    getNextImg: function () {
        this.imgIndex++;
        if (this.imgIndex == this.images.length) {
            this.imgIndex = 0;
        }
        return this.getCurrentImg();
    },
    getPrevImg: function () {
        this.imgIndex--;
        if (this.imgIndex == -1) {
            this.imgIndex = this.images.length - 1;
        }
        return this.getCurrentImg();
    }
}

//Creating objects
var img1 = Object.create(image);
img1.init("img1", "Images/image1.jpg", "Images/image1Thumb.jpg");

var img2 = Object.create(image);
img2.init("img2", "Images/image2.jpg", "Images/image2Thumb.jpg");

var img3 = Object.create(image);
img3.init("img3", "Images/image3.jpg", "Images/image3Thumb.jpg");

var img4 = Object.create(image);
img4.init("img4", "Images/image4.jpg", "Images/image4Thumb.jpg");

var img5 = Object.create(image);
img5.init("img5", "Images/image5.jpg", "Images/image5Thumb.jpg");

var imgSlider = Object.create(slider);
imgSlider.init([img1, img2, img3, img4, img5]);


// Load images
$("#currentImg").attr("src", imgSlider.getCurrentImg().imgURL);
fillThumbsContainer(imgSlider.images);

//Register events
$("#" + imgSlider.imgIndex).addClass("selected");
$("#prevImgBtn").on("click", prevBtnClick);
$("#nextImgBtn").on("click", nextBtnClick);

//Help functions
function fillThumbsContainer(images) {
    for (var i = 0; i < images.length; i++) {
        $("#imgThumbs").append("<li>" + "<img " + "id=" + i + " src=" + images[i].thumbURL + " />" + "</li>")
        .on("click", thumbIconClick);
    }
}

function nextBtnClick() {
    $("#currentImg").attr("src", imgSlider.getNextImg().imgURL);
    $("#imgThumbs").children().children().removeClass("selected");
    $("#" + imgSlider.imgIndex).addClass("selected");
}

function prevBtnClick() {
    $("#currentImg").attr("src", imgSlider.getPrevImg().imgURL);
    $("#imgThumbs").children().children().removeClass("selected");
    $("#" + imgSlider.imgIndex).addClass("selected");
}

function thumbIconClick(ev) {
    var imgID = ev.target.id;
    $("#imgThumbs").children().children().removeClass("selected");
    $(ev.target).addClass("selected");
    $("#currentImg").attr("src", imgSlider.setCurrentImg(imgID).imgURL);
}
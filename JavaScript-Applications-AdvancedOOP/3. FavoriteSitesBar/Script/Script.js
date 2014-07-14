// Module for class creation
var Class = (function () {
    function createClass(properties) {
        var f = function () {
            //This is an addition to enable super (base) class with inheritance
            if (this._superConstructor) {
                this._super = new this._superConstructor(arguments);
            }
            this.init.apply(this, arguments);
        }
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        if (!f.prototype.init) {
            f.prototype.init = function () { }
        }
        return f;
    }

    Function.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        this.prototype = new parent();
        this.prototype._superConstructor = parent;
        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    return {
        create: createClass,
    };
}());

//Contructors
var url = Class.create({
    init: function (title, url) {
        this.title = title;
        this.url = url;
    }
});

var folder = Class.create({
    init: function (title, urlsArr) {
        this.title = title;
        this.urls = urlsArr;
    }
});

var siteBar = Class.create({
    init: function (foldersArr, urlsArr) {
        this.folders = foldersArr;
        this.urls = urlsArr;
    }
});

//Creating objects
var urlObj1 = new url("Google", "http://www.google.com");
var urlObj2 = new url("YouTube", "http://www.youtube.com");
var urlObj3 = new url("Facebook", "http://www.facebook.com");
var urlObj4 = new url("StumbleUpon", "http://www.stumbleupon.com");
var urlObj5 = new url("Microsoft", "http://www.microsoft.com");

var urlsArr = [urlObj1, urlObj2, urlObj3, urlObj4, urlObj5];

var folderObj1 = new folder("Enjoy sites", urlsArr);
var folderObj2 = new folder("Developing sites", urlsArr);

var foldersArr = [folderObj1, folderObj2];

var siteBarObj = new siteBar(foldersArr, urlsArr);

//Filling sitebar
fillsSiteBar();

function fillsSiteBar() {
    // Adding URL's
    var URLs = siteBarObj.urls;
    for (var i = 0; i < URLs.length; i++) {
        $("#favBar").append("<li class='url'><a href='" + URLs[i].url + "' target='_blank'>" + URLs[i].title + "</a></li>");
    }

    //Adding folders
    var folders = siteBarObj.folders;
    for (var i = 0; i < folders.length; i++) {
        $("#favBar").append("<li class='folder'><img src='Images/1402674172_folder-close.png' />" + folders[i].title + "<ul></ul></li>");

        //Adding urls to folders              
        var folderUrls = folders[i].urls;
        var lastAddedFolder = $("#favBar li").last();
        for (var j = 0; j < folderUrls.length; j++) {
            $("ul", lastAddedFolder).append("<li class='url'><a href='" + folderUrls[j].url + "'target='_blank'>" + folderUrls[j].title + "</a></li>");
        }
    }

    // Adding events for visualisation
    $(".folder").on("mouseover", function () {
        $("img", $(this)).attr("src", "Images/1402676153_folder-open.png");
    });
    $(".folder").on("mouseout", function () {
        $("img", $(this)).attr("src", "Images/1402674172_folder-close.png");
    });
}

(function ($) {
    $.fn.TreeView = function () {
        $("li > ul").css("display", "none");
        $("li").on("click", expand);
        function expand(ev) {
            ev.stopPropagation();
            if (!$(this).hasClass("expanded")) {
                $(this).parent().children().children().css("display", "none");
                $(this).parent().children().removeClass("expanded");
                $(this).css("display", "block");
                $(this).children().css("display", "block");
                $(this).addClass("expanded");
            }
            else {
                $(this).children().css("display", "none");
                $(this).removeClass("expanded");
            }
        }
    }
}(jQuery));

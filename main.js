(function() {
    'use strict';
    //////////////////////////////////////////////////
    var h = $("<div>").css({
        backgroundColor: "lightgray",
        borderRadius: "25px",
        padding: "1em"
    }).appendTo("body");
    $("<h1>").text($("title").text()).appendTo(h);
    var desc = $("<div>").text("Hello, World!\nテストページです。").css({
        backgroundColor: "darkgray",
        fontSize: "10px",
        borderRadius: "25px",
        padding: "1em"
    }).appendTo(h);
    h.append("<hr>");
    //////////////////////////////////////////////////
})();

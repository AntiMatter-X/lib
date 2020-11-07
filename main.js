(function() {
    'use strict';
    //--------------------------------------------------
    var h = $("<div>").css({
        backgroundColor: "lightgray",
        borderRadius: "25px",
        padding: "1em"
    }).appendTo("body");
    $("<h1>").text($("title").text()).appendTo(h);
    var desc = $("<div>").append("Hello, World!<br>テストページです。<br>どのライブラリが使えないのかチェックしたりできます。").css({
        backgroundColor: "darkgray",
        fontSize: "12px",
        borderRadius: "25px",
        padding: "1em"
    }).appendTo(h);
    h.append("<hr>");
    //--------------------------------------------------
    $("<h2>").text("Check your library").appendTo(h);
    var library = [ // ライブラリ
        "jQuery",
        "antimatterx",
        "arrowfunc"
    ];
    library.forEach(function(v) {
        var a = window[v];
        var elm = $("<div>").text(v + ": ").css("background-color", "slategray").appendTo(h);
        $("<span>").text(a ? "OK" : "Error").css("color", a ? "lime" : "red").appendTo(elm);
    });
    $("<h2>").text("my pages").appendTo(h);
    var pages = [ // ページ
        "lib",
        "editor"
    ];
    var origin = location.protocol + "//" + location.host + "/";
    pages.forEach(function(v) {
        var url = origin + v + "/";
        $.get(url).done(function(d) {
            var title = d.match(/<title>(.*)<\/title>/)[1];
            $("<a>", {
                href: url
            }).text(title).appendTo(h);
            h.append("<br>");
        });
    });
    //--------------------------------------------------
})();

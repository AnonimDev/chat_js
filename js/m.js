$("#test1btn").click(function () {
    var blo1 = $("#test1");
    var blo2 = $("#test2");
    if (blo1.is(':visible')) {
        blo1.hide();
        blo2.css("width", "100%");
    }
    else if (blo1.is(':hidden')) {
        blo1.show();
        blo2.css("width", "80%");
    }
});
/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var ficat = false;

//evitar que o menu não funcione com os subtópicos.
var window = window;
var event  = event;
$(window).hover(function () {
    "use strict";
    var posicao = event.pageY - this.pageYOffset;
    if (posicao < 50) {
        $("h1").css("z-index", "-1");
        $("h2").css("z-index", "-1");
        $("p").css("z-index", "-1");
        $("ol").css("z-index", "-1");
    }
});
$("#ficat").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
    $("ol").css("z-index", "0");
});

$("#ficatP").click(function () {
    "use strict";
    if (ficat === true) {
        $("#ficatImg").fadeOut();
        $("#ficat").css("padding-bottom", "17%");
        ficat = false;
    } else {
        $("#ficatImg").fadeIn();
        $("#ficat").css("padding-bottom", "0%");
        ficat = true;
    }
});
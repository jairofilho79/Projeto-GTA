/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var apendice = false;

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
    }
});
$("#apendice").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#apendiceP").click(function () {
    "use strict";
    if (apendice === true) {
        $("#apendiceImg").fadeOut();
        $("#apendice").css("padding-bottom", "17%");
        apendice = false;
    } else {
        $("#apendiceImg").fadeIn();
        $("#apendice").css("padding-bottom", "0%");
        apendice = true;
    }
});
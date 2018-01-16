/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var lAbreSig   = false;
var lAbreSig2 = false;

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
$("#lAbreSig").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#lAbreSigP").click(function () {
    "use strict";
    if (lAbreSig === true) {
        $("#lAbreSigImg").fadeOut();
        $("#lAbreSig").css("padding-bottom", "17%");
        lAbreSig = false;
    } else {
        $("#lAbreSigImg").fadeIn();
        $("#lAbreSig").css("padding-bottom", "0%");
        lAbreSig = true;
    }
});

$("#lAbreSigP2").click(function () {
    "use strict";
    if (lAbreSig2 === true) {
        $("#lAbreSigImg2").fadeOut();
        $("#lAbreSig").css("padding-bottom", "17%");
        lAbreSig2 = false;
    } else {
        $("#lAbreSigImg2").fadeIn();
        $("#lAbreSig").css("padding-bottom", "0%");
        lAbreSig2 = true;
    }
});
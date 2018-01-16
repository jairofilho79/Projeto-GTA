/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var capa = false;

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
        $("ul").css("z-index", "-1");
        $(".menu ul").css("z-index", "0");
    }
});
$("#capa").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
    $("ul").css("z-index", "0");
});

$("#capaP").click(function () {
    "use strict";
    if (capa === true) {
        $("#capaImg").fadeOut();
        $("#capa").css("padding-bottom", "17%");
        capa = false;
    } else {
        $("#capaImg").fadeIn();
        $("#capa").css("padding-bottom", "0%");
        capa = true;
    }
});
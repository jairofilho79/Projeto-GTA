/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var vernacula   = false;
var estrangeira = false;

//evitar que o menu não funcione com os subtópicos.
var window = window;
var event  = event;
$(window).hover(function () {
    "use strict";
    var posicao = event.pageY - this.pageYOffset;
    if (posicao < 50) {
        $("h1").css("z-index", "-1");
        $("h2").css("z-index", "-1");
        $("h3").css("z-index", "-1");
        $("p").css("z-index", "-1");
        $("ul").css("z-index", "-1");
        $(".menu ul").css("z-index", "0");
    }
});
$("#resumo").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("h3").css("z-index", "0");
    $("p").css("z-index", "0");
    $("ul").css("z-index", "0");
});

$("#vernaculaP").click(function () {
    "use strict";
    if (vernacula === true) {
        $("#vernaculaImg").fadeOut();
        $("#vernacula").css("padding-bottom", "17%");
        vernacula = false;
    } else {
        $("#vernaculaImg").fadeIn();
        $("#vernacula").css("padding-bottom", "0%");
        vernacula = true;
    }
});

$("#estrangeiraP").click(function () {
    "use strict";
    if (estrangeira === true) {
        $("#estrangeiraImg").fadeOut();
        $("#estrangeira").css("padding-bottom", "17%");
        estrangeira = false;
    } else {
        $("#estrangeiraImg").fadeIn();
        $("#estrangeira").css("padding-bottom", "0%");
        estrangeira = true;
    }
});
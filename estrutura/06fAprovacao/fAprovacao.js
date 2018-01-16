/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var fAprovacao = false;

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
$("#fAprovacao").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
    $("ul").css("z-index", "0");
});

$("#fAprovacaoP").click(function () {
    "use strict";
    if (fAprovacao === true) {
        $("#fAprovacaoImg").fadeOut();
        $("#fAprovacao").css("padding-bottom", "17%");
        fAprovacao = false;
    } else {
        $("#fAprovacaoImg").fadeIn();
        $("#fAprovacao").css("padding-bottom", "0%");
        fAprovacao = true;
    }
});
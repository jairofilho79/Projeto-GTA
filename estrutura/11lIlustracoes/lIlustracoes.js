/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var lIlustracoes = false;

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
$("#lIlustracoes").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#lIlustracoesP").click(function () {
    "use strict";
    if (lIlustracoes === true) {
        $("#lIlustracoesImg").fadeOut();
        $("#lIlustracoes").css("padding-bottom", "15%");
        lIlustracoes = false;
    } else {
        $("#lIlustracoesImg").fadeIn();
        $("#lIlustracoes").css("padding-bottom", "0%");
        lIlustracoes = true;
    }
});
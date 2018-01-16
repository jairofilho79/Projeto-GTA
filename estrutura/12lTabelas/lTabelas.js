/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var lTabelas = false;

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
$("#lTabelas").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#lTabelasP").click(function () {
    "use strict";
    if (lTabelas === true) {
        $("#lTabelasImg").fadeOut();
        $("#lTabelas").css("padding-bottom", "17%");
        lTabelas = false;
    } else {
        $("#lTabelasImg").fadeIn();
        $("#lTabelas").css("padding-bottom", "0%");
        lTabelas = true;
    }
});
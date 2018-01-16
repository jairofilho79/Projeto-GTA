/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var lSimbolos = false;

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
$("#lSimbolos").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#lSimbolosP").click(function () {
    "use strict";
    if (lSimbolos === true) {
        $("#lSimbolosImg").fadeOut();
        $("#lSimbolos").css("padding-bottom", "17%");
        lSimbolos = false;
    } else {
        $("#lSimbolosImg").fadeIn();
        $("#lSimbolos").css("padding-bottom", "0%");
        lSimbolos = true;
    }
});
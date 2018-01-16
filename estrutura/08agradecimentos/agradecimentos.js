/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var agradecimentos = false;

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
$("#agradecimentos").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#agradecimentosP").click(function () {
    "use strict";
    if (agradecimentos === true) {
        $("#agradecimentosImg").fadeOut();
        $("#agradecimentos").css("padding-bottom", "17%");
        agradecimentos = false;
    } else {
        $("#agradecimentosImg").fadeIn();
        $("#agradecimentos").css("padding-bottom", "0%");
        agradecimentos = true;
    }
});
/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var sumario = false;

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
$("#sumario").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#sumarioP").click(function () {
    "use strict";
    if (sumario === true) {
        $("#sumarioImg").fadeOut();
        $("#sumario").css("padding-bottom", "17%");
        sumario = false;
    } else {
        $("#sumarioImg").fadeIn();
        $("#sumario").css("padding-bottom", "0%");
        sumario = true;
    }
});
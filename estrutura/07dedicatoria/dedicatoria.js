/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var dedicatoria = false;

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
$("#dedicatoria").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#dedicatoriaP").click(function () {
    "use strict";
    if (dedicatoria === true) {
        $("#dedicatoriaImg").fadeOut();
        $("#dedicatoria").css("padding-bottom", "17%");
        dedicatoria = false;
    } else {
        $("#dedicatoriaImg").fadeIn();
        $("#dedicatoria").css("padding-bottom", "0%");
        dedicatoria = true;
    }
});
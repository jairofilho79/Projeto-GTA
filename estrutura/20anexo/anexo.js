/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var anexo = false;

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
$("#anexo").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#anexoP").click(function () {
    "use strict";
    if (anexo === true) {
        $("#anexoImg").fadeOut();
        $("#anexo").css("padding-bottom", "17%");
        anexo = false;
    } else {
        $("#anexoImg").fadeIn();
        $("#anexo").css("padding-bottom", "0%");
        anexo = true;
    }
});
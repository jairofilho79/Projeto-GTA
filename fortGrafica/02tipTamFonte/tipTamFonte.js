
/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var window = window;
var event  = event;
//evitar que o menu não funcione com os subtópicos.
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
$("#TipoTamFonte").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
    $("ul").css("z-index", "0");
});



/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

//evitar que o menu não funcione com os subtópicos.
var window = window;
var event = event;
$(window).hover(function () {
    "use strict";
    var posicao = event.pageY - this.pageYOffset;
    if (posicao < 50) {
        $("h1").css("z-index", "-1");
        $("p").css("z-index", "-1");
    }
});
$(".mens").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("p").css("z-index", "0");
});
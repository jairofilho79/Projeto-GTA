/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var errata = false;

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
$("#errata").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#errataP").click(function () {
    "use strict";
    if (errata === true) {
        $("#errataImg").fadeOut();
        $("#errata").css("padding-bottom", "17%");
        errata = false;
    } else {
        $("#errataImg").fadeIn();
        $("#errata").css("padding-bottom", "0%");
        errata = true;
    }
});
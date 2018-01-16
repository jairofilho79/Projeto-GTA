/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var epigrafe = false;

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
$("#epigrafe").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("p").css("z-index", "0");
});

$("#epigrafeP").click(function () {
    "use strict";
    if (epigrafe === true) {
        $("#epigrafeImg").fadeOut();
        $("#epigrafe").css("padding-bottom", "17%");
        epigrafe = false;
    } else {
        $("#epigrafeImg").fadeIn();
        $("#epigrafe").css("padding-bottom", "0%");
        epigrafe = true;
    }
});
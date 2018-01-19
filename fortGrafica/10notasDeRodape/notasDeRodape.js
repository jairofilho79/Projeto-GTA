/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

//evitar que o menu não funcione com os subtópicos.
$("h1").css("z-index", "-1");
$("h2").css("z-index", "-1");
$("h3").css("z-index", "-1");
$("h4").css("z-index", "-1");
$("p").css("z-index", "-1");
$("ul").css("z-index", "-1");
$(".menu ul").css("z-index", "0");

var val   = $("#casosS").val();

$("#casosSel").change(function () {
    "use strict";
    val   = $("#casosSel").val();
    if (val == 0) {
        $(".DivCasos").hide();
    }
    if (val == 1) {
        $(".DivCasos").hide();
        $("#casosD1").fadeIn();
    }
    if (val == 2) {
        $(".DivCasos").hide();
        $("#casosD2").fadeIn();
    }
    if (val == 3) {
        $(".DivCasos").hide();
        $("#casosD3").fadeIn();
    }
    if (val == 4) {
        $(".DivCasos").hide();
        $("#casosD4").fadeIn();
    }
    if (val == 5) {
        $(".DivCasos").hide();
        $("#casosD5").fadeIn();
    }
    if (val == 6) {
        $(".DivCasos").hide();
        $("#casosD6").fadeIn();
    }
    if (val == 7) {
        $(".DivCasos").hide();
        $("#casosD7").fadeIn();
    }
});
/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

//evitar que o menu não funcione com os subtópicos.
var window = window;
var event  = event;
$(window).hover(function () {
    "use strict";
    var posicao = event.pageY - this.pageYOffset;
    if (posicao < 50) {
        $("h1").css("z-index", "-1");
        $("h2").css("z-index", "-1");
        $("h3").css("z-index", "-1");
        $("h4").css("z-index", "-1");
        $("p").css("z-index", "-1");
        $("ul").css("z-index", "-1");
        $(".menu ul").css("z-index", "0");
    }
});

$("#notasDeRodape").hover(function () {
    "use strict";
    $("h1").css("z-index", "0");
    $("h2").css("z-index", "0");
    $("h3").css("z-index", "0");
    $("h4").css("z-index", "0");
    $("p").css("z-index", "0");
    $("ul").css("z-index", "0");
});

//Aparições das imagens

var notas                = false;
var notas1               = false;


$("#notasP").click(function () {
    "use strict";
    if (notas === true) {
        $("#notasImg").fadeOut();
        notas = false;
    } else {
        $("#notasImg").fadeIn();
        notas = true;
    }
});
        
$("#notasP1").click(function () {
    "use strict";
    if (notas1 === true) {
        $("#notasImg1").fadeOut();
        notas1 = false;
    } else {
        $("#notasImg1").fadeIn();
        notas1 = true;
    }
});

var caso  = false;
var val   = $("#casosS").val();
$("#casosD").hide();
$(".DivCasos").hide();
$("#casos").click(function () {
    "use strict";
    if (caso === false) {
        $("#casosD").fadeIn();
        caso = true;
        $(".DivCasos img").show();
        $('#casosSel').val("0");
    } else {
        $("#casosD").fadeOut();
        caso = false;
        $(".DivCasos").hide();        
    }
});

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
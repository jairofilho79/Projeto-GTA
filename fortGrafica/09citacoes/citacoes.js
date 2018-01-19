/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

/*evitar que o menu não funcione com os subtópicos.*/

var document = document;

$("h1").css("z-index", "-1");
$("h2").css("z-index", "-1");
$("h3").css("z-index", "-1");
$("p").css("z-index", "-1");
$("ol").css("z-index", "-1");
$("ul").css("z-index", "-1");
$(".main-inner").css("z-index", "-1");
$(".menu ul").css("z-index", "0");


$("#casosD img").hide();
$("#casosForm").change(function () {
    "use strict";
    
    var val = document.getElementsByName("casos");
    var i;
    for (i = 0; i < val.length; i++) {
        if (i==0 && val[0].checked) {
            $("#casosD img").hide();
            $("#citacoesImg4").fadeIn();
        }
        if (i==1 && val[1].checked) {
            $("#casosD img").hide();
            $("#citacoesImg5").fadeIn();
        }
        if (i==2 && val[2].checked) {
            $("#casosD img").hide();
            $("#citacoesImg6").fadeIn();
        }
        if (i==3 && val[3].checked) {
            $("#casosD img").hide();
            $("#citacoesImg7").fadeIn();
        }
        if (i==4 && val[4].checked) {
            $("#casosD img").hide();
            $("#citacoesImg8").fadeIn();
        }
        if (i==5 && val[5].checked) {
            $("#casosD img").hide();
            $("#citacoesImg9").fadeIn();
        }
        if (i==6 && val[6].checked) {
            $("#casosD img").hide();
            $("#citacoesImg10").fadeIn();
        }
        if (i==7 && val[7].checked) {
            $("#casosD img").hide();
            $("#citacoesImg11").fadeIn();
        }
        if (i==8 && val[8].checked) {
            $("#casosD img").hide();
            $("#citacoesImg12").fadeIn();
        }
        if (i==9 && val[9].checked) {
            $("#casosD img").hide();
            $("#citacoesImg13").fadeIn();
        }
        if (i==10 && val[10].checked) {
            $("#casosD img").hide();
            $("#citacoesImg14").fadeIn();
        }
    }
});
/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/


//evitar que o menu não funcione com os subtópicos.
$("h1").css("z-index", "-1");
$("h2").css("z-index", "-1");
$("p").css("z-index", "-1");
$("ol").css("z-index", "-1");
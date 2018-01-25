/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

var form     = false;
var numPro   = false;
var cita     = false;
var notaRoda = false;
var estrut   = false;
var resm     = false;
var refe     = false;
var monog    = false;
var pubPer   = false;



$("#form").click(function () {
    "use strict";
    if (form === false) {
        $("#formG").fadeIn();
        $("#form").html("Formatação Gráfica");
        $("<i class=\"fa fa-angle-up\" aria-hidden=\"true\" style=\"float:right;padding:4px 0px 0px 0px;\"></i>").appendTo("#form");
        form = true;
    } else {
        $("#formG").fadeOut();

        $("#form").html("Formatação Gráfica");
        $("<i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"float:right;padding:4px 0px 0px 0px;\"></i>").appendTo("#form");
        form = false;
    }
});
$("#numPro").click(function () {
    "use strict";
    if (numPro === false) {
        $("#numProD").fadeIn();
        $("#numPro").html("Numeração Progressiva");
        numPro = true;
    } else {
        $("#numProD").fadeOut();
        $("#numPro").html("Numeração Progressiva");
        numPro = false;
    }
});
$("#cita").click(function () {
    "use strict";
    if (cita === false) {
        $("#citaD").fadeIn();
        $("#cita").html("Citações");
        cita = true;
    } else {
        $("#citaD").fadeOut();
        $("#cita").html("Citações");
        cita = false;
    }
});
$("#notaRoda").click(function () {
    "use strict";
    if (notaRoda === false) {
        $("#notaRodaD").fadeIn();
        $("#notaRoda").html("Notas de Rodapé");
        notaRoda = true;
    } else {
        $("#notaRodaD").fadeOut();
        $("#notaRoda").html("Notas de Rodapé");
        notaRoda = false;
    }

});
$("#estrut").click(function () {
    "use strict";
    if (estrut === false) {
        $("#estrutD").fadeIn();
        $("#estrut").html("Estrutura");
        estrut = true;
    } else {
        $("#estrutD").fadeOut();
        $("#estrut").html("Estrutura");
        estrut = false;
    }

});
$("#resm").click(function () {
    "use strict";
    if (resm === false) {
        $("#resmD").fadeIn();
        $("#resm").html("Resumo");
        resm = true;
    } else {
        $("#resmD").fadeOut();
        $("#resm").html("Resumo");
        resm = false;
    }

});
$("#refe").click(function () {
    "use strict";
    if (refe === false) {
        $("#refeD").fadeIn();
        $("#refe").html("Referências");
        refe = true;
    } else {
        $("#refeD").fadeOut();
        $("#refe").html("Referências");
        refe = false;
    }
});
$("#monog").click(function () {
    "use strict";
    if (monog === false) {
        $("#monogD").fadeIn();
        $("#monog").html("Monografia");
        monog = true;
    } else {
        $("#monogD").fadeOut();
        $("#monog").html("Monografia");
        monog = false;
    }
});
$("#pubPer").click(function () {
    "use strict";
    if (pubPer === false) {
        $("#pubPerD").fadeIn();
        $("#pubPer").html("Publicação Periódica");
        pubPer = true;
    } else {
        $("#pubPerD").fadeOut();
        $("#pubPer").html("Publicação Periódica");
        pubPer = false;
    }
});
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
        $("#form").html("Formatação Gráfica (&#9650)");
        form = true;
    } else {
        $("#formG").fadeOut();

        $("#form").html("Formatação Gráfica (&#9660)");
        form = false;
    }
});
$("#numPro").click(function () {
    "use strict";
    if (numPro === false) {
        $("#numProD").fadeIn();
        $("#numPro").html("Numeração Progressiva (&#9650)");
        numPro = true;
    } else {
        $("#numProD").fadeOut();
        $("#numPro").html("Numeração Progressiva (&#9660)");
        numPro = false;
    }
});
$("#cita").click(function () {
    "use strict";
    if (cita === false) {
        $("#citaD").fadeIn();
        $("#cita").html("Citações (&#9650)");
        cita = true;
    } else {
        $("#citaD").fadeOut();
        $("#cita").html("Citações (&#9660)");
        cita = false;
    }
});
$("#notaRoda").click(function () {
    "use strict";
    if (notaRoda === false) {
        $("#notaRodaD").fadeIn();
        $("#notaRoda").html("Notas de Rodapé (&#9650)");
        notaRoda = true;
    } else {
        $("#notaRodaD").fadeOut();
        $("#notaRoda").html("Notas de Rodapé (&#9660)");
        notaRoda = false;
    }

});
$("#estrut").click(function () {
    "use strict";
    if (estrut === false) {
        $("#estrutD").fadeIn();
        $("#estrut").html("Estrutura (&#9650)");
        estrut = true;
    } else {
        $("#estrutD").fadeOut();
        $("#estrut").html("Estrutura (&#9660)");
        estrut = false;
    }

});
$("#resm").click(function () {
    "use strict";
    if (resm === false) {
        $("#resmD").fadeIn();
        $("#resm").html("Resumo (&#9650)");
        resm = true;
    } else {
        $("#resmD").fadeOut();
        $("#resm").html("Resumo (&#9660)");
        resm = false;
    }

});
$("#refe").click(function () {
    "use strict";
    if (refe === false) {
        $("#refeD").fadeIn();
        $("#refe").html("Referências (&#9650)");
        refe = true;
    } else {
        $("#refeD").fadeOut();
        $("#refe").html("Referências (&#9660)");
        refe = false;
    }
});
$("#monog").click(function () {
    "use strict";
    if (monog === false) {
        $("#monogD").fadeIn();
        $("#monog").html("Monografia (&#9650)");
        monog = true;
    } else {
        $("#monogD").fadeOut();
        $("#monog").html("Monografia (&#9660)");
        monog = false;
    }
});
$("#pubPer").click(function () {
    "use strict";
    if (pubPer === false) {
        $("#pubPerD").fadeIn();
        $("#pubPer").html("Publicação Periódica (&#9650)");
        pubPer = true;
    } else {
        $("#pubPerD").fadeOut();
        $("#pubPer").html("Publicação Periódica (&#9660)");
        pubPer = false;
    }
});
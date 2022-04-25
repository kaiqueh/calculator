const botoes = document.getElementById("buttons");
const texto = document.getElementById("text");
const limpar = document.getElementById("clear");
const somar = document.getElementById("sum");
const minus = document.getElementById("minus");
const result = document.getElementById("result");
const mult = document.getElementById("mult");
const div = document.getElementById("divv");
let otherValue;
let operator;

limpar.addEventListener("click", function (e) {
    texto.value = "";
    limpar.disable 
});

botoes.addEventListener("click", function (e) {
    if (e.target.type == "button") {
        texto.value += e.target.value;
    };
});

somar.addEventListener("click", function (e) {
    otherValue = texto.value;
    texto.value = "";
    operator = "sum";
});

minus.addEventListener("click", function (e) {
    otherValue = texto.value;
    texto.value = "";
    operator = "minus";
})
mult.addEventListener("click", function (e) {
    otherValue = texto.value;
    texto.value = "";
    operator = "multi"
})
div.addEventListener("click", function (e) {
    otherValue = texto.value;
    texto.value = "";
    operator = "div"
})

result.addEventListener("click", function (e) {
    switch (operator) {
        case "sum":
            texto.value = +otherValue + +texto.value;
            break;

        case "minus":
            texto.value = +otherValue - +texto.value;
            break;
        case "multi":
            texto.value = +otherValue * +texto.value;
            break;
        case "div":
            texto.value = +otherValue / +texto.value;
            break;
    }
})
const numbers = document.getElementById("botoes");
const operar = document.querySelectorAll(".buttonoperator")
const equal = document.querySelector(".equal");
const text = document.getElementById("text");
let otherValue;
let operator;
let result; 


numbers.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.value);
    text.value += e.target.value
    switch (e.target.value) {
        case '/':
            otherValue = text.value.replace(/[^0-9]/g, '');
            text.value = "";
            operator = '/'
            break;
        case '*':
            otherValue = text.value.replace(/[^0-9]/g, '');
            text.value = "";
            operator = '*'
            break;
        case '-':
            otherValue = text.value.replace(/[^0-9]/g, '');
            text.value = "";
            operator = '-'
            break;
        case '+':
            otherValue = text.value.replace(/[^0-9]/g, '');
            text.value = "";
            operator = '+'
            break;
        case 'C':
            text.value = "";
            break;
        case 'CE':
            result = text.value.replace(/[^0-9]/g, '');
            text.value = result.substring(0, result.length - 1);

            break;
        default:
            break;

    }
})
equal.addEventListener("click", function (e) {
    e.preventDefault();
    switch (operator) {
        case '/':
            text.value = +otherValue / +text.value
            break;
        case '+':
            text.value = +otherValue + +text.value
            break;
        case '-':
            text.value = +otherValue - +text.value
            break;
        case '*':
            text.value = +otherValue * +text.value
            break;
        default:
            break;
            
    }
})

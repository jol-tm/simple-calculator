document.addEventListener("DOMContentLoaded", function(e){
    const somarbtn = document.getElementById("somar");
    const subtrairbtn = document.getElementById("subtrair");
    const multiplicarbtn = document.getElementById("multiplicar");
    const dividirbtn = document.getElementById("dividir");
    const limparbtn = document.getElementById("limpar");
    const divres = document.getElementById("resultado");
    var history = localStorage.getItem("history");
    somarbtn.addEventListener("click", somar);
    subtrairbtn.addEventListener("click", subtrair);
    multiplicarbtn.addEventListener("click", multiplicar);
    dividirbtn.addEventListener("click", dividir);
    limparbtn.addEventListener("click", limpar);
    divres.innerHTML = history;
})


function somar() {
    const opr = document.getElementById("operacao");
    const divres = document.getElementById("resultado");
    var valor1 = parseInt(document.getElementById("entrada1").value);
    var valor2 = parseInt(document.getElementById("entrada2").value);
    var resultado = valor1 + valor2;
    opr.innerText = "+";
    divres.innerHTML =  valor1 + " + " + valor2 + " = " + resultado + "<br>" + divres.innerHTML;
    localStorage.setItem("history", divres.innerHTML);
}

function subtrair() {
    const opr = document.getElementById("operacao");
    const divres = document.getElementById("resultado");
    var valor1 = parseInt(document.getElementById("entrada1").value);
    var valor2 = parseInt(document.getElementById("entrada2").value);
    var resultado =  valor1 - valor2;
    opr.innerText = "-";
    divres.innerHTML =  valor1 + " - " + valor2 + " = " + resultado + "<br>" + divres.innerHTML;
    localStorage.setItem("history", divres.innerHTML);
}

function multiplicar() {
    const opr = document.getElementById("operacao");
    const divres = document.getElementById("resultado");
    var valor1 = parseInt(document.getElementById("entrada1").value);
    var valor2 = parseInt(document.getElementById("entrada2").value);
    var resultado = valor1 * valor2;
    opr.innerText = "x";
    divres.innerHTML =  valor1 + " x " + valor2 + " = " + resultado + "<br>" + divres.innerHTML;
    localStorage.setItem("history", divres.innerHTML);
}

function dividir() {
    const opr = document.getElementById("operacao");
    const divres = document.getElementById("resultado");
    var valor1 = parseInt(document.getElementById("entrada1").value);
    var valor2 = parseInt(document.getElementById("entrada2").value);
    var resultado = valor1 / valor2;
    opr.innerText = "÷";
    divres.innerHTML =  valor1 + " ÷ " + valor2 + " = " + resultado + "<br>" + divres.innerHTML;
    localStorage.setItem("history", divres.innerHTML);
}

function limpar() {
    const divres = document.getElementById("resultado");
    divres.innerHTML = "";
    localStorage.setItem("history", divres.innerHTML);
}
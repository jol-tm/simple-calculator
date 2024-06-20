$(document).ready(function(e) {
    $('#somar').on('click', somar);
    $('#subtrair').on('click', subtrair);
    $('#multiplicar').on('click', multiplicar);
    $('#dividir').on('click', dividir);
    $('#limpar').on('click', limpar);    
    $('#resultado').html(localStorage.getItem("history"));
});

let conteudo;

function somar() {
    let valor1 = parseInt($('#entrada1').val());
    let valor2 = parseInt($('#entrada2').val());
    let resultado = valor1 + valor2;
    conteudo = '';
    conteudo += valor1 + " + " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('+');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function subtrair() {
    let valor1 = parseInt($('#entrada1').val());
    let valor2 = parseInt($('#entrada2').val());
    let resultado = valor1 - valor2;
    conteudo = '';
    conteudo += valor1 + " - " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('-');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function multiplicar() {
    let valor1 = parseInt($('#entrada1').val());
    let valor2 = parseInt($('#entrada2').val());
    let resultado = valor1 * valor2;
    conteudo = '';
    conteudo += valor1 + " x " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('x');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function dividir() {
    let valor1 = parseInt($('#entrada1').val());
    let valor2 = parseInt($('#entrada2').val());
    let resultado = valor1 / valor2;
    conteudo = '';
    conteudo += valor1 + " ÷ " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('÷');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function limpar() {
    conteudo = '';
    $('#resultado').html('');
    localStorage.setItem("history", conteudo);
}
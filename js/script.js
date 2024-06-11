$(document).ready(function(e) {
    $('#somar').on('click', somar);
    $('#subtrair').on('click', subtrair);
    $('#multiplicar').on('click', multiplicar);
    $('#dividir').on('click', dividir);
    $('#limpar').on('click', limpar);    
    $('#resultado').html(localStorage.getItem("history"));
});

var conteudo;

function somar() {
    var valor1 = parseInt($('#entrada1').val());
    var valor2 = parseInt($('#entrada2').val());
    var resultado = valor1 + valor2;
    conteudo = '';
    conteudo += valor1 + " + " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('+');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function subtrair() {
    var valor1 = parseInt($('#entrada1').val());
    var valor2 = parseInt($('#entrada2').val());
    var resultado = valor1 - valor2;
    conteudo = '';
    conteudo += valor1 + " - " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('-');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function multiplicar() {
    var valor1 = parseInt($('#entrada1').val());
    var valor2 = parseInt($('#entrada2').val());
    var resultado = valor1 * valor2;
    conteudo = '';
    conteudo += valor1 + " x " + valor2 + " = " + resultado + "<br>" + $('#resultado').html();
    $('#operacao').text('x');
    $('#resultado').html(conteudo);
    localStorage.setItem("history", conteudo);
}

function dividir() {
    var valor1 = parseInt($('#entrada1').val());
    var valor2 = parseInt($('#entrada2').val());
    var resultado = valor1 / valor2;
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
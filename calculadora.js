// declaração da função de somar
let operador = '';
let numero1;
let numero2;
let resultado;

function calculadora() {

    // entrada de operação selecionadas
    operador = document.querySelector("#slcoperador").value;

    // alert('o operador selecionado foi' + operador);

    // verificar se é o operador soma

    if (operador == '+') {
        // alert('voce escolheu a operaçao soma')
        somar()
    }
    // verificar se é o operador subtração
    if (operador == '-') {
        // alert('voce escolheu a operaçao subtração')
        subtrair()
    }
    // verificar se é o operador multiplicação
    if (operador == '*') {
        //  alert('voce escolheu a operaçao multiplicação')
        multiplicar()
    }
    // verificar se é o operador divisão
    if (operador == '/') {
        // alert('voce escolheu a operaçao divisão')
        dividir()
    }
}
function somar() {

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);

    resultado = numero1 + numero2;

    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO:'+ resultado);
}
function subtrair() {

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);

    resultado = numero1 - numero2;

    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO:'+ resultado);
}
function multiplicar() {

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);

    resultado = numero1 * numero2;

    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO:'+ resultado);
}
function dividir() {

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);

    resultado = numero1 / numero2;

    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO:'+ resultado);
}

// tratamento das imagens dos operadores

let select = document.querySelector('#slcoperador');

select.addEventListener('change', function () {
    // alert('teste 123');
    let imgOperacao = document.querySelector('#imgOperacao');
    let op = select.options[select.selectedIndex].value;

    if (op == '+') {
        imgOperacao.setAttribute('src', 'img/adicionar.png');
    }
    if (op == '-') {
        imgOperacao.setAttribute('src', 'img/subtracao.png');
    }
    if (op == '*') {
        imgOperacao.setAttribute('src', 'img/multiplicacao.png')
    }
    if (op == '/') {
        imgOperacao.setAttribute('src', 'img/divisao.png')
    }
});
// função de limpar formulario

function limpar(){
    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
    document.querySelector('#resultado').innerHTML = '';
}

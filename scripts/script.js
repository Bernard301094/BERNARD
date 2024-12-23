const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

let result = document.querySelector('#result');
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

botonNumeros.forEach(boton => {
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(boton => {
    boton.addEventListener('click', function() {
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function() {
        calcular();
        actualizarDisplay();
});

botonDelete.addEventListener('click', function() {
    clear();
    actualizarDisplay();
})

function selectOperacion(op) {
    if(operacionActual === '') return;
    if(operacionAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
    
}

function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {  
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = operacionActual;
}

clear();
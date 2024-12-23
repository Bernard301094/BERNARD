const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

let result = document.querySelector('#result');

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
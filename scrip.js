let pantalla = document.getElementById('pantalla');

function agregar(valor) {
    if (pantalla.value === "0") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function operar(operador) {
    pantalla.value += operador;
}

function limpiar() {
    pantalla.value = "0";
}

function calcular() {
    try {
        // eval() toma lo que hay en pantalla y hace la matemática
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }
}

function borrar() {
    pantalla.value = pantalla.value.slice(0, -1);
}
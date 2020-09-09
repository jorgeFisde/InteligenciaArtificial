"use strict";

const cad_inicial = 'abcdegf', objetivo = 'abcdefg';


function cambio() {
    return 'aqui se hace el cambo machin o k';
}

console.log(cambio());

var machin = cad_inicial.split(''); // separar el string en array
var hola = machin.shift(); // shift saca el primer elemento y lo asignamos a hola
machin.push(hola); // lo agregamos a la ultima pocicion del arreglo
console.log(machin);

class padres {
    constructor(idPadre, arregloDeHijos, identificador) {
        this.arregloDeHijos = arregloDeHijos;
        this.idPadre = idPadre;
        this.identificador = identificador;
    }
    setIdentificador(nuevoIdentificador) {
        this.identificador = nuevoIdentificador;
    }
}

var arregloDePadres = [];
var cadenaInicial =  "gbdafhcie";
var cadenaObjetivo = "abcdefghi";
var flag = true;
var arregloCamino = [];

function voltearCadena(cadena) {
    let arregloDeCadenas = [];
    for (let index = 0; index < cadena.length - 1; index++) {
        var cadenaVolteada = cadena.slice(0, index) + cadena.slice(index).split('').reverse().join('');
        arregloDeCadenas.push(cadenaVolteada);
    }
    return arregloDeCadenas;
}
//VERIFICACION DE CADENA A ORDENAR
if (cadenaInicial == cadenaObjetivo) {
    console.log("La cadena ya esta ordenada")
} else {
    var cadenaOrdenadaPadreOri = false;
    //PRIMER PADRE
    var padreOri = new padres(cadenaInicial, voltearCadena(cadenaInicial), false);
    arregloDePadres.push(padreOri);
    //BUSQUEDA DE SOLUCION EN PRIMER PADRE
    for (let index = 0; index < padreOri.arregloDeHijos.length; index++) {
        if (padreOri.arregloDeHijos[index] == cadenaObjetivo) {
            cadenaOrdenadaPadreOri = true
        }
    }
    if (cadenaOrdenadaPadreOri == true) {
        arregloCamino.push(cadenaObjetivo);
        arregloCamino.push(cadenaInicial);
    } else {
        //CREACION DE PADRES E HIJOS
        var objPadreFinal;
        CreacionDePadres: {
            while (flag == true) {
                let auxArreglo = [];
                let auxArreglo2 = [];
                for (let j = 0; j < arregloDePadres.length; j++) {

                    if (arregloDePadres[j].identificador == false) {

                        for (let i = 0; i < arregloDePadres[j].arregloDeHijos.length; i++) {

                            let auxArreglo3 = voltearCadena(arregloDePadres[j].arregloDeHijos[i]);
                            let padre = new padres(arregloDePadres[j].arregloDeHijos[i], voltearCadena(arregloDePadres[j].arregloDeHijos[i]), false);
                            auxArreglo.push(padre);
                            //BUSQUEDA DE CADENA ORDENADA
                            for (let x = 0; x < auxArreglo3.length; x++) {

                                if (auxArreglo3[x] == cadenaObjetivo) {
                                    aux = true;
                                    objPadreFinal = padre;
                                    flag = false;
                                    console.log("Encontrado")
                                    arregloDePadres[j].setIdentificador(true);
                                    auxArreglo2 = [];
                                    auxArreglo2 = arregloDePadres.concat(auxArreglo);
                                    arregloDePadres = auxArreglo2;
                                    arregloCamino.push(auxArreglo3[x]);
                                    break CreacionDePadres;
                                }
                            }
                            auxArreglo3 = [];
                        }
                        arregloDePadres[j].setIdentificador(true);
                    }
                }
                auxArreglo2 = [];
                auxArreglo2 = arregloDePadres.concat(auxArreglo);
                arregloDePadres = auxArreglo2;
            }
        }

        flag = true;
        //BUSQUEDA DE CAMINO
        while (flag) {
            ciclosBusqueda: {
                for (let j = 0; j < arregloDePadres.length; j++) {
                    for (let i = 0; i < arregloDePadres[j].arregloDeHijos.length; i++) {
                        if (objPadreFinal.idPadre == arregloDePadres[j].arregloDeHijos[i] && arregloDePadres[j].identificador == true) {
                            objPadreFinal = arregloDePadres[j];
                            arregloCamino.push(arregloDePadres[j].arregloDeHijos[i]);
                            break ciclosBusqueda;
                        }
                    }
                }
            }
            if (objPadreFinal.idPadre == cadenaInicial) {
                arregloCamino.push(objPadreFinal.idPadre);
                flag = false;
            }
        }
    }

    console.log("Camino: " + arregloCamino.reverse().join(' > '));
    console.log(arregloDePadres);
}
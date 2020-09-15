class Nodo {
    constructor() {
        this.dato = null
        this.hijo = null
        this.padre = null
    }
    asignarDato(data) {
        this.dato = data
    }
    agregarHijo(arr) {
        this.hijo = arr
    }
    agregarPadre(par) {
        this.padre = par
    }
    obtenerHijos(index) {
        return this.hijo[index]
    }
    obtenerPadre() {
        return this.padre
    }
    obternerDato() {
        return this.dato
    }
}


function addHijos(nodo) {

    const arrayHijos = []

    for (let i = nodo.obternerDato().length - 1; i >= 1; i--) {
        var fin = nodo.obternerDato().slice(i - nodo.obternerDato().length - 1).split('').reverse().join('')
        var inicio = nodo.obternerDato().slice(0, i - nodo.obternerDato().length - 1)

        var hijo = new Nodo()
        hijo.asignarDato(inicio.concat(fin).trim())
        hijo.agregarPadre(nodo.obternerDato())

        arrayHijos.push(hijo)


    }
    nodo.agregarHijo(arrayHijos)

    //nodo_temporal = nodo_temporal.hijo
    // addHijos(nodo.obtenerHijos(cont))

}
const head = new Nodo()
const solucion = 'abcdefg'
head.asignarDato('gbdafce')
addHijos(head)



var nodo_temporal = head.hijo

// var cont = 0
// while (nodo_temporal[cont]  || nodo_temporal[cont].obternerDato() == 'abcdefg') {
//     //console.log(nodo_temporal[cont].obternerDato());
//     console.log(cont);
//     addHijos(nodo_temporal[cont])

//     cont++
// }
// var i = 0
// nodo_temporal.forEach(element => {
//     if (element.obternerDato() == 'abcdefg') {
//         console.log('tiu');
//         return element.obternerDato()
//     } else {
//         //console.log(element);
//         addHijos(element)
//     }
//     // if (i == nodo_temporal.length - 1) {
//     //     console.log('hola');
//     //     nodo_temporal = nodo_temporal.hijo
//     // }
//     // i++
// });

function rec(nodo) {

    nodo.forEach(element => {
        // if (element.obternerDato() == 'abcdefg') {
        //     console.log('tiu');
        //     return element.obternerDato()
        // } else {
        //console.log(element);
        addHijos(element)
        //console.log(element.obternerDato());
        if (element.obternerDato() == 'abcdefg') {
            console.log('hola');
            return
        } else {
            //console.log(element.hijo[0]);
            //console.log(element);
            // rec(element.hijo)

        }

        // }
        // if (i == nodo_temporal.length - 1) {
        //     console.log('hola');
        //     nodo_temporal = nodo_temporal.hijo
        // }
        // i++
    });
}
var cont = 0, seg = 0, ter = 0
while (nodo_temporal[cont]) {
    //var retroceder = nodo_temporal[ter]
    addHijos(nodo_temporal[cont])

    if (cont == nodo_temporal.length - 1) {
        var retroceder = nodo_temporal[ter]
        console.log(retroceder);

        console.log(nodo_temporal);

        if (seg == 6) {
            console.log('machhhhhh');
            //nodo_temporal = retroceder

            ter++
            seg = 0
            cont = ter

            if (ter == 6) {
                console.log('machin 2');
                ter = 0
                nodo_temporal = retroceder

            }
            continue
        }
        addHijos(nodo_temporal[seg])

        //nodo_temporal = nodo_temporal[seg].hijo
        //nodo_temporal = nodo_temporal[seg].hijo
        

        seg++
        cont = 0
    }
    if (nodo_temporal[cont].obternerDato() == 'abcdefg') {
        console.log('tiu');
        return element.obternerDato()
    }

    cont++


}
// rec(nodo_temporal)



// head.hijo.forEach(element => {
//     console.log(element);
// });
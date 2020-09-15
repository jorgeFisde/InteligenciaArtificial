class Ndsfodo {
    constructor(data) {
        this.data = data
        this.next = null
        this.child = null
        this.numChild = 0
    }


    obtenerValor() {
        return this.data
    }
    obtenerSigiente() {
        return this.next
    }
    obtenerHijo() {
        return this.child
    }
    addNext(nodo) {
        this.next = nodo
    }
    addChild(nodo) {
        this.child = nodo
        this.numChild++
    }
}

class Arbol {
    constructor() {
        this.head = null
        this.indexArbol = 0
    }

    addNodo(data) {
        if (this.head == null) {
            this.head = new Nodo(data)
            this.indexArbol++
        } else {
            var nuevo = new Nodo(data)
            var ultimo = this.head
            while (ultimo.next) {
                ultimo = ultimo.next
            }
            ultimo.addNext(nuevo)
        }
    }
    obtemerValor(index) {
        var cont = 0
        var nodo_temporal = this.head
        while (cont < index) {
            cont++
            nodo_temporal = nodo_temporal.obtenerSigiente()
        }
        return nodo_temporal
    }
    addChild(data, index) {
        var cont = 0
        var nuevo = new Nodo(data)
        var ultimo = this.head
        while (cont < index) {

            ultimo = ultimo.obtenerSigiente()
            cont++
        }
        if (ultimo.obtenerHijo() != null) {
            var hijastro = ultimo.child
            while (hijastro.obtenerSigiente()) {
                hijastro = hijastro.obtenerSigiente()
            }
            hijastro.addNext(nuevo)
        } else {
            ultimo.addChild(nuevo)
        }


    }
    obtenerChild(index,index2) {
        var cont = 0
        var nodo_temporal = this.head
        while (cont < index) {
            cont++
            nodo_temporal = nodo_temporal.obtenerSigiente()
        }
        cont = 0
        nodo_temporal = nodo_temporal.obtenerHijo()
        while (cont < index2 && nodo_temporal.obtenerSigiente()) {
            nodo_temporal = nodo_temporal.obtenerSigiente()
        }
        return nodo_temporal
    }
}




function añadirNodo(nodo) {
    var cnt = 0
    console.log(cnt);
    for (let i = nodo.length - 1; i >= 1; i--) {
        var fin = nodo.slice(i - nodo.length - 1)
        var inicio = nodo.slice(0, i - nodo.length - 1)
        var fin_reverso = fin.split('').reverse().join('')
        padre.addNodo(inicio.concat(fin_reverso).trim())
        console.log(inicio, fin, '=', inicio.concat(fin_reverso));
        // var node = padre.obtemerValor(cnt)
        // añadirHijos(node, cnt)
        // var inde = padre.obtemerValor(cnt).obtenerHijo()
        // var cent = 0
        // while (inde.obtenerSigiente()) {
        //     //console.log(cent);
        //     console.log('hola..', inde.data);
        //     //añadirHijos(inde.data,cent)
        //     inde = inde.obtenerSigiente()
        //     cent++
        // }


        cnt++
    }
}
function añadirHijos(nodo, contador_nodos) {
    // while (padres.obtemerValor(contador_nodos).next) {
    //var nodo = padres.obtemerValor(contador_nodos).data
    var neoC = 0
    var space = '       '
    for (let i = nodo.data.length - 1; i >= 1; i--) {
        
        var fin = nodo.data.slice(i - nodo.data.length - 1)
        var inicio = nodo.data.slice(0, i - nodo.data.length - 1)
        var fin_reverso = fin.split('').reverse().join('')
        padre.addChild(inicio.concat(fin_reverso).trim(), contador_nodos)
        console.log(space, inicio, fin, '=', inicio.concat(fin_reverso));
        //var neoN = padre.obtenerChild(contador_nodos)
        //añadirNodo(neoN.data)
        // console.log(neoN.data);
        // console.log('-----------------------------------');
        // while (neoN.child) {
        //     console.log('holaaaaaaaaaaa');
        //     //añadirNodo(neoN.data)
        //     añadirHijos(neoN, neoC)
        //     neoN = neoN.child
        // }
        
        //space+= '       '
        neoC++
    }
    //     contador_nodos++
    // }
}

//
// padre.addNodo('padre')
// padre.addChild('hijo 1',0)
// padre.addChild('hijo 2',0)
// padre.obtenerChild(0,1).addChild(new Nodo('nieto'))
// console.log(padre.obtenerChild(0, 0));
var str = 'dbca'
const padre = new Arbol()
console.log(str);

añadirNodo(str)
var head = padre.obtemerValor(contador), contador = 0
while (head) {
    console.log('PADRE:', head.data);
    añadirHijos(head, contador)
    
    // var mijo = head.obtenerChild(contador,contador)
    var segun = 0
    var nuevo = padre.obtenerChild(contador,0)
    while (nuevo && segun < nuevo.data.length - 1) {
        console.log('HIJO de:' , nuevo.data , ' NIETO de:', head.data);
        añadirHijos(nuevo,segun)
        
        nuevo = nuevo.obtenerSigiente()
        segun++
    }
    console.log('--------------------------------');
    head = head.obtenerSigiente()
    contador++
}

var rs = padre.obtemerValor(0)
while (rs) {
    console.log(rs.data);
    console.log(rs.child);
    rs = rs.obtenerSigiente()
}


// ULTIMO INTENTO DEL DIA

function construccion_de_combinaciones(nodo) {
    for (let i = nodo.data.length - 1; i >= 1; i--) {
        var fin = nodo.data.slice(i - nodo.data.length - 1)
        var inicio = nodo.data.slice(0, i - nodo.data.length - 1)
        var fin_reverso = fin.split('').reverse().join('')
        return inicio.concat(fin_reverso).trim()
        padre.addChild( contador_nodos)
        console.log(space, inicio, fin, '=', inicio.concat(fin_reverso));
    }
}
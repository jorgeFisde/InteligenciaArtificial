/**
    Jorge Fisher
*/

const limit = 20,array = []

function serieFibonacci(params) {// PARAMS ES EL NUMERO DE LA SERIE QUE DESEA MOSTRAR
    for (let i = 0; i < limit; i++) {
        if (i >= 2) {
            array.push(array[i - 1] + array[i - 2])
        }else{
            array.push(i)
        }
        
    }
    console.log(array[params]);
}

serieFibonacci(10)

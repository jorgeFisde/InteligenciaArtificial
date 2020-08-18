/**
    Jorge Fischer
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




// RECURSIVO

function fiboncciRecursivo(number) {

    if (number == 1) {
        return 0
    }
    if (number == 2 ) {
        return 1
    }

    return  fiboncciRecursivo(number - 1) + fiboncciRecursivo(number - 2)
    
}

const numb = 5
console.log(`El fibonacci numero ${numb} es:` ,fiboncciRecursivo(numb));
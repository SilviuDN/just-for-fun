// 1. Implementar la función sumaArray para calcular la suma de los elementos de un array numérico:
// function sumaArray($ar) {}
// Ejemplos de arrays a pasar en la función:
// 	var lista1 = [1, 4, 3, 0];
// 	var lista2 = [1, 2, [5, 8], 4];
// 	var lista3 = [0, [6, 2], null, 7, 1];




const sumaArray1 = arr => {
    return numbersArraySum( reduceToAllNumbersArray(arr) )
}

// add elements in a numbers array
const numbersArraySum = (arr) => {
    if(arr.length === 0 ){
        return 0
    }
    return arr.reduce((sum, el) =>  sum + el )
}

// eliminate [] one level deep
const concatArray = arrays => {
    return [].concat.apply([], arrays)
}

// eliminate nulls from array
const strikeNulls = (arr) => {
    return arr.filter( el => el !== null)
}

// verify if the input is an all numbers array
// the logical condition for .every() method woul be ( typeof el === 'number' || typeof el === 'bigint' ) if precision if not an issue
const isNumbersArray = (arr) => {
    return arr.every( el => ( typeof el === 'number' ))
}

// we eliminate all parentheses
const reduceToAllNumbersArray = (arr) => {
    while ( !isNumbersArray(arr)){
        arr = [...concatArray( strikeNulls ( arr ))]
    }
    return arr
}


// const temp = [ [], [ [], [] ] ]
// const temp = [1, [4, 3], 0]
// const temp = concatArray([1, [4, 3], 0])
// const temp = concatArray([1, null, 0])
// const temp = concatArray([1, [4, 3], null])
// const temp = concatArray([1, 0, [null, 10], [4, 3], null])
// const temp = concatArray([1, 0, [[null, 1, 2, 3], 10], [4, 3], null])

// console.log( sumaArray( temp ))


// 1. Implementar la función sumaArray para calcular la suma de los elementos de un array numérico:
// function sumaArray($ar) {}
// Ejemplos de arrays a pasar en la función:
// 	var lista1 = [1, 4, 3, 0];
// 	var lista2 = [1, 2, [5, 8], 4];
// 	var lista3 = [0, [6, 2], null, 7, 1];




const reduceToSingleLevelArray = (arr) => {
    return arr.toString().split(',')
}

const sumaArray = arr => {
    return arr.toString().split(',').reduce( (sum, el) => sum + (+el), 0)
}

// const temp = []
// const temp = [ [], [ [], [] ] ]
// const temp = [1, [4, 3], 0]
// const temp = concatArray([1, [4, 3], 0])
// const temp = concatArray([1, null, 0])
// const temp = concatArray([1, [4, 3], null])
// const temp = concatArray([1, 0, [null, 10], [4, 3], null])

// concatArray is defined in tarea01-metodo02.js
const temp = concatArray([1, 0, [[null, 1, 2, 3], 10], [4, 3], null])

console.log( sumaArray( temp ))
const text ='   al t \n     \n'


// console.log(text.trim().length)
// console.log(text.replaceAll(' ','').length)
// const regexp = / |  |\n/ig
const regexp = /\s/g
console.log(text.replaceAll(regexp,'').length)

const addButton = document.querySelector('button.agregar')
const newFruitInput = document.getElementById('nombre_fruta')
const fruitsList = document.querySelector('ul')
const listOfLisButtons = document.querySelectorAll('li button')

listOfLisButtons.forEach( button => button.addEventListener('click', () => {
    button.parentElement.remove()
}
))

addButton.addEventListener('click', e => {
    const newLi = createListItem(newFruitInput.value)
    const button = newLi.childNodes[1]

    button.addEventListener( 'click', () => {
        button.parentElement.remove()
    })

    fruitsList.appendChild( newLi )
    newFruitInput.value=''

})

const createListItem = (text) => {
    const newListItem = document.createElement('li')
    newListItem.innerHTML = text + '<button type="button">Borrar</button>'
    return newListItem
}
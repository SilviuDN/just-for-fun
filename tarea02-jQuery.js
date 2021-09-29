$('li button').each( function(index){
    console.log(this)
    $(this).click( () => {
        $(this).parents('li').remove()
    })
} 
)

$('button.agregar').click( e => {
    const newLi = createListItem( $('#nombre_fruta').val() )

    $(newLi).find('button').click( function(){
        $(this).parents('li').remove()
    })

    $('ul').append( newLi )
    $('#nombre_fruta').val('')

})

const createListItem = (text) => {
    this.$newListItem = $('<li></li>')
        .append(text + ' ')
        .append($('<button type="button">Borrar</button>'))

    return $newListItem
}


$(document).ready(function () {
    let addListInput = $('.addListWrapper input');
    let addListButton = $('.addListWrapper button');
    const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}`;
    const createListString = name =>
        `<div class="list" id="${generateId('list')}">
            <div class="listHeader">
                <h4>${name}</h4>
                <button type="button" class="close">X</button>
            </div>
            <div class="tasks">
               
            </div>
            <div class="addTask">
                <input type="text">
                <button type="button" class="suma">Add task</button>
            </div>
        </div>`

    const appendNewList = () => {
        //  cogemos el text del input si no esta vacio y le quitamos 
        //los espacios por la parte de la derecha.
        if (addListInput.val() === '') {
            return;
        }
        let listName = addListInput.val().trim();

        // creamos el nodo .list
        let list = $(createListString(listName));

        // añadimos el node al DOM
        $('.lists').append(list);

        // Limpiamos el texto del input
        addListInput.val('');
    }
        // Listeners
    addListInput.on('keyup', function (event) {
        if (event.keyCode === 13) {
            appendNewList();
        }
    })
   
    $('.lists').on('click', '.listHeader', function (event) {
        let listNode = $(event.target.parentNode.parentNode);
        listNode.detach();
    })

})
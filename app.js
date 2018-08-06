/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  Listas  //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    let addListInput = $('.addListWrapper input');
    let addListButton = $('.addListWrapper button');
    const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}`;
    const createListString = name =>
        `<div class="list" id="${generateId('list')}">
            <div class="listHeader">
                <h4>${name}</h4>
                <button type="button">X</button>
            </div>
            
            <div class="addTask">
                <input type="text">
                <button type="button">Add task</button>
            </div>

            <div class="tasks">
               
            </div>
        </div>`

    const appendNewList = () => {
        //  cogemos el text del input si no esta vacio y le quitamos 
        //los espacios por la parte de la derecha.
        if (addListInput.val().trim() === '') {
            return addListInput.val('');
        }
        let listName = addListInput.val();

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
    });

    addListButton.on('click', function () {
        appendNewList();
    });

    $('.lists').on('click', '.listHeader', function (event) {
        let listNode = $(event.target.parentNode.parentNode);
        listNode.detach();
    })
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////   Tareas   ///////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////

    let addTaskInput = $('.addTask input');
    let addTaskButton = $('.addTask button');

    const createTaskString = name =>
        `<div class="task">
            <div class="taskbody">
                <h6>${name}</h6>
                <button type="button">X</button>
            </div>
        </div>`

    const appendNewTask = (e) => {
        //  cogemos el text del input si no esta vacio y le quitamos 
        //los espacios por la parte de la derecha.
        if (addTaskInput.val().trim() === '') {
            return;
        }
        let taskName = addTaskInput.val();

        // creamos el nodo .task
        let task = $(createTaskString(taskName));

        // añadimos el node al DOM
        e.target.parentNode.parentNode.queryselector('.tasks').append(task);
        // Limpiamos el texto del input
        addTaskInput.val('');
    }
    // Listeners

    $(document).on('keyup', '.addTask input', function (event) {
        if (event.keyCode === 13) {
            appendNewTask(event);
        }
    });

    $(document).on('click', '.addTask button ', function (e) {
        appendNewTask(e);
    });

    $(document).on('click', '.taskbody button', function (event) {
        let taskNode = $(event.target.parentNode.parentNode);

        taskNode.detach();
    })

})
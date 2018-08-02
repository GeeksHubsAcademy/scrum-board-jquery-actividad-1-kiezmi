$(document).ready(function () {
    let addListInput = $('.addListWrapper input');
    const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}`
    const createListString = name =>
        `<div class="list" id="${generateId('list')}">
            <div class="listHeader">
                <h4>${name}</h4>
                <button type="submit">X</button>
            </div>
            <div class="tasks">
               
            </div>
            <div class="addTask">
                <input type="text">
                <button>Add task</button>
            </div>
        </div>`

    const appendNewList = () => {
        //  cogemos el text del input
        let listName = addListInput.val();

        // creamos el nodo .list
        let list = $(createListString(listName));

        // añadimos el node al DOM
        $('.lists').append(list)

        // Limpiamos el texto del input
        addListInput.val('');
    }

    /* const appendNewTasks = () => {
        //  cogemos el text del input
        let tasksName = addTasksInput.val();

        // creamos el nodo .task
        let tasks = $(createTasksString(tasksName));

        // añadimos el node al DOM
        $('.task').append(tasks)

        // Limpiamos el texto del input
        addTasksInput.val('');
    } */


    // Listeners
    addListInput.on('keyup', function (event) {
        if (event.keyCode === 13) {
            appendNewList();
        }
    })

    /*  addListButton.on('click', function (event) {
         // if (event.keyCode === 13) {
         appendNewList();
         // }
     }) */

    $('.lists').on('click', '.listHeader button', function (event) {
        let listNode = $(event.target.parentNode.parentNode);
        listNode.detach();
    })
    addTasksInput.on('keyup', function (event) {
        if (event.keyCode === 13) {
            appendNewTasks();
        }

    //     $('.task').on('click', '.task button', function (event) {
    //         let listNode = $(event.target.parentNode.parentNode);
    //         listNode.detach();
     })



})
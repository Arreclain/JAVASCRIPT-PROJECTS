//This function gets the task from input
function get_todos() {
    //New array of tasks that are inputed.
    var todos = new Array;
    //pulls todos from server memory.
    var todos_str = localStorage.getItem('todo');
    //If object isn't null, parse it to make it an object.
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This function adds the inputed task to the get_todos function array
function add() {
    //This takes the inputed task and creates a variable of it.
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //This adds a new task to the end of the array.
    todos.push(task);
    //This convers the task input into a JSON string.
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*This function removes items from the list when the x button is clicked.*/
function remove(a) {
    var id = a.getAttribute('id');
    var todos = get_todos();

    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*Functionally this refreshes the page after an item has been removed. */
    show();

    return false;
}

//This function keeps task permanently displayed on screen
function show() {
    //sets retrieved task as a variable.
    var todos = get_todos();


    //This sets up each task as an unordered list.
    var html = '<ul>';
    //This inputs and displays a task in the order it is inputed.
    for (var i = 0; i < todos.length; i++) {
        //Displays the task as a list and creates the x button
        html += '<li>' + todos[i] + '<button class="remove" onclick="remove(this)" id="' +
            i + '">x</button></li>';
    };
    html += '</ul>';
    //This displays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    //This tells the browser how to display the todo array after an item has been removed.
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}


//This displays the inputed task when the 'ADD ITEM' button is clicked.
document.getElementById('add').addEventListener('click', add);
//This will keep the inputs displayed permanently on the screen.
show();
// log to make sure we're connected to html
console.log('js is linked to html');

$( document ).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    // add event listeners
    $('#add-task-btn').on('click', handleAddTaskButton);
    $('#task-list').on('click', '.complete-btn', handleCompleteButton);
    $('#task-list').on('click', '.delete-btn', handleDeleteButton);
    // add GET function to retrieve
    getTasks();
} // end onReady function

// add event handlers

// task button handler
function handleAddTaskButton(){
    console.log('add-task-btn has been clicked!');

    // store user values in a variable
    let taskToAdd = {
        task: $('#user-input').val()
    };

    // call POST function addTasks() to add to database
    addTask(taskToAdd);

} // end handleAddTaskButton function

// complete button handler
function handleCompleteButton() {
    console.log('complete-btn has been clicked!');
} // end handleCompleteButton function

// delete button handler
function handleDeleteButton() {
    console.log('delete-btn has been clicked!');
} // end handleDeleteButton function

// GET
function getTasks() {
    console.log('in getTasks()');
    // AJAX call to server to get tasks
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then((response) => {
        // create console log to make sure GET route is working
        console.log('GET /todo response: ', response);
        // render task list
        render(response);
    })
}

// POST
function addTask(newTask) {
    console.log('in addTask(); newTask is: ', newTask );
    // AJAX call to server/router to POST user data

    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTask
    }).then((response) => {
        //Empty the input values
        $('#user-input').val(''),
        // use GET route to populate task-list
        getTasks(response);
        console.log('My response in POST request: ', response);
        // catch any errors
    }).catch((error) => {
        console.log('Error in POST request - addTask(): ', error);
    });
}

// DELETE

// PUT


// Create Render Function
function render(tasks){
    console.log('tasks are: ', tasks);
    // empty the current list
    $('#task-list').empty();
    // loop through tasks and append them to the DOM
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        $('#task-list').append(`
        <tr data-id=${task.id}>
            <td>${task.task}</td>
            <td><button class="complete-btn">Mark Complete</button></td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>
        `)
    }
}; // end Render Function
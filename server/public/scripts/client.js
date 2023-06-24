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
} // end onReady function

// add event handlers

// task button handler
function handleAddTaskButton(){
    console.log('add-task-btn has been clicked!');
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
        render();
    })
}

// POST

// DELETE

// PUT


// Create Render Function
function render(tasks){
    // empty the current list
    $('#task-list').empty();
    // loop through tasks and append them to the DOM
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        $('#task-list').append(`
        <li data-id=${task.id}>
        ${task.task}
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
        </li>
        `)
    }
}; // end Render Function
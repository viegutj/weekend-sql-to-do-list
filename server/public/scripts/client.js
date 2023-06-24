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
}

// add event handlers

// task button handler
function handleAddTaskButton(){
    console.log('add-task-btn has been clicked!');
}

// complete button handler
function handleCompleteButton() {
    console.log('complete-btn has been clicked!');
}

// delete button handler
function handleDeleteButton() {
    console.log('delete-btn has been clicked!');
}

// Create Render Function
function render(){
    $('#task-list').append(`
    <li>
    Task
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
    </li>
    `);
};
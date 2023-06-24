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


// DELETE
// delete button handler
function handleDeleteButton() {
    console.log('delete-btn has been clicked!');
    // use DOM traversal to get the data-id of the task table row
    const taskId = $(this).parent().parent().data("id");
    
    //send an AJAX delete request to the server
    $.ajax({
        method: 'DELETE',
        url: `/todo/${taskId}`
    }).then ((response) => {
        console.log('deleted a task');
        getTasks();
    }).catch((error) => {
        console.log('Error in delete request - deleteTask()', error);
        // Notifies the user with an alert window
        alert('error with deleting a task!')
    })
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
} // end getTasks function

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
} // end addTask function

// PUT
// complete button handler
function handleCompleteButton() {
    console.log('complete-btn has been clicked!');
    console.log('this is: ', $(this));
    const taskId = $(this).parent().parent().data('id');
    console.log('taskId is: ', taskId);

    $.ajax({
        method: 'PUT',
        url: `/todo/${taskId}`
    }).then((response) => {
        console.log('Task completed! Response: ', response);
        // is this what our GET with specific ID is for in
        // our router
        getTasks(response);
    }).catch((error) => {
        console.log('Error marking complete in PUT', error);
        alert('Complete status NOT updated!');
        res.sendStatus(500);
    })
} // end handleCompleteButton function


// Create Render Function
function render(tasks){
    console.log('tasks are: ', tasks);
    // empty the current list
    $('#task-list').empty();
    // loop through tasks and append them to the DOM
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let someClass; 
        if (task.isCompleted == true) {
            someClass = 'completed'
        }else{
            someClass = ''
        }
        if (task.isCompleted == true) {
        $('#task-list').append(`
        <tr data-id=${task.id} class="${someClass}">
            <td>${task.task}</td>
            <td>${task.isCompleted}
            <td>✅</td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>
        `);
        }else{
        $('#task-list').append(`
        <tr data-id=${task.id} class="${someClass}">
            <td>${task.task}</td>
            <td>${task.isCompleted}
            <td><button class="complete-btn">Mark Complete</button></td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>
        `);
        }
    }
}; // end Render Function
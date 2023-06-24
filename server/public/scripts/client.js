// log to make sure we're connected to html
console.log('js is linked to html');

$( document ).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    // add event listeners
    $('#add-task-btn').on('click', handlerAddTaskButton)
    // add GET function to retrieve
}

// add event handlers
function handlerAddTaskButton (){
    console.log('add-task-btn has been clicked!');
}

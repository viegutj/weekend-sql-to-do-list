***Base Mode TODO***

**Here are the specific components for the challenge:**
* [x] Create a front end experience that allows a user to create a Task.
    - [x] - Create an HTML file
    - [x] - Add needed elements - remember to add id to each!
        - [x] - h1: Weekend Project: SQL To-Do List
        - [x] - h2: Jonathan Viegut
        - [x] - h3: Add Task
        - [x] - input: User writes input task
        - [x] - button: Add Task
        - [x] - h3: to-do
        - [x] - ul: comment - tasks go here! (render() in client.js will add our rows of individualtasks)
    - [x] - Create a client.js file
    - [x] - Add event listeners
        - [x] - event listener for add tasks button 
        - [x] - event listener for complete button (event delegation!)
        - [x] - event listener for delete buttons ( event delegation!)
        - [x] - COMMIT!

* [x] Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. 
You will need to use this name in your database connection configuration on your server.
    - [x] - Create new database : `weekend-to-do-app`
    - [x] - Create columns for database

* [x] Set up back-end folder system
    - [x] - Create pool.js
    - [x] - Set up pool.js
    - [x] - COMMIT!
    - [x] - Create server.js
    - [x] - Set up server.js
    - [x] - COMMIT!
    - [x] - Create modules folder
    - [x] - Create router.js
    - [x] - Set up router.js
    - [x] - COMMIT!

* [x] Whenever a Task is created the front end should refresh to show all tasks that need to be completed. 
When the Task is created, it should be stored inside of a database (SQL)
    - [x] - Create GET route in client.js
    - [x] - Create GET route in router.js
    - [x] - COMMIT!
    - [x] - Create POST route in client.js
    - [x] - Create POST route in router.js
    - [x] - COMMIT!
    - [x] - Create render() function in client.js
    - [x] - COMMIT!

* [ ] Each Task should have an option to 'Complete' or 'Delete'.
    - [x] - Create GET route for a specific id
    - [x] - Create DELETE route in client.js
        Deleting a Task should remove it both from the front end as well as the Database.
    - [x] - Create DELETE route in router.js
    - [x] - COMMIT!
    - [x] - Create PUT route in client.js
        Whether or not a Task is complete should also be stored in the database.
    - [x] - Create PUT route in router.js
    - [ ] - COMMIT!

* [ ] When a Task is complete, its visual representation should change on the front end. 
For example, the background of the task container could change from gray to green. 
The complete option should be  'checked off'. Each of these are accomplished in CSS, 
but will need to hook into logic to know whether or not the task is complete.
    - [ ] - Create styles.css file in public folder
    - [ ] - CSS 'change class' when complete button is clicked - write in event handler function
            in client.js

* [ ] Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - [ ] background color of the page
  - [ ] font family and size
  - [ ] text color & or background color of tasks *to show whether or not they have been completed*
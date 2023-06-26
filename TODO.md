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

* [x] Each Task should have an option to 'Complete' or 'Delete'.
    - [x] - Create GET route for a specific id
    - [x] - Create DELETE route in client.js
        Deleting a Task should remove it both from the front end as well as the Database.
    - [x] - Create DELETE route in router.js
    - [x] - COMMIT!
    - [x] - Create PUT route in client.js
        Whether or not a Task is complete should also be stored in the database.
    - [x] - Create PUT route in router.js
    - [x] - COMMIT!

* [x] When a Task is complete, its visual representation should change on the front end. 
For example, the background of the task container could change from gray to green. 
The complete option should be  'checked off'. Each of these are accomplished in CSS, 
but will need to hook into logic to know whether or not the task is complete.
    - [x] - Create styles.css file in public folder
    - [x] - CSS 'change class' when complete button is clicked
            - NOTE: ended up using a variable instead of jQuery method

* [x] Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - [x] background color of the page
  - [x] font family and size
  - [x] text color & or background color of tasks *to show whether or not they have been completed*

### Stretch Mode TODO ###

## Stretch Goals

For each of your strech goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into main using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- [ ] `feature-styling-bootstrap` USE THIS BRANCH NAME

    - [x]  Add Bootstrap to the front end and style it up!
      -  [x] Buttons -- make the creation buttons and completion buttons green and the delete red.
      -   [ ] Inputs -- make your text inputs styled in the bootstrap way
      -   [ ] Responsive -- make your app responsive to different screen sizes --  [ ] check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`  USE THIS BRANCH NAME

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - [ ] Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query`  USE THIS BRANCH NAME

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- `feature-time-completed`  USE THIS BRANCH NAME

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.
        - [ ] do this in the backend; write this in the SQL that retrieves data from the database
const express = require('express');

// DB Connection
const pool = require('../modules/pool')
const router = express.Router();

// GET
    // GET all tasks from the database
router.get('/', (req, res) => {
    // write SQL query and save that in a variable
    let queryText = 'SELECT * FROM "weekend-to-do-app-table";';

    // send SQL query to the database using pool.query
    pool.query(queryText)
    // use 'result' as a parameter
    // for what is returned from database
        .then((result) => {
            console.log('result in router GET is: ', result);
            // result.rows is where the meat of the data is
            res.send(result.rows);
        }).catch ((error) => {
            console.log('error making query: ', error);
            res.sendStatus(500);
        })
});

// GET for specific id
router.get('/id', (req, res) => {
    // id is a router parameter
    console.log(req.params.id);
    // assign req.params.id to a variable
    const idToGet = req.params.id
    // write a SQL query that gets back the task
    // with the specified parameter (id)
    const query = `SELECT * FROM "weekend-to-do-app-table" WHERE id=$1;`;

    // use pool.query to connect server to database
    pool.query (query, [idToGet])

    // .then because query is asynchronous
    .then((result) => {
        // result.rows is where the desired part of the
        // result/response is
        console.log(`Song with id of ${idToGet}`, result.rows);
        //send data back to client
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error making database query: ', error);
        res.sendStatus(500);
    })
})

// POST
// take post request from client and append the database
router.post('/', (req, res) => {
    let newTask = req.body;

    // create queryText to insert data to our table
    let queryText = `INSERT INTO "weekend-to-do-app-table" ("task")
                    VALUES ($1);`;
    
    // store our arry of values as taskParams
    let taskParams = [newTask.task]

    // use pool.query as our connection to the database to send our query
    pool.query(queryText, taskParams)
    .then((response) => {
        console.log('ok response recieved:', response);
        // send an 'ok' status to client
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error occured in router POST: ', error);
        // send client server error message
        res.sendStatus(500);
    });
})

// PUT

// DELETE
router.delete('/:id', (req,res) => {
    let idToDelete = req.params.id;
    // use query parameterization to protect the
    // database from SQL injection
    let query = `DELETE FROM "weekend-to-do-list-table" WHERE "id"=$1;`;
    // use pool to communicate with database
    pool.query(query, [idToDelete])
    .then((results) => {
        console.log('task deleted');
        // Send 'ok' to client
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query in router.delete: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;
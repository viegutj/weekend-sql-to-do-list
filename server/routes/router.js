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

module.exports = router;
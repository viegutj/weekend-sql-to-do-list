const express = require('express');

// DB Connection
const pool = require('../modules/pool')
const router = express.Router();

// GET
    // GET all tasks from the database
router.get('/', (req, res) => {
    // write SQL query and save that in a variable
    let queryText = 'SELECT * FROM "weekend-to-do-app";';

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
    })
});

// GET for specific id

// POST

// PUT

// DELETE

module.exports = router;
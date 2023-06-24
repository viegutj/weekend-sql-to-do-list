// import pg and store as variable
const pg = require('pg');

// set up pg to connect to our database
// pool is that connection, using pg as a dependency

const pool = new pg.Pool({
    // name which database we're connecting to
    database: 'weekend-to-do-app',
    // we are hosting on our local computer
    host: 'localhost',
    // Postgres is listening on port 5432
    port: 5432
})

//export pool
module.exports = pool;
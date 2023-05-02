// PG database client/connection setup
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'template1',
  port: 5432
});

pool.connect();
module.exports = pool;















/*


const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};


const db = new Pool(dbParams);

db.connect();

module.exports = db;
*/

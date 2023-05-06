const db = require('../connection');

const addUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};



module.exports ={ addUsers };


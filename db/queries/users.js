const db = require('../connection');

const userLogin = function(user) {
  const queryString = `
  SELECT id, email, password
  FROM users
  WHERE email = $1`;

  const params = [user.email];
  return db.query(queryString, params);

};

module.exports = { userLogin };


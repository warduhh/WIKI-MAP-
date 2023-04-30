const db = require('../connection');


// 1. Query for read favorite_maps by user route
const getFavMapsByUser = (userID) => {
  return db.query(`SELECT favorite_maps.*, maps.* 
  FROM maps 
  JOIN favorite_maps ON map_id = maps.id 
  WHERE favorite_maps.user_id = $1`, [userID])  
}


module.exports = { 
  getFavMapsByUser
 };

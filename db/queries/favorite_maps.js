const db = require('../connection');


// 1. Query for read favorite_maps by user route
const getFavMapsByUser = (userID) => {
  return db.query(`SELECT favorite_maps.*, maps.* 
  FROM maps 
  JOIN favorite_maps ON map_id = maps.id 
  WHERE favorite_maps.user_id = $1`, [userID])  
}

// 2. Query for add favorite_maps route
const addFavMaps = (mapID, userID) => {
  return db.query(`INSERT INTO favorite_maps (map_id, user_id) VALUES ($1, $2);`, [mapID, userID])
}

// 3. Query for deleting favorite_maps route
const removeFavMaps = (mapID, userID) => {
  return db.query(`DELETE FROM favorite_maps WHERE map_id = $1 AND user_id = $2;`, [mapID, userID])     
}


module.exports = { 
  getFavMapsByUser,
  addFavMaps,
  removeFavMaps
 };

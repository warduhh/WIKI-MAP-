const db = require('../connection');

//Query to get all mapps
const getAllMaps = function (){
  return db.query(
<<<<<<< HEAD
    'SELECT DISTINCT (map_category), creator_id, id FROM maps;')
    .then((res) => {
      const results = [];
      const ids =[];
      res.rows.map(row => {
        if(!ids.includes(row.map_catrgory)) {
=======
    'SELECT DISTINCT(map_category), creator_id, id FROM maps;')
    .then((res) => {
      const results = [];
      const ids = [];
      res.rows.map(row => {
        if(!ids.includes(row.map_category)) {
>>>>>>> master
          results.push(row)
          ids.push(row.map_category);
        }
      })
      return results;
    });
};

const createMap = function (category, description, creator_id) {
  return db.query(
    'INSERT INTO maps (map_category, description, creator_id, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
    [category, description, creator_id]
  );
}

const updateMap = function (id, category, description) {
  return db.query(
    'UPDATE maps SET map_category = $2, description = $3, updated_at = NOW() WHERE id = $1 RETURNING *',
    [id, category, description]
  );
}










module.exports = {
  getAllMaps,
  createMap,
  updateMap
};

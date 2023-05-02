const db= require("../connection");


//Query to get all mapps
const getAllMaps = function (){
  return db.query(
    'SELECT * from maps;')
    .then((res) => {
      return res.rows;
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

/*function deleteMap(id) {
  return db.query('DELETE FROM maps WHERE id = $1', [id]);
}
*/








module.exports = {
  getAllMaps,
  createMap,
  updateMap,

 };

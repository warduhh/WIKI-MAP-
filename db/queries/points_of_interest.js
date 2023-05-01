const db = require('../connection');

function getPointsByMapId(map_id) {
  return db.query('SELECT * FROM points_of_interest WHERE map_id = $1', [map_id]);
}

function getPointById(id) {
  return db.query('SELECT * FROM points_of_interest WHERE id = $1', [id]);
}

function getPointsByDescription(map_id, description) {
  if (description) {
    return db.query('SELECT * FROM points_of_interest WHERE map_id = $1 AND description LIKE $2', [map_id, `%${description}%`]);
  } else {
    return db.query('SELECT * FROM points_of_interest WHERE map_id = $1', [map_id]);
  }
}

function createPoint(title, description, image_url, latitude, longitude, map_id, user_id) {
  return db.query(
    'INSERT INTO points_of_interest (title, description, image_url, latitude, longitude, map_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [title, description, image_url, latitude, longitude, map_id, user_id]
  );
}

function updatePoint(id, title, description, image_url, latitude, longitude) {
  return db.query(
    'UPDATE points_of_interest SET title = $2, description = $3, image_url = $4, latitude = $5, longitude = $6, updated_at = NOW() WHERE id = $1 RETURNING *',
    [id, title, description, image_url, latitude, longitude]
  );
}

function deletePoint(id) {
  return db.query('DELETE FROM points_of_interest WHERE id = $1', [id]);
}

module.exports = {
  getPointsByMapId,
  getPointById,
  getPointsByDescription,
  createPoint,
  updatePoint,
  deletePoint,
};

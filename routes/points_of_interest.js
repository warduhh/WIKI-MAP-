const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/', (req, res) => {
  const { title, description, latitude, longitude, map_id, user_id } = req.body;
  db.query(
    'INSERT INTO points_of_interest (title, description, latitude, longitude, map_id, user_id) VALUES ($1, $2, $3, $4, $5, $6)',
    [title, description, latitude, longitude, map_id, user_id],
    (err, result) => {
      if (err) {
        console.error('Error saving marker:', err);
        res.status(500).json({ error: err.message });
      } else {
        console.log('Marker saved successfully!');
        res.json(result.rows[0]);
      }
    }
  );
});

module.exports = router;







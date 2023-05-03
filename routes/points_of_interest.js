const express = require('express');
const router = express.Router();
const pointQueries = require('../db/queries/points_of_interest');

router.get('/', (req, res) => {
  const { map_id, description } = req.query;
  pointQueries.getPointsByDescription(map_id, description)
    .then(points => {
      res.json({ points });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  pointQueries.getPointById(id)
    .then(point => {
      res.json({ point });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  const { title, description, image_url, latitude, longitude, map_id, user_id } = req.body;
  pointQueries.createPoint(title, description, image_url, latitude, longitude, map_id, user_id)
    .then(point => {
      res.json({ point });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, image_url, latitude, longitude } = req.body;
  pointQueries.updatePoint(id, title, description, image_url, latitude, longitude)
    .then(point => {
      res.json({ point });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  pointQueries.deletePoint(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

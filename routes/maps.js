
const express = require('express');
const db = require("../db/queries/maps");
const router  = express.Router();
//const { ensureAuthenticated } = require('../config/auth'); // import authentication middleware
//const Map = require('../models/Map'); // import Map model
const PORT = 8080; // default port 8080



 //Route to display all maps
router.get('/', (req, res) => {
  db.getAllMaps().then((res)=> console.log(res))
});

// Route to display a specific map and its points
router.get('/:id', (req, res) => {
  Map.findById(req.params.id).populate('points').exec((err, map) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else if (!map) {
      res.status(404).send('Map Not Found');
    } else {
      res.render('map', { map });
    }
  });
});

// Routes for authenticated users only
//router.use(ensureAuthenticated);

// Route to display the create map form
router.get('/create', (req, res) => {
  res.render('create_map');
});

// Route to handle the create map form submission
router.post('/create', (req, res) => {
  const { title, description } = req.body;
  const user_id = req.user.id;
  const map = new Map({ title, description, user_id });
  map.save((err, map) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect(`/maps/${map.id}`);
    }
  });
});


// Route to handle the edit map form submission
router.post('/:id/edit', (req, res) => {
  Map.findById(req.params.id, (err, map) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else if (!map) {
      res.status(404).send('Map Not Found');
    } else if (map.user_id !== req.user.id) {
      res.status(403).send('Forbidden');
    } else {
      map.title = req.body.title;
      map.description = req.body.description;
      map.save((err, map) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.redirect(`/maps/${map.id}`);
        }
      });
    }
  });
});


module.exports = router;

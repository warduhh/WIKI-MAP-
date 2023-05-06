const express = require('express');
const { getFavMapsByUser, getFavMapsByMapID, addFavMaps, removeFavMaps } = require('../db/queries/favorite_maps')
const router  = express.Router();


// 1. Read favorite maps (authenticated user) -- Requirement: a user can view their favorite maps in their profile.
  router.get('/:id', (req, res) => {
  const userID = req.params.id;
  getFavMapsByUser(userID)
  .then(data => {
        // map_id: data.rows[0].map_id;
        // list of maps, which includes map name, not just first map.
        /*
        data.rows output:
          [
              {
                map_id: 1,
                user_id: 2,
                id: 1,
                creator_id: 1,
                created_at: 2023-04-30T07:00:00.000Z,
                updated_at: 2023-04-30T07:00:00.000Z,
                map_category: 'Restaurants',
                description: null
              }
            ]
         */
        // template vars res.render('favorite_maps')
          res.render('favorite_maps', {favMaps: data.rows});
     })
     .catch(err => {
      res
        .status(500)
        .render('error', {
          message: 'Something went wrong'
        });
        console.log("error: ", err);
     })
});

// 2. Browse favorite_maps by map_id (any user) -- Requirement: users can favorite a map
router.get('/', (req, res) => {
  const mapID = req.query.mapID
  getFavMapsByMapID(mapID)
  .then(data => {
    console.log("data.rows: ", data.rows)
    res.render('favorite_maps', { favMaps: data.rows })
  })
  .catch(err => {
    res
        .status(500)
        .render('error', {
          message: 'Something went wrong'
        });
        console.log("error: ", err);
  })
});


// 3.Add favorite maps
  router.post('/:id', (req, res) => {
    const userID = req.params.id;
    const mapID = req.body.mapID
    addFavMaps(mapID, userID)
    getFavMapsByUser(userID)
    .then(data => {
      res.render('favorite_maps', {favMaps: data.rows});
      })
      .catch(err => {
        res
        .status(500)
        .render('error', {
          message: 'Something went wrong'
        });
        console.log("error: ", err);
      })
});


//  4. Delete favorite maps
  router.post('/:id/delete', (req, res) => {
    const userID = req.params.id;
    const mapID = req.body.mapID;
    removeFavMaps(mapID, userID)
    getFavMapsByUser(userID)
    .then(data => {
      res.render('favorite_maps', {favMaps: data.rows});
      })
      .catch(err => {
        res
        .status(500)
        .render('error', {
          message: 'Something went wrong'
        });
        console.log("error: ", err);
      })
  });


module.exports = router;

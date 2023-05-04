const express = require('express');
const { addFavMaps, removeFavMaps } = require('../db/queries/favorite_maps')
const router  = express.Router();


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
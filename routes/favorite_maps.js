const express = require('express');
const { removeFavMaps } = require('../db/queries/favorite_maps')
const router  = express.Router();



//  4. Delete favorite maps
  router.post('/:id/delete', (req, res) => {
    const userID = req.params.id;
    const mapID = req.body.mapID;
    removeFavMaps(mapID, userID)
    .then(() => {
      res.redirect(`/profile/${userID}`);
    })
    
  });
 

module.exports = router;
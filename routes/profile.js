const express = require('express');
const router  = express.Router();
const { getFavMapsByUser, getFavMapsByMapID, addFavMaps } = require('../db/queries/favorite_maps')

// 1. Read favorite maps (authenticated user) -- Requirement: a user can view their favorite maps in their profile. 
  router.get('/:id', (req, res) => { 
  const userID = req.params.id;
  getFavMapsByUser(userID)
  .then(data => { 
      res.render('profile', {favMaps: data.rows});
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
    res.render('profile', { favMaps: data.rows })
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
  router.post('/:userID', (req, res) => { 
    const { userID }  = req.params;
    const { mapID } = req.body;
    addFavMaps(mapID, userID)
    .then(() => {
      res.redirect(`/profile/${userID}`);
    })
});


module.exports = router;
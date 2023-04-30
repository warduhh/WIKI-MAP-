const express = require('express');
const { getFavMapsByUser } = require('../db/queries/favorite_maps')
const router  = express.Router();


// 1. Read favorite maps (authenticated user) -- Requirement: a user can view their favorite maps in their profile. 
  router.get('/:id', (req, res) => { 
  const userID = req.params.id;
  getFavMapsByUser(userID)
  .then(data => {
        // template vars res.render('favorite_maps')
        // map_id: data.rows[0].map_id;
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
     })
     .catch(err => {
      res
        .status(500)
        console.log("erorr: ", err);
        // .render() 
        // render ejs
     })
}); 
 
 

module.exports = router;
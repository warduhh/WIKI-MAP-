const express = require('express');
const router  = express.Router();

/*
//if profile is loaded into here it will load on /users/profile
router.get('/profile', (req, res) => {
  res.render('profile');
});
*/

router.get ('login/:id', (req,res) => {
req.session.user_id = req.params.id;
response.redirect('/');
});


module.exports = router;

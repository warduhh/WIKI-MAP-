const express = require('express');
const {getAllMaps} = require("../db/queries/maps");
const router  = express.Router();

//This allows profile.ejs to load into /profile
router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get("/", (req, res) => {
  getAllMaps()
    .then((maps) => {
      res.render("index", { maps: maps });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});





module.exports = router;

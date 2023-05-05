const express = require('express');
const router  = express.Router();


router.get("/", (req, res) => {
  res.send("view the map you clicked")
});



module.exports = router;

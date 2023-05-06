const express = require('express');
const {userLogin} = require("../db/queries/login");
const router  = express.Router();

router.get('/', (req, res) => {
  const loginFail = req.query.error === 'loginfailed';
  res.render('login', { loginFail });
});

router.post('/', (req, res) => {
  userLogin(req.body)
    .then((rows) => {
      if (rows[0] && rows[0].password === req.body.password) {
        req.session.user = rows[0].id;
        return res.redirect('/');
      } else {
        return res.redirect('/login?error=loginfailed');
      }
    });
});

module.exports = router;

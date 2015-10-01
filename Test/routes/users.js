var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
	var username = ['blanka', 'zangief', 'dhalsim']

  res.render('users', {users: username});
});

module.exports = router;

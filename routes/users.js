var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req,res) => {
    // login the user and return the user object
    // if the login is successful
    // req.session.email = user.email;
    // req.session.role = user.role
    res.send("fhuifhroeuhbguoebrhogu")
})

module.exports = router;

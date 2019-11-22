var express = require('express');
var router = express.Router();

router.post('/check', async (req,res,next) => {
    console.log("hfiuwhfuiohweruiofhohfohghoghoih");
    res.status(200).send(true);
  });

  module.exports = router;
var express = require('express');
var router = express.Router();
var actionParse = require('../src/Action/actionParse');

/* GET home page. */
router.get('/', async function(req, res, next) {

  let action = new actionParse();
  let result = await action.run();
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
});

module.exports = router;

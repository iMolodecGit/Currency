const express = require('express');
const router = express.Router();
const actionParse = require('../src/Action/actionParse');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const action = new actionParse();
  let result = await action.run();
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
});

module.exports = router;

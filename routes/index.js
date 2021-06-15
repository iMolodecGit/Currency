const express = require('express');
const router = express.Router();
const actionIndex = require('./../src/Action/actionIndex');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const action = new actionIndex();
  let ret = await action.run();
//  res.render('index', { data: JSON.stringify(ret) });
  res.setHeader('Content-Type', 'application/json');
  res.send(ret);
});

module.exports = router;

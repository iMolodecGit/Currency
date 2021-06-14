let express = require('express');
let router = express.Router();
let actionIndex = require('./../src/Action/actionIndex');

/* GET home page. */
router.get('/', async function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let action = new actionIndex();
  let ret = await action.run();
  res.setHeader('Content-Type', 'application/json');

  res.send(ret);
});

module.exports = router;

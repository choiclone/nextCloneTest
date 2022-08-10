const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

module.exports = function handler () {
  router.use(bodyParser.json());

  router.get('/', function(req, res) {
    res.send('express server');
  });

  router.post('/api', (req, res) => {
    res.json({ddd: "test"});
  });

  return router;
}
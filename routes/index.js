var express = require('express');
var router = express.Router();
var request = require('superagent')
var caseHandler = require('../caseHandler')

/* GET home page. */
router.post('/', function(req, res) {
  //res.render('index', { title: "memebot"});
  console.log("hello")
  console.log("req", req.body.text)
  const result = caseHandler(req.body.text)
  res.send(result)
});

router.get('/', function(req, res) {
  res.send("hello, friend")
})


router.get('/meme', function(req, res) {
  res.send("hello meme")
})
module.exports = router;

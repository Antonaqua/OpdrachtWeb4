var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Deck = mongoose.model('Deck');

/* GET home page. */
router.get('/API/decks/', function(req, res, next) {
  Deck.find(function(err, decks) {
    if (err) { return next(err);}
    res.json(decks);
  });
});

module.exports = router;

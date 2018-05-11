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

router.post('/API/decks/', function(req, res, next) {
  console.log(req.body);
  let recipe = new Deck(req.body);
  deck.save(function(err, rec) {
    if (err) {
      return next(err);
    }
    res.json(rec);
  });
});

module.exports = router;

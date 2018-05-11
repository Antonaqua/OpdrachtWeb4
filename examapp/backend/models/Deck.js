var mongoose = require ('mongoose');

var RecipeSchema = new mongoose.Schema({
    name: String,
    cards: [String],
    created: Date,
});
mongoose.model('Deck', RecipeSchema);